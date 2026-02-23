import { Activity, Columns, FileText } from 'lucide-react'

export function FeatureCards() {
    return (
        <section className="max-w-7xl mx-auto px-6 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-8 hover:border-[#333333] transition-colors group">
                    <div className="w-12 h-12 bg-[#141414] border border-[#2a2a2a] flex items-center justify-center mb-6 text-white group-hover:text-[#3b82f6] transition-colors">
                        <Activity className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-white">MARKET SYNTHESIS</h3>
                    <p className="text-sm text-[#a0a0a0] leading-relaxed mb-6">
                        Aggregation of tier-1 research and proprietary alternative data flows for
                        institutional portfolio modeling.
                    </p>
                    <div className="text-xs font-mono text-[#6a6a6a]">SOURCE: VERIFIED</div>
                </div>

                {/* Card 2 */}
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-8 hover:border-[#333333] transition-colors group">
                    <div className="w-12 h-12 bg-[#141414] border border-[#2a2a2a] flex items-center justify-center mb-6 text-white group-hover:text-[#10b981] transition-colors">
                        <Columns className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-white">DUAL PERSPECTIVES</h3>
                    <p className="text-sm text-[#a0a0a0] leading-relaxed mb-6">
                        Symmetric analysis providing both contrarian and consensus thesis to eliminate
                        cognitive bias in diligence.
                    </p>
                    <div className="text-xs font-mono text-[#6a6a6a]">LOGIC: BIPOLAR</div>
                </div>

                {/* Card 3 */}
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-8 hover:border-[#333333] transition-colors group">
                    <div className="w-12 h-12 bg-[#141414] border border-[#2a2a2a] flex items-center justify-center mb-6 text-white group-hover:text-[#6366f1] transition-colors">
                        <FileText className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-white">DELIVERABLE ENGINE</h3>
                    <p className="text-sm text-[#a0a0a0] leading-relaxed mb-6">
                        Instant generation of boardroom-ready artifacts formatted for IC committee
                        review and client presentation.
                    </p>
                    <div className="text-xs font-mono text-[#6a6a6a]">EXPORT: MULTIFORME</div>
                </div>
            </div>
        </section>
    )
}
