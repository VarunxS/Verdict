export function InvestmentThesis() {
    return (
        <section className="mb-20 scroll-mt-24" id="thesis">
            <div className="flex items-baseline gap-4 mb-8 border-b border-[#2a2a2a] pb-2">
                <span className="text-[#3b82f6] font-mono text-xs font-bold">03</span>
                <h2 className="text-sm font-bold tracking-widest uppercase text-[#a0a0a0]">Investment Thesis</h2>
            </div>

            <div className="space-y-12">
                <div className="flex gap-6 group">
                    <div className="text-xs font-mono text-[#444] group-hover:text-[#3b82f6] transition-colors pt-1">03.1</div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#3b82f6] transition-colors">
                            Services Revenue Compounding at Scale
                        </h3>
                        <p className="text-sm text-[#888] leading-relaxed max-w-4xl font-light">
                            Transformation from hardware-cyclical to recurring-revenue model is accelerating.
                            Services revenue now accounts for 22% of top line but over 35% of gross profit,
                            driving blended margins structurally higher. We model Services CAGR of 14% through FY27E.
                        </p>
                    </div>
                </div>

                <div className="flex gap-6 group">
                    <div className="text-xs font-mono text-[#444] group-hover:text-[#3b82f6] transition-colors pt-1">03.2</div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#3b82f6] transition-colors">
                            Capital Return Floor
                        </h3>
                        <p className="text-sm text-[#888] leading-relaxed max-w-4xl font-light">
                            Best-in-class capital return program with $90B+ in annual buybacks provides a
                            strong floor for EPS growth even in low-growth macro environments. Net cash neutral
                            target implies continued aggressive returns, effectively reducing float by ~3% annually.
                        </p>
                    </div>
                </div>

                <div className="flex gap-6 group">
                    <div className="text-xs font-mono text-[#444] group-hover:text-[#3b82f6] transition-colors pt-1">03.3</div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#3b82f6] transition-colors">
                            Ecosystem Lock-in & Pricing Power
                        </h3>
                        <p className="text-sm text-[#888] leading-relaxed max-w-4xl font-light">
                            Active installed base of 2.2 billion devices creates a massive, captive audience.
                            Churn remains industry-lowest at &lt;2%. Recent price hikes in Arcade and TV+
                            demonstrate latent pricing power that has yet to fully flow through to ARPU metrics.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
