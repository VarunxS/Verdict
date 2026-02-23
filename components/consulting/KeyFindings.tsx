import { CheckCircle2, TrendingUp, AlertCircle, ArrowRight } from 'lucide-react'

export function KeyFindings() {
    return (
        <section>
            <h2 className="text-2xl font-serif mb-8 flex items-center gap-4">
                <span className="text-[#10b981] font-sans text-xs font-bold tracking-widest uppercase border border-[#10b981] px-2 py-1 rounded-full">02</span>
                Key Strategic Findings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Finding 1 */}
                <div className="bg-[#14161b] p-8 border-l-2 border-[#10b981]">
                    <div className="flex justify-between items-start mb-6">
                        <h3 className="text-lg font-bold text-white">Ecosystem Stickiness</h3>
                        <span className="bg-[#10b981]/10 text-[#10b981] text-[10px] font-bold px-2 py-1 tracking-wider uppercase">High-Value Growth</span>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <ArrowRight className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                            <span className="text-sm text-[#a0a0a0] leading-relaxed">
                                Cross-device continuity remains the primary churn deterrent, with multi-device
                                households showing <strong>3x LTV</strong> compared to single-device users.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <ArrowRight className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                            <span className="text-sm text-[#a0a0a0] leading-relaxed">
                                Subscription bundling (Apple One) has reduced marginal churn by 15 bps quarter-over-quarter.
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Finding 2 */}
                <div className="bg-[#14161b] p-8 border-l-2 border-[#3b82f6]">
                    <div className="flex justify-between items-start mb-6">
                        <h3 className="text-lg font-bold text-white">Supply Chain Resilience</h3>
                        <span className="bg-[#3b82f6]/10 text-[#3b82f6] text-[10px] font-bold px-2 py-1 tracking-wider uppercase">Operational Alpha</span>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <ArrowRight className="w-4 h-4 text-[#3b82f6] shrink-0 mt-0.5" />
                            <span className="text-sm text-[#a0a0a0] leading-relaxed">
                                Diversification into India has mitigated single-point failure risks, achieving
                                <strong>14% production volume</strong> ahead of FY25 targets.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <ArrowRight className="w-4 h-4 text-[#3b82f6] shrink-0 mt-0.5" />
                            <span className="text-sm text-[#a0a0a0] leading-relaxed">
                                Component redundancy protocols have reduced weather-related disruption impact by 65%.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
