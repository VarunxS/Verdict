'use server'

export async function triggerAnalysis(ticker: string) {
    if (!ticker) return { success: false, error: 'No ticker provided' }

    const webhookUrl = `http://localhost:5678/webhook-test/verdict-analysis-tool`

    try {
        console.log(`[VERDICT] Triggering webhook: ${webhookUrl} for ticker: ${ticker}`)

        // n8n workflows with multiple AI agents can take several minutes
        // Set a generous 5-minute timeout
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 5 * 60 * 1000)

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ticker: ticker.toUpperCase() }),
            signal: controller.signal,
        })

        clearTimeout(timeoutId)

        console.log(`[VERDICT] Webhook status: ${response.status}`)

        if (!response.ok) {
            const errorText = await response.text()
            console.error(`[VERDICT] Webhook failed with status: ${response.status}. Response: ${errorText}`)
            return { success: false, error: `Webhook failed: ${response.statusText} (${response.status})` }
        }

        const data = await response.json()
        console.log(`[VERDICT] Webhook success. Data received (length): ${JSON.stringify(data).length}`)
        console.log(`[VERDICT] Data preview:`, JSON.stringify(data).substring(0, 500))
        return { success: true, data }

    } catch (error: any) {
        const errorMessage = error?.message || String(error)
        const errorName = error?.name || 'Unknown'

        console.error(`[VERDICT] Error triggering analysis:`)
        console.error(`  Name: ${errorName}`)
        console.error(`  Message: ${errorMessage}`)
        console.error(`  Cause: ${error?.cause || 'none'}`)

        if (errorName === 'AbortError') {
            return { success: false, error: 'Webhook timed out after 5 minutes. Is the n8n workflow completing?' }
        }

        if (errorMessage.includes('ECONNREFUSED')) {
            return { success: false, error: 'Cannot connect to n8n at localhost:5678. Is n8n running?' }
        }

        if (errorMessage.includes('fetch failed')) {
            return { success: false, error: `Network error: ${error?.cause?.message || errorMessage}` }
        }

        return { success: false, error: `Failed to trigger analysis: ${errorMessage}` }
    }
}

