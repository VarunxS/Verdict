'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { RefreshCw, AlertTriangle, ChevronRight } from 'lucide-react'
import { MANAGEMENT_DATA } from '@/lib/mock-data'
import { getLiveData } from '@/lib/data-store'

/* ─── Magnitude bar ─── */
function MagnitudeBar({ level }: { level: string }) {
    const fills = level === 'HIGH' ? 3 : level === 'MEDIUM' ? 2 : 1
    const color = level === 'HIGH' ? '#8b1a1a' : level === 'MEDIUM' ? '#9a9490' : '#4caf7d'
    return (
        <div className="flex gap-0.5 items-center">
            {[1, 2, 3].map(i => (
                <div key={i} className="w-2.5 h-1.5" style={{ backgroundColor: i <= fills ? color : '#c8c2b6' }} />
            ))}
            <span className="text-[10px] ml-1.5" style={{ color, fontFamily: 'var(--font-ibm-mono), monospace' }}>{level}</span>
        </div>
    )
}

/* ─── Rating badge ─── */
function RatingBadge({ rating }: { rating: string }) {
    const color = rating === 'FAVORABLE' ? '#4caf7d' : rating === 'UNFAVORABLE' ? '#8b1a1a' : '#9a9490'
    return <span className="text-[10px] px-1.5 py-0.5 border" style={{ color, borderColor: `${color}30`, fontFamily: 'var(--font-ibm-mono), monospace' }}>{rating}</span>
}

/* ─── Position badge ─── */
function PositionBadge({ position }: { position: string }) {
    const color = position === 'ADVANTAGE' ? '#4caf7d' : position === 'WEAKNESS' ? '#8b1a1a' : '#9a9490'
    return <span className="text-[10px] px-1.5 py-0.5 border" style={{ color, borderColor: `${color}30`, fontFamily: 'var(--font-ibm-mono), monospace' }}>{position}</span>
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

/* ─── Alignment dot ─── */
function AlignmentDot({ label, level }: { label: string; level: string }) {
    const color = level === 'HIGH' ? '#4caf7d' : level === 'MISALIGNED' || level === 'LOW' ? '#8b1a1a' : '#9a9490'
    return (
        <div>
            <div className="text-[9px] uppercase tracking-widest text-[#9a9490] mb-1.5"
                style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>{label}</div>
            <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                <span className="text-[11px]" style={{ color, fontFamily: 'var(--font-ibm-mono), monospace' }}>{level}</span>
            </div>
        </div>
    )
}

export default function ConsultingPage({ params }: { params: { id: string } }) {
    const ticker = params.id ? decodeURIComponent(params.id) : 'TITAN'
    const [data, setData] = useState<any>(MANAGEMENT_DATA)
    const [isLive, setIsLive] = useState(false)

    useEffect(() => {
        let liveData = getLiveData()
        if (liveData) {
            if (Array.isArray(liveData) && liveData.length > 0 && liveData[0]?.data && Array.isArray(liveData[0].data)) {
                liveData = liveData[0].data
            } else if (!Array.isArray(liveData) && liveData.data && Array.isArray(liveData.data)) {
                liveData = liveData.data
            }
            let consultingOutput = null
            if (Array.isArray(liveData)) {
                consultingOutput = liveData.find((item: any) => item.problem_definition || item.board_recommendation)
            }
            if (consultingOutput) {
                setData(consultingOutput)
                setIsLive(true)
            }
        }
    }, [])

    const br = data.board_recommendation
    const pd = data.problem_definition
    const is_ = data.industry_structure
    const cp = data.competitive_position
    const vc = data.value_chain
    const fpg = data.full_potential_gap
    const ga = data.growth_architecture
    const so = data.strategic_options
    const or_ = data.organizational_readiness
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
                        style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Strategic Advisory</span>
                </div>
                <div className="flex items-center gap-3">
                    {isLive && <span className="text-[10px] text-[#4caf7d] animate-pulse"
                        style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>● LIVE</span>}
                    <Link href={`/memo/${ticker}`}>
                        <button className="border border-[#c8c2b6] text-[#9a9490] hover:text-[#0a0a0a] hover:border-[#0a0a0a] h-7 text-[11px] tracking-wide gap-1.5 px-3 flex items-center transition-colors bg-transparent"
                            style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>
                            <RefreshCw className="w-3 h-3" />
                            Investment View
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
                                {data.sector && <span className="text-[11px] text-[#9a9490]"
                                    style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>— {data.sector}</span>}
                                {dq && (
                                    <span className={`text-[10px] px-2 py-0.5 border ${dq.status === 'CLEAN' ? 'border-[#4caf7d] text-[#4caf7d]' : 'border-[#8b1a1a] text-[#8b1a1a]'}`}
                                        style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>
                                        {dq.status}
                                    </span>
                                )}
                            </div>
                            {data.company && <p className="text-sm text-[#6b6560]">{data.company}</p>}
                            {data.period && <p className="text-[11px] text-[#9a9490] mt-1"
                                style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>{data.period}</p>}
                        </div>
                        <div className="text-right shrink-0 ml-8">
                            <div className="text-[10px] text-[#9a9490] uppercase tracking-widest mb-1"
                                style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Report Type</div>
                            <div className="text-sm text-[#6b6560]"
                                style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Strategic Advisory</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-10">

                {/* ═══ BOARD RECOMMENDATION HERO ═══ */}
                {br && (
                    <div className="mb-16">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#c8c2b6] border border-[#c8c2b6] mb-6">
                            {[
                                { label: 'SITUATION', text: br.situation },
                                { label: 'COMPLICATION', text: br.complication },
                                { label: 'RESOLUTION', text: br.resolution },
                            ].map((block, i) => (
                                <div key={i} className="bg-white p-5">
                                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a9490] mb-2"
                                        style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>{block.label}</div>
                                    <p className="text-[13px] text-[#6b6560] leading-7">{block.text}</p>
                                </div>
                            ))}
                        </div>

                        {/* Priority Actions */}
                        {br.priority_actions?.length > 0 && (
                            <div className="space-y-2 mb-6">
                                {br.priority_actions.map((action: any, i: number) => (
                                    <div key={i} className="bg-white border border-[#c8c2b6] p-5">
                                        <div className="flex items-start gap-3 mb-3">
                                            <span className="text-[11px] text-[#0a0a0a] mt-0.5 shrink-0"
                                                style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>{String(i + 1).padStart(2, '0')}</span>
                                            <div className="flex-1">
                                                <p className="text-[13px] font-semibold text-[#0a0a0a] mb-1">{action.action}</p>
                                                <div className="flex flex-wrap gap-2 text-[9px] text-[#9a9490]"
                                                    style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>
                                                    <span>Addresses: {action.addresses}</span>
                                                    <span>·</span>
                                                    <span>Owner: {action.owner}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-7">
                                            <div className="bg-[#ede9e1] border border-[#c8c2b6] p-3">
                                                <div className="text-[9px] uppercase tracking-widest text-[#4caf7d] mb-1"
                                                    style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>90 Days</div>
                                                <p className="text-[12px] text-[#6b6560] leading-relaxed">{action.milestone_90_days}</p>
                                            </div>
                                            <div className="bg-[#ede9e1] border border-[#c8c2b6] p-3">
                                                <div className="text-[9px] uppercase tracking-widest text-[#0a0a0a] mb-1"
                                                    style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>12 Months</div>
                                                <p className="text-[12px] text-[#6b6560] leading-relaxed">{action.milestone_12_months}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Board Question */}
                        {br.the_board_question && (
                            <div className="bg-[#0a0a0a] p-6 text-center">
                                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f5f3ee]/50 mb-3"
                                    style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>The Board Question</div>
                                <p className="text-base text-[#f5f3ee] leading-relaxed max-w-3xl mx-auto italic"
                                    style={{ fontFamily: 'var(--font-serif), Georgia, serif' }}>"{br.the_board_question}"</p>
                            </div>
                        )}
                    </div>
                )}

                {/* ═══ PROBLEM DEFINITION ═══ */}
                {pd && (
                    <Section title="Problem Definition">
                        <div className="bg-white border border-[#c8c2b6] p-5 mb-3">
                            <div className="text-[9px] uppercase tracking-widest text-[#9a9490] mb-2"
                                style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Central Problem</div>
                            <p className="text-[14px] text-[#0a0a0a] leading-relaxed mb-5"
                                style={{ fontFamily: 'var(--font-serif), Georgia, serif' }}>{pd.central_problem}</p>
                            {pd.issue_tree && (
                                <div className="space-y-2">
                                    {pd.issue_tree.map((branch: any, i: number) => (
                                        <div key={i} className="bg-[#ede9e1] border border-[#c8c2b6] p-4">
                                            <span className="text-[12px] font-semibold text-[#0a0a0a]">{branch.branch}</span>
                                            <div className="mt-2 space-y-1 ml-3">
                                                {(branch.diagnostic_questions || []).map((q: string, j: number) => (
                                                    <div key={j} className="flex items-start gap-1.5 text-[12px] text-[#6b6560]">
                                                        <ChevronRight className="w-3 h-3 mt-0.5 text-[#9a9490] shrink-0" /> {q}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <Finding text={pd.section_finding} />
                    </Section>
                )}

                {/* ═══ INDUSTRY STRUCTURE ═══ */}
                {is_ && (
                    <Section title="Industry Structure — Five Forces">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                            {[
                                { key: 'competitive_rivalry', label: 'Competitive Rivalry' },
                                { key: 'buyer_power', label: 'Buyer Power' },
                                { key: 'supplier_power', label: 'Supplier Power' },
                                { key: 'threat_of_entrants', label: 'Threat of Entrants' },
                                { key: 'threat_of_substitutes', label: 'Threat of Substitutes' },
                            ].map(({ key, label }) => {
                                const force = is_[key]
                                if (!force) return null
                                return (
                                    <div key={key} className="bg-white border border-[#c8c2b6] p-5">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-[#9a9490]"
                                                style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>{label}</h3>
                                            <RatingBadge rating={force.rating} />
                                        </div>
                                        <p className="text-[13px] text-[#6b6560] leading-7">{force.analysis}</p>
                                    </div>
                                )
                            })}
                            <div className="bg-white border border-[#c8c2b6] p-5 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-[9px] uppercase tracking-widest text-[#9a9490] mb-1"
                                        style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Overall</div>
                                    <div className="text-lg text-[#0a0a0a]"
                                        style={{ fontFamily: 'var(--font-serif), Georgia, serif' }}>{is_.overall_attractiveness}</div>
                                </div>
                            </div>
                        </div>
                        <Finding text={is_.section_finding} />
                    </Section>
                )}

                {/* ═══ COMPETITIVE POSITION ═══ */}
                {cp && (
                    <Section title="Competitive Position">
                        <div className="bg-white border border-[#c8c2b6] p-5">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
                                {[
                                    { label: 'Strategy', value: cp.generic_strategy },
                                    { label: 'Durability', value: cp.advantage_durability },
                                    { label: 'Share Trajectory', value: cp.market_share_trajectory },
                                    { label: 'Primary Threat', value: cp.primary_competitive_threat },
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="text-[9px] uppercase tracking-widest text-[#9a9490] mb-1"
                                            style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>{item.label}</div>
                                        <div className="text-[12px] text-[#0a0a0a]">{item.value}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-[#c8c2b6] pt-3">
                                <div className="text-[9px] uppercase tracking-widest text-[#9a9490] mb-1"
                                    style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Execution</div>
                                <p className="text-[13px] text-[#6b6560] leading-7">{cp.strategy_execution}</p>
                            </div>
                        </div>
                        <Finding text={cp.section_finding} />
                    </Section>
                )}

                {/* ═══ VALUE CHAIN ═══ */}
                {vc && (
                    <Section title="Value Chain">
                        <div className="space-y-2 mb-3">
                            {(vc.primary_activities || []).map((act: any, i: number) => (
                                <div key={i} className="bg-white border border-[#c8c2b6] p-5 flex items-start gap-3">
                                    <PositionBadge position={act.position} />
                                    <div>
                                        <span className="text-[12px] font-semibold text-[#0a0a0a]">{act.activity}</span>
                                        <p className="text-[12px] text-[#6b6560] leading-relaxed mt-1">{act.analysis}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className="bg-white border border-[#8b1a1a]/15 p-5">
                                <div className="text-[9px] uppercase tracking-widest text-[#8b1a1a] mb-1"
                                    style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Margin Leak</div>
                                <p className="text-[12px] text-[#6b6560] leading-relaxed">{vc.margin_leak}</p>
                            </div>
                            <div className="bg-white border border-[#4caf7d]/15 p-5">
                                <div className="text-[9px] uppercase tracking-widest text-[#4caf7d] mb-1"
                                    style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Highest Leverage</div>
                                <p className="text-[12px] text-[#6b6560] leading-relaxed">{vc.highest_leverage_activity}</p>
                            </div>
                        </div>
                        <Finding text={vc.section_finding} />
                    </Section>
                )}

                {/* ═══ FULL POTENTIAL GAP ═══ */}
                {fpg && (
                    <Section title="Full Potential Gap">
                        <div className="bg-white border border-[#c8c2b6] p-5">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-[9px] uppercase tracking-widest text-[#9a9490]"
                                    style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Type:</span>
                                <span className="text-[11px] text-[#0a0a0a]"
                                    style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>{fpg.gap_type}</span>
                            </div>
                            <div className="space-y-3">
                                {(fpg.performance_drags || []).map((drag: any, i: number) => (
                                    <div key={i} className="bg-[#ede9e1] border border-[#c8c2b6] p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0a0a0a]">{drag.type}</span>
                                            <MagnitudeBar level={drag.magnitude} />
                                        </div>
                                        <p className="text-[12px] text-[#6b6560] leading-relaxed">{drag.analysis}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Finding text={fpg.section_finding} />
                    </Section>
                )}

                {/* ═══ GROWTH ARCHITECTURE ═══ */}
                {ga && (
                    <Section title="Growth Architecture">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-3">
                            {ga.horizon_1 && (
                                <div className="bg-white border border-[#c8c2b6] p-5">
                                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4caf7d] mb-3"
                                        style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>H1 — Core</div>
                                    <div className="space-y-2 text-[12px]">
                                        <div><span className="text-[#9a9490]">Status:</span> <span className="text-[#0a0a0a]" style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>{ga.horizon_1.status}</span></div>
                                        <div><span className="text-[#9a9490]">Investment:</span> <span className="text-[#6b6560]" style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>{ga.horizon_1.investment_adequacy}</span></div>
                                        <p className="text-[#6b6560] leading-relaxed pt-1">{ga.horizon_1.core_threat}</p>
                                    </div>
                                </div>
                            )}
                            {ga.horizon_2 && (
                                <div className="bg-white border border-[#c8c2b6] p-5">
                                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0a0a0a] mb-3"
                                        style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>H2 — Emerging</div>
                                    <div className="flex flex-wrap gap-1 mb-2">
                                        {(ga.horizon_2.initiatives || []).map((init: string, j: number) => (
                                            <span key={j} className="text-[10px] px-1.5 py-0.5 bg-[#ede9e1] border border-[#c8c2b6] text-[#6b6560]"
                                                style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>{init}</span>
                                        ))}
                                    </div>
                                    <p className="text-[12px] text-[#6b6560] leading-relaxed">{ga.horizon_2.path_to_h1}</p>
                                    <div className="text-[11px] mt-2"><span className="text-[#9a9490]">Funding:</span> <span className="text-[#6b6560]" style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>{ga.horizon_2.funding_status}</span></div>
                                </div>
                            )}
                            {ga.horizon_3 && (
                                <div className="bg-white border border-[#c8c2b6] p-5">
                                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a9490] mb-3"
                                        style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>H3 — Frontier</div>
                                    <div className="text-[12px] mb-2"><span className="text-[#9a9490]">Visibility:</span> <span className="text-[#6b6560]" style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>{ga.horizon_3.options_visible}</span></div>
                                    <p className="text-[12px] text-[#6b6560] leading-relaxed">{ga.horizon_3.analysis}</p>
                                </div>
                            )}
                        </div>
                        {ga.portfolio_balance && (
                            <div className="bg-[#ede9e1] border border-[#c8c2b6] p-3 text-center text-[11px] text-[#6b6560] mb-3"
                                style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>
                                Portfolio Balance: <span className="text-[#0a0a0a]">{ga.portfolio_balance}</span>
                            </div>
                        )}
                        <Finding text={ga.section_finding} />
                    </Section>
                )}

                {/* ═══ STRATEGIC OPTIONS ═══ */}
                {so?.length > 0 && (
                    <Section title="Strategic Options">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                            {so.map((opt: any, i: number) => (
                                <div key={i} className="bg-white border border-[#c8c2b6] p-5">
                                    <h3 className="text-[13px] font-semibold text-[#0a0a0a] mb-4"
                                        style={{ fontFamily: 'var(--font-serif), Georgia, serif' }}>{opt.option}</h3>
                                    <div className="space-y-3 text-[12px]">
                                        {[
                                            { label: 'Requires', text: opt.requires, color: '#0a0a0a' },
                                            { label: 'Sacrifices', text: opt.sacrifices, color: '#8b1a1a' },
                                            { label: 'Wins When', text: opt.wins_when, color: '#4caf7d' },
                                            { label: 'Risk if Wrong', text: opt.risk_if_wrong, color: '#9a9490' },
                                        ].map((field, j) => (
                                            <div key={j}>
                                                <span className="text-[9px] uppercase tracking-widest" style={{ color: field.color, fontFamily: 'var(--font-ibm-mono), monospace' }}>{field.label}</span>
                                                <p className="text-[#6b6560] leading-relaxed mt-0.5">{field.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>
                )}

                {/* ═══ ORGANIZATIONAL READINESS ═══ */}
                {or_ && (
                    <Section title="Organizational Readiness">
                        <div className="bg-white border border-[#c8c2b6] p-5">
                            <div className="grid grid-cols-3 gap-6 mb-5">
                                <AlignmentDot label="Strategy Clarity" level={or_.strategy_clarity} />
                                <AlignmentDot label="Structure" level={or_.structure_alignment} />
                                <AlignmentDot label="Systems" level={or_.systems_alignment} />
                            </div>
                            {or_.critical_misalignment && (
                                <div className="bg-[#ede9e1] border border-[#8b1a1a]/15 p-4">
                                    <div className="flex items-center gap-1.5 mb-1">
                                        <AlertTriangle className="w-3 h-3 text-[#8b1a1a]" />
                                        <span className="text-[9px] uppercase tracking-widest text-[#8b1a1a] font-semibold"
                                            style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>Critical Misalignment</span>
                                    </div>
                                    <p className="text-[12px] text-[#6b6560] leading-relaxed">{or_.critical_misalignment}</p>
                                </div>
                            )}
                        </div>
                        <Finding text={or_.section_finding} />
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
