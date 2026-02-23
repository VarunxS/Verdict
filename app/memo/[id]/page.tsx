'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { RefreshCw, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react'
import { INVESTMENT_DATA } from '@/lib/mock-data'
import { getLiveData } from '@/lib/data-store'

/* ─── verdict badge ─── */
function verdictColor(v: string) {
    if (v === 'CONTRADICTED') return 'text-[#8b1a1a] border-[#8b1a1a]/30 bg-[#8b1a1a]/8'
    if (v === 'PARTIALLY TRUE') return 'text-[#6b6560] border-[#6b6560]/30 bg-[#6b6560]/8'
    return 'text-[#4caf7d] border-[#4caf7d]/30 bg-[#4caf7d]/8'
}

/* ─── Section wrapper ─── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="mb-14">
            <h2 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#9a9490] mb-5 pb-2 border-b border-[#c8c2b6]"
                style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>{title}</h2>
            {children}
        </section>
    )
}

/* ─── Finding strip ─── */
function Finding({ text }: { text: string }) {
    return (
        <div className="mt-5 bg-[#ede9e1] border-l-2 border-[#0a0a0a] pl-4 pr-5 py-3">
            <p className="text-[13px] text-[#6b6560] leading-relaxed"
                style={{ fontFamily: 'var(--font-ibm-sans), sans-serif' }}>{text}</p>
        </div>
    )
}

export default function MemoPage({ params }: { params: { id: string } }) {
    const ticker = params.id ? decodeURIComponent(params.id) : 'TITAN'
    const [data, setData] = useState<any>(INVESTMENT_DATA)
    const [isLive, setIsLive] = useState(false)
    const [expandedScenario, setExpandedScenario] = useState<number | null>(0)

    useEffect(() => {
        let liveData = getLiveData()
        if (liveData) {
            if (Array.isArray(liveData) && liveData.length > 0 && liveData[0]?.data && Array.isArray(liveData[0].data)) {
                liveData = liveData[0].data
            } else if (!Array.isArray(liveData) && liveData.data && Array.isArray(liveData.data)) {
                liveData = liveData.data
            }
            let investmentOutput = null
            if (Array.isArray(liveData)) {
                investmentOutput = liveData.find((item: any) => item.quality_of_earnings || item.ic_briefing)
            }
            if (investmentOutput) {
                setData(investmentOutput)
                setIsLive(true)
            }
        }
    }, [])

    const ic = data.ic_briefing
    const qoe = data.quality_of_earnings
    const cs = data.capital_structure
    const ra = data.returns_analysis
    const vp = data.variant_perception
    const pb = data.peer_benchmarking
    const st = data.stress_test
    const mq = data.management_questions
    const dq = data.data_quality

    return (
        <div className="min-h-screen bg-[#f5f3ee] text-[#0a0a0a] pb-24" style={{ fontFamily: 'var(--font-ibm-sans), sans-serif' }}>

            {/* ═══ Nav Bar ═══ */}
            <div className="sticky top-0 z-40 bg-[#f5f3ee]/95 backdrop-blur-sm border-b border-[#c8c2b6] px-6 h-12 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#0a0a0a] flex items-center justify-center font-bold text-[#f5f3ee] text-[10px]"
                            style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontStyle: 'italic' }}>V</div>
                        <span className="text-sm font-semibold tracking-[0.1em] text-[#0a0a0a] uppercase"
                            style={{ fontFamily: 'var(--font-ibm-mono), monospace', fontSize: '11px' }}>Verdict</span>
                    </Link>
                    <div className="h-4 w-px bg-[#c8c2b6]" />
                    <span className="text-[11px] text-[#9a9490]"
                        style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Investment Memo</span>
                </div>
                <div className="flex items-center gap-3">
                    {isLive && <span className="text-[10px] text-[#4caf7d] animate-pulse"
                        style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>● LIVE</span>}
                    <Link href={`/consulting/${ticker}`}>
                        <button className="border border-[#c8c2b6] text-[#9a9490] hover:text-[#0a0a0a] hover:border-[#0a0a0a] h-7 text-[11px] tracking-wide gap-1.5 px-3 flex items-center transition-colors bg-transparent"
                            style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>
                            <RefreshCw className="w-3 h-3" />
                            Consulting View
                        </button>
                    </Link>
                </div>
            </div>

            {/* ═══ Company Header ═══ */}
            <div className="border-b border-[#c8c2b6] bg-[#ede9e1]">
                <div className="max-w-5xl mx-auto px-6 py-8">
                    <div className="flex items-start justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h1 className="text-2xl font-bold tracking-tight text-[#0a0a0a]"
                                    style={{ fontFamily: 'var(--font-serif), Georgia, serif' }}>{ticker}</h1>
                                {dq && (
                                    <span className={`text-[10px] px-2 py-0.5 border ${dq.status === 'CLEAN' ? 'border-[#4caf7d] text-[#4caf7d]' : 'border-[#8b1a1a] text-[#8b1a1a]'}`}
                                        style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>
                                        {dq.status}
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-[#6b6560] max-w-xl" style={{ fontFamily: 'var(--font-ibm-sans), sans-serif' }}>
                                {ic?.situation || 'Investment analysis memo generated by VERDICT intelligence platform.'}
                            </p>
                        </div>
                        <div className="text-right shrink-0 ml-8">
                            <div className="text-[10px] text-[#9a9490] uppercase tracking-widest mb-1"
                                style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Report Type</div>
                            <div className="text-sm text-[#6b6560]"
                                style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Investment Memo</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-10">

                {/* ═══ IC BRIEFING ═══ */}
                {ic && (
                    <div className="mb-16">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#c8c2b6] border border-[#c8c2b6] mb-6">
                            {[
                                { label: 'SITUATION', text: ic.situation },
                                { label: 'COMPLICATION', text: ic.complication },
                                { label: 'RESOLUTION', text: ic.resolution },
                            ].map((block, i) => (
                                <div key={i} className="bg-white p-5">
                                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a9490] mb-2"
                                        style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>{block.label}</div>
                                    <p className="text-[13px] text-[#6b6560] leading-7">{block.text}</p>
                                </div>
                            ))}
                        </div>

                        {/* Key convictions */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                            {(ic.three_things_to_own || []).map((thing: string, i: number) => (
                                <div key={i} className="bg-white border border-[#c8c2b6] p-4">
                                    <span className="text-[10px] text-[#0a0a0a] mr-2"
                                        style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>{String(i + 1).padStart(2, '0')}</span>
                                    <span className="text-[13px] text-[#6b6560] leading-relaxed">{thing}</span>
                                </div>
                            ))}
                        </div>

                        {/* Risk + Question */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="bg-white border border-[#c8c2b6] p-5">
                                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8b1a1a] mb-2 flex items-center gap-1.5"
                                    style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>
                                    <AlertTriangle className="w-3 h-3" /> Primary Risk
                                </div>
                                <p className="text-[13px] text-[#6b6560] leading-7">{ic.biggest_risk}</p>
                            </div>
                            <div className="bg-[#0a0a0a] border border-[#0a0a0a] p-5">
                                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f5f3ee]/50 mb-2"
                                    style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Open Question</div>
                                <p className="text-[13px] text-[#f5f3ee] leading-7 italic"
                                    style={{ fontFamily: 'var(--font-serif), Georgia, serif' }}>{ic.open_question}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* ═══ QUALITY OF EARNINGS ═══ */}
                {qoe && (
                    <Section title="Quality of Earnings">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {[
                                { title: 'Accruals Pattern', text: qoe.accruals_pattern?.analysis, flag: qoe.accruals_pattern?.flag },
                                { title: 'Margin Story', text: qoe.margin_story?.analysis },
                                { title: 'Revenue Quality', text: qoe.revenue_quality?.analysis },
                            ].map((card, i) => (
                                <div key={i} className="bg-white border border-[#c8c2b6] p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-[11px] font-semibold uppercase tracking-wider text-[#9a9490]"
                                            style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>{card.title}</h3>
                                        {card.flag && <span className="text-[9px] px-1.5 py-0.5 border border-[#8b1a1a]/30 text-[#8b1a1a]"
                                            style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>{card.flag.replace(/_/g, ' ')}</span>}
                                    </div>
                                    <p className="text-[13px] text-[#6b6560] leading-7">{card.text}</p>
                                </div>
                            ))}
                        </div>
                        <Finding text={qoe.section_finding} />
                    </Section>
                )}

                {/* ═══ CAPITAL STRUCTURE ═══ */}
                {cs && (
                    <Section title="Capital Structure">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-3">
                            <div className="bg-white border border-[#c8c2b6] p-5">
                                <h3 className="text-[11px] font-semibold uppercase tracking-wider text-[#9a9490] mb-2"
                                    style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Leverage Story</h3>
                                <p className="text-[13px] text-[#6b6560] leading-7">{cs.leverage_story?.analysis}</p>
                            </div>
                            <div className="bg-white border border-[#c8c2b6] p-5">
                                <h3 className="text-[11px] font-semibold uppercase tracking-wider text-[#9a9490] mb-2"
                                    style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Free Cash Flow</h3>
                                <p className="text-[13px] text-[#6b6560] leading-7">{cs.fcf_after_debt_service?.analysis}</p>
                            </div>
                        </div>

                        {cs.debt_capacity && (
                            <div className="bg-white border border-[#c8c2b6] p-5">
                                <h3 className="text-[11px] font-semibold uppercase tracking-wider text-[#9a9490] mb-4"
                                    style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Debt Capacity</h3>
                                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                                    {[
                                        { label: 'EBITDA', value: cs.debt_capacity.current_ebitda },
                                        { label: 'Max (3x)', value: cs.debt_capacity.max_debt_3x },
                                        { label: 'Max (4x)', value: cs.debt_capacity.max_debt_4x },
                                        { label: 'Net Debt', value: cs.debt_capacity.current_net_debt },
                                        { label: 'Room (3x)', value: cs.debt_capacity.headroom_3x, negative: true },
                                        { label: 'Room (4x)', value: cs.debt_capacity.headroom_4x, negative: true },
                                    ].map((item, i) => (
                                        <div key={i}>
                                            <div className="text-[9px] uppercase tracking-widest text-[#9a9490] mb-1"
                                                style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>{item.label}</div>
                                            <div className={`text-sm font-semibold ${(item as any).negative ? 'text-[#8b1a1a]' : 'text-[#0a0a0a]'}`}
                                                style={{ fontFamily: 'var(--font-serif), Georgia, serif' }}>{item.value}</div>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[13px] text-[#6b6560] leading-7 border-t border-[#c8c2b6] pt-3">{cs.debt_capacity.analysis}</p>
                            </div>
                        )}
                        <Finding text={cs.section_finding} />
                    </Section>
                )}

                {/* ═══ RETURNS ANALYSIS ═══ */}
                {ra && (
                    <Section title="Returns Analysis">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {[
                                { title: 'DuPont Decomposition', text: ra.dupont_story?.analysis, tag: ra.dupont_story?.primary_driver },
                                { title: 'ROIC', text: ra.roic_analysis?.analysis },
                                { title: 'Asset Efficiency', text: ra.efficiency_story?.analysis },
                            ].map((card, i) => (
                                <div key={i} className="bg-white border border-[#c8c2b6] p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-[11px] font-semibold uppercase tracking-wider text-[#9a9490]"
                                            style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>{card.title}</h3>
                                        {card.tag && <span className="text-[9px] px-1.5 py-0.5 border border-[#0a0a0a]/20 text-[#0a0a0a]"
                                            style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>{card.tag}</span>}
                                    </div>
                                    <p className="text-[13px] text-[#6b6560] leading-7">{card.text}</p>
                                </div>
                            ))}
                        </div>
                        <Finding text={ra.section_finding} />
                    </Section>
                )}

                {/* ═══ VARIANT PERCEPTION ═══ */}
                {vp && (
                    <Section title="Variant Perception">
                        {vp.sharpest_contradiction && (
                            <div className="bg-white border border-[#8b1a1a]/20 p-5 mb-4">
                                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8b1a1a] mb-1"
                                    style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Sharpest Contradiction</div>
                                <p className="text-[14px] text-[#0a0a0a] leading-relaxed"
                                    style={{ fontFamily: 'var(--font-serif), Georgia, serif' }}>{vp.sharpest_contradiction}</p>
                            </div>
                        )}

                        <div className="space-y-2">
                            {(vp.narratives || []).map((n: any, i: number) => (
                                <div key={i} className="bg-white border border-[#c8c2b6] p-5">
                                    <div className="flex items-start justify-between gap-4 mb-3">
                                        <p className="text-[13px] text-[#6b6560] italic flex-1"
                                            style={{ fontFamily: 'var(--font-serif), Georgia, serif' }}>"{n.consensus_narrative}"</p>
                                        <span className={`text-[10px] px-2 py-0.5 border whitespace-nowrap shrink-0 ${verdictColor(n.verdict)}`}
                                            style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>
                                            {n.verdict}
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t border-[#c8c2b6]">
                                        <div>
                                            <div className="text-[9px] uppercase tracking-widest text-[#9a9490] mb-1"
                                                style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Data Shows</div>
                                            <p className="text-[12px] text-[#6b6560] leading-relaxed">{n.what_data_shows}</p>
                                        </div>
                                        <div>
                                            <div className="text-[9px] uppercase tracking-widest text-[#9a9490] mb-1"
                                                style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Key Number</div>
                                            <p className="text-base font-semibold text-[#0a0a0a]"
                                                style={{ fontFamily: 'var(--font-serif), Georgia, serif' }}>{n.the_number_that_matters}</p>
                                        </div>
                                        <div>
                                            <div className="text-[9px] uppercase tracking-widest text-[#9a9490] mb-1"
                                                style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Implication</div>
                                            <p className="text-[12px] text-[#6b6560] leading-relaxed">{n.implication}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Finding text={vp.section_finding} />
                    </Section>
                )}

                {/* ═══ PEER BENCHMARKING ═══ */}
                {pb && (
                    <Section title="Peer Benchmarking">
                        <div className="bg-white border border-[#c8c2b6] p-5 mb-3">
                            <p className="text-[13px] text-[#6b6560] leading-7">{pb.analysis}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="bg-white border border-[#c8c2b6] p-5">
                                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4caf7d] mb-3"
                                    style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Leads</div>
                                {(pb.titan_leads || []).map((item: string, i: number) => (
                                    <div key={i} className="flex items-center gap-2 text-[13px] text-[#6b6560] mb-1.5">
                                        <div className="w-1 h-1 rounded-full bg-[#4caf7d]" /> {item}
                                    </div>
                                ))}
                            </div>
                            <div className="bg-white border border-[#c8c2b6] p-5">
                                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8b1a1a] mb-3"
                                    style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Trails</div>
                                {(pb.titan_trails || []).map((item: string, i: number) => (
                                    <div key={i} className="flex items-center gap-2 text-[13px] text-[#6b6560] mb-1.5">
                                        <div className="w-1 h-1 rounded-full bg-[#8b1a1a]" /> {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Finding text={pb.section_finding} />
                    </Section>
                )}

                {/* ═══ STRESS TEST ═══ */}
                {st && (
                    <Section title="Stress Test">
                        <div className="space-y-2">
                            {(st.scenarios || []).map((s: any, i: number) => (
                                <div key={i} className="bg-white border border-[#c8c2b6] overflow-hidden">
                                    <button
                                        onClick={() => setExpandedScenario(expandedScenario === i ? null : i)}
                                        className="w-full flex items-center justify-between p-5 text-left hover:bg-[#ede9e1] transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-sm font-semibold text-[#0a0a0a]"
                                                style={{ fontFamily: 'var(--font-serif), Georgia, serif' }}>{s.title}</span>
                                            {s.historical_precedent === 'YES' && (
                                                <span className="text-[9px] px-1.5 py-0.5 border border-[#c8c2b6] text-[#9a9490]"
                                                    style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Precedent</span>
                                            )}
                                        </div>
                                        {expandedScenario === i ? <ChevronUp className="w-4 h-4 text-[#9a9490]" /> : <ChevronDown className="w-4 h-4 text-[#9a9490]" />}
                                    </button>

                                    {expandedScenario === i && (
                                        <div className="px-5 pb-5 border-t border-[#c8c2b6] pt-4 space-y-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <div className="text-[9px] uppercase tracking-widest text-[#9a9490] mb-1"
                                                        style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Trigger</div>
                                                    <p className="text-[13px] text-[#6b6560] leading-relaxed">{s.trigger}</p>
                                                </div>
                                                <div>
                                                    <div className="text-[9px] uppercase tracking-widest text-[#8b1a1a] mb-1"
                                                        style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Breaks At</div>
                                                    <p className="text-base font-semibold text-[#8b1a1a]"
                                                        style={{ fontFamily: 'var(--font-serif), Georgia, serif' }}>{s.breaks_at}</p>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                <div className="bg-[#ede9e1] p-3 border border-[#c8c2b6]">
                                                    <div className="text-[9px] uppercase tracking-widest text-[#9a9490] mb-1"
                                                        style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>P&L Impact</div>
                                                    <p className="text-[12px] text-[#6b6560] leading-relaxed">{s.pnl_impact}</p>
                                                </div>
                                                <div className="bg-[#ede9e1] p-3 border border-[#c8c2b6]">
                                                    <div className="text-[9px] uppercase tracking-widest text-[#9a9490] mb-1"
                                                        style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Balance Sheet</div>
                                                    <p className="text-[12px] text-[#6b6560] leading-relaxed">{s.balance_sheet_impact}</p>
                                                </div>
                                            </div>
                                            {s.early_warning_indicators && (
                                                <div>
                                                    <div className="text-[9px] uppercase tracking-widest text-[#9a9490] mb-2"
                                                        style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Early Warnings</div>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {s.early_warning_indicators.map((w: string, j: number) => (
                                                            <span key={j} className="text-[11px] px-2 py-1 bg-[#ede9e1] border border-[#c8c2b6] text-[#6b6560]"
                                                                style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>{w}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <Finding text={st.section_finding} />
                    </Section>
                )}

                {/* ═══ MANAGEMENT QUESTIONS ═══ */}
                {mq && (
                    <Section title="Management Questions">
                        {mq.context && (
                            <div className="bg-white border border-[#c8c2b6] p-4 mb-4">
                                <p className="text-[12px] text-[#6b6560] leading-relaxed">{mq.context}</p>
                            </div>
                        )}
                        <div className="space-y-2">
                            {(mq.questions || []).map((q: any, i: number) => (
                                <div key={i} className="bg-white border border-[#c8c2b6] p-5">
                                    <div className="flex items-start gap-3 mb-3">
                                        <span className="text-[11px] text-[#0a0a0a] mt-0.5 shrink-0"
                                            style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>{String(i + 1).padStart(2, '0')}</span>
                                        <div>
                                            <p className="text-[13px] text-[#0a0a0a] leading-relaxed mb-1">{q.question}</p>
                                            <span className="text-[9px] text-[#9a9490] uppercase"
                                                style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>→ {q.targets}</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-7">
                                        <div className="bg-[#ede9e1] border border-[#c8c2b6] p-3">
                                            <div className="text-[9px] uppercase tracking-widest text-[#4caf7d] mb-1"
                                                style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Good Answer</div>
                                            <p className="text-[12px] text-[#6b6560] leading-relaxed">{q.good_answer}</p>
                                        </div>
                                        <div className="bg-[#ede9e1] border border-[#c8c2b6] p-3">
                                            <div className="text-[9px] uppercase tracking-widest text-[#8b1a1a] mb-1"
                                                style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Red Flag</div>
                                            <p className="text-[12px] text-[#6b6560] leading-relaxed">{q.bad_answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {mq.reasoning && <Finding text={mq.reasoning} />}
                    </Section>
                )}

                {/* ═══ Footer ═══ */}
                {dq?.impact_on_analysis && (
                    <div className="mt-8 pt-6 border-t border-[#c8c2b6]">
                        <p className="text-[11px] text-[#9a9490] leading-relaxed max-w-3xl">{dq.impact_on_analysis}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
