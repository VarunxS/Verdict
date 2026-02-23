import { NextRequest, NextResponse } from 'next/server'

// Increase the max duration for this API route (Vercel / serverless deployments)
export const maxDuration = 300 // 5 minutes

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const ticker = body.ticker

        if (!ticker) {
            return NextResponse.json({ success: false, error: 'No ticker provided' }, { status: 400 })
        }

        const webhookUrl = `http://localhost:5678/webhook-test/verdict-analysis-tool`

        console.log(`[VERDICT API] Triggering webhook: ${webhookUrl} for ticker: ${ticker}`)

        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 5 * 60 * 1000)

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ticker: ticker.toUpperCase() }),
            signal: controller.signal,
        })

        clearTimeout(timeoutId)

        console.log(`[VERDICT API] Webhook response status: ${response.status}`)

        if (!response.ok) {
            const errorText = await response.text()
            console.error(`[VERDICT API] Webhook failed: ${response.status} - ${errorText}`)
            return NextResponse.json(
                { success: false, error: `Webhook failed: ${response.status} - ${errorText}` },
                { status: 502 }
            )
        }

        const data = await response.json()
        console.log(`[VERDICT API] Success! Data length: ${JSON.stringify(data).length}`)

        return NextResponse.json({ success: true, data })

    } catch (error: any) {
        const msg = error?.message || String(error)
        console.error(`[VERDICT API] Error:`, msg, error?.cause)

        if (error?.name === 'AbortError') {
            return NextResponse.json({ success: false, error: 'Webhook timed out (5 min)' }, { status: 504 })
        }

        return NextResponse.json(
            { success: false, error: `Server error: ${error?.cause?.message || msg}` },
            { status: 500 }
        )
    }
}
