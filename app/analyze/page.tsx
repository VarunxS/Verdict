'use client'

import { useEffect, useState, useRef, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { LensSelectionModal } from '@/components/analyze/LensSelectionModal'
import { saveLiveData } from '@/lib/data-store'

const LOADING_STAGES = [
    { message: 'Connecting to intelligence network...', duration: 2000 },
    { message: 'Dispatching market intelligence agents...', duration: 4000 },
    { message: 'Analyzing financial statements...', duration: 6000 },
    { message: 'Running forensic audit checks...', duration: 8000 },
    { message: 'Investment committee in session...', duration: 12000 },
    { message: 'Management consulting review...', duration: 16000 },
    { message: 'Aggregating agent outputs...', duration: 20000 },
    { message: 'Compiling final verdict...', duration: 30000 },
    { message: 'Almost there — finalizing report...', duration: 60000 },
]

function AnalyzeContent() {
    const searchParams = useSearchParams()
    const tickerParam = searchParams.get('ticker')
    const ticker = tickerParam ? tickerParam.toUpperCase() : 'TITAN'

    const [showModal, setShowModal] = useState(false)
    const [dataReady, setDataReady] = useState(false)
    const [webhookStatus, setWebhookStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')
    const [stageIndex, setStageIndex] = useState(0)
    const [elapsedSeconds, setElapsedSeconds] = useState(0)
    const startTime = useRef(Date.now())

    // Cycle through loading stages based on elapsed time
    useEffect(() => {
        if (webhookStatus !== 'sending') return

        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime.current
            setElapsedSeconds(Math.floor(elapsed / 1000))

            // Find the appropriate stage based on elapsed time
            let newStage = 0
            for (let i = LOADING_STAGES.length - 1; i >= 0; i--) {
                if (elapsed >= LOADING_STAGES[i].duration) {
                    newStage = Math.min(i + 1, LOADING_STAGES.length - 1)
                    break
                }
            }
            setStageIndex(newStage)
        }, 500)

        return () => clearInterval(interval)
    }, [webhookStatus])

    // Main webhook trigger effect — uses API route instead of server action
    useEffect(() => {
        const init = async () => {
            if (!tickerParam) {
                // No ticker — show modal immediately with mock data
                setShowModal(true)
                return
            }

            setWebhookStatus('sending')
            startTime.current = Date.now()

            try {
                console.log(`[VERDICT] Calling /api/analyze for: ${tickerParam}`)

                const response = await fetch('/api/analyze', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ ticker: tickerParam.toUpperCase() }),
                })

                const result = await response.json()
                console.log('[VERDICT] API response:', { success: result.success, hasData: !!result.data, error: result.error })

                if (result.success && result.data) {
                    let livePayload = result.data
                    console.log('[VERDICT] Raw data type:', typeof livePayload, 'isArray:', Array.isArray(livePayload))

                    if (Array.isArray(livePayload) && livePayload.length > 0 && livePayload[0]?.data && Array.isArray(livePayload[0].data)) {
                        console.log('[VERDICT] Unwrapping [0].data from outer array')
                        livePayload = livePayload[0].data
                    }
                    else if (!Array.isArray(livePayload) && livePayload?.data && Array.isArray(livePayload.data)) {
                        console.log('[VERDICT] Unwrapping .data property')
                        livePayload = livePayload.data
                    }

                    console.log('[VERDICT] Final payload: isArray:', Array.isArray(livePayload), 'length:', livePayload?.length)
                    if (Array.isArray(livePayload)) {
                        livePayload.forEach((item: any, i: number) => {
                            const keys = item?.output ? Object.keys(item.output).slice(0, 3).join(', ') : 'no output'
                            console.log(`[VERDICT]   Item ${i}: ${keys}`)
                        })
                    }

                    saveLiveData(livePayload)
                    setWebhookStatus('success')
                    setDataReady(true)
                    console.log('[VERDICT] Live data saved to localStorage')
                } else {
                    console.error('[VERDICT] API returned error:', result.error)
                    setErrorMessage(result.error || 'Unknown error')
                    setWebhookStatus('error')
                }
            } catch (e: any) {
                console.error('[VERDICT] Fetch to /api/analyze failed:', e)
                setErrorMessage(e?.message || String(e))
                setWebhookStatus('error')
            }

            // Show modal after webhook completes (success or error)
            setTimeout(() => setShowModal(true), 800)
        }

        init()
    }, [tickerParam])

    return (
        <div className="min-h-screen bg-[#f5f3ee] text-[#0a0a0a] flex flex-col items-center justify-center"
            style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>
            {!showModal && (
                <div className="flex flex-col items-center gap-5">
                    {/* Animated Logo */}
                    <div className="relative">
                        <div className="w-14 h-14 bg-[#0a0a0a] flex items-center justify-center font-bold text-[#f5f3ee] text-xl"
                            style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontStyle: 'italic' }}>V</div>
                        {webhookStatus === 'sending' && (
                            <div className="absolute -inset-2 border border-[#0a0a0a]/30 animate-ping" />
                        )}
                    </div>

                    <div className="text-center space-y-3">
                        <div className="text-xs text-[#9a9490] uppercase tracking-widest">Target: {ticker}</div>

                        {webhookStatus === 'sending' && (
                            <>
                                <div className="text-[#0a0a0a] tracking-widest text-sm animate-pulse">
                                    {LOADING_STAGES[stageIndex].message}
                                </div>

                                {/* Progress dots */}
                                <div className="flex items-center justify-center gap-1.5 mt-4">
                                    {LOADING_STAGES.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`w-1.5 h-1.5 transition-all duration-500 ${i <= stageIndex ? 'bg-[#0a0a0a]' : 'bg-[#c8c2b6]'
                                                } ${i === stageIndex ? 'scale-125' : ''}`}
                                        />
                                    ))}
                                </div>

                                <div className="text-[10px] text-[#9a9490] mt-2">
                                    Elapsed: {Math.floor(elapsedSeconds / 60)}:{String(elapsedSeconds % 60).padStart(2, '0')}
                                </div>
                            </>
                        )}

                        {webhookStatus === 'success' && (
                            <div className="text-[#4caf7d] tracking-widest text-sm">
                                ✓ Intelligence compiled — loading results
                            </div>
                        )}

                        {webhookStatus === 'error' && (
                            <div className="text-center space-y-2">
                                <div className="text-[#8b1a1a] tracking-widest text-sm">
                                    ✗ Live sync failed — falling back to offline data
                                </div>
                                {errorMessage && (
                                    <div className="text-[10px] text-[#8b1a1a]/70 max-w-md">
                                        {errorMessage}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}

            <LensSelectionModal isOpen={showModal} ticker={ticker} dataReady={dataReady} />
        </div>
    )
}

export default function AnalyzePage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#f5f3ee]" />}>
            <AnalyzeContent />
        </Suspense>
    )
}
