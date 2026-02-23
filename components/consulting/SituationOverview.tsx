import { BarChart3, Zap, Target } from 'lucide-react'

export function SituationOverview() {
    const items = [
        {
            icon: BarChart3,
            title: 'Market Position',
            metric: '71.0%',
            label: 'INSTITUTIONAL SHARE',
            desc: 'Dominant positioning in premium segment despite increased fragmentation in emerging markets.',
            score: '92/100'
        },
        {
            icon: Zap,
            title: 'Operational Efficiency',
            metric: '44.6%',
            label: 'MARGIN EXPANSION',
            desc: 'Supply chain diversification yielding measurable improvements in unit economics.',
            score: '88/100'
        },
        {
            icon: Target,
            title: 'Strategic Alignment',
            metric: '12.1%',
            label: 'SERVICES GROWTH',
            desc: 'Pivot to services-first revenue model gaining traction ahead of hardware refresh cycle.',
            score: '76/100'
        }
    ]

    return (
        <section>
            <h2 className="text-2xl font-serif mb-8 flex items-center gap-4">
                <span className="text-[#10b981] font-sans text-xs font-bold tracking-widest uppercase border border-[#10b981] px-2 py-1 rounded-full">01</span>
                Situation Overview
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {items.map((item, i) => (
                    <div key={i} className="bg-[#0f1115] border border-[#2a2a2a] p-8 relative group hover:border-[#10b981]/30 transition-colors">
                        <div className="text-[10px] uppercase tracking-widest text-[#6a6a6a] mb-4 font-bold">{item.title}</div>

                        <p className="text-sm text-[#a0a0a0] leading-relaxed mb-12 min-h-[80px]">
                            {item.desc}
                        </p>

                        <div className="absolute bottom-8 left-8 right-8">
                            <div className="flex justify-between items-end border-t border-[#2a2a2a] pt-4">
                                <div>
                                    <div className="text-4xl font-light text-white mb-1 group-hover:text-[#10b981] transition-colors">{item.metric}</div>
                                    <div className="text-[9px] text-[#6a6a6a] uppercase tracking-wider">{item.label}</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[9px] text-[#6a6a6a] uppercase tracking-wider mb-1">Problem Score</div>
                                    <div className="text-sm font-mono text-[#10b981]">{item.score}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
