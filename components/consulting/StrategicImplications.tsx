export function StrategicImplications() {
    return (
        <section>
            <h2 className="text-2xl font-serif mb-8 flex items-center gap-4">
                <span className="text-[#10b981] font-sans text-xs font-bold tracking-widest uppercase border border-[#10b981] px-2 py-1 rounded-full">03</span>
                Implications & Priority Roadmap
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-t border-[#2a2a2a] pt-12">

                {/* Immediate Actions */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-2 h-2 bg-[#ef4444] rounded-full"></div>
                        <h3 className="text-sm font-bold tracking-widest uppercase text-white">Immediate Actions (FY 2024)</h3>
                    </div>

                    <div className="space-y-8">
                        <div className="group">
                            <div className="font-bold text-white mb-2 group-hover:text-[#10b981] transition-colors">Accelerate Vision Pro Developer Ecosystem</div>
                            <p className="text-sm text-[#888] leading-relaxed">
                                Subsidize key studio partnerships to ensure 'killer app' availability at scale launch.
                                Critical to bridging hardware adoption chasm.
                            </p>
                        </div>
                        <div className="w-full h-px bg-[#2a2a2a]"></div>

                        <div className="group">
                            <div className="font-bold text-white mb-2 group-hover:text-[#10b981] transition-colors">Services Pricing Elasticity Test</div>
                            <p className="text-sm text-[#888] leading-relaxed">
                                Implement localized pricing adjustments in high-growth fragmentation markets
                                to determine ceiling for ARPU expansion.
                            </p>
                        </div>
                        <div className="w-full h-px bg-[#2a2a2a]"></div>

                        <div className="group">
                            <div className="font-bold text-white mb-2 group-hover:text-[#10b981] transition-colors">Wearables Health Integration</div>
                            <p className="text-sm text-[#888] leading-relaxed">
                                Finalize FDA pathways for non-invasive glucose monitoring to cement
                                healthcare lock-in strategy.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Strategic Horizon */}
                <div className="bg-[#14161b] p-8 -mt-8 -mb-8">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                        <h3 className="text-sm font-bold tracking-widest uppercase text-white">Strategic Horizon (2025-2026)</h3>
                    </div>

                    <div className="space-y-10">
                        <div>
                            <div className="text-[10px] text-[#3b82f6] font-bold uppercase tracking-widest mb-2">Automotive / Mobility</div>
                            <h4 className="text-xl font-serif text-white mb-3">Autonomous Systems Pivot</h4>
                            <p className="text-sm text-[#a0a0a0] leading-relaxed mb-4">
                                Transition from full car manufacturing to OS-level integration layer for legacy automakers.
                                Capture data value chain without heavy CAPEX exposure.
                            </p>
                            <div className="inline-block text-[10px] bg-[#3b82f6]/10 text-[#3b82f6] px-2 py-1 font-mono">STATUS: CONFIDENTIAL</div>
                        </div>

                        <div>
                            <div className="text-[10px] text-[#10b981] font-bold uppercase tracking-widest mb-2">Generative AI</div>
                            <h4 className="text-xl font-serif text-white mb-3">On-Device LLM Integration</h4>
                            <p className="text-sm text-[#a0a0a0] leading-relaxed mb-4">
                                Deployment of quantized models on edge hardware to ensure privacy-first AI leadership.
                                Differentiation through data security vs cloud-focused competitors.
                            </p>
                            <div className="inline-block text-[10px] bg-[#10b981]/10 text-[#10b981] px-2 py-1 font-mono">STATUS: IN DEVELOPMENT</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
