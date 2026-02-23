export function ExecutiveSummary() {
    return (
        <section className="mb-12 scroll-mt-24" id="summary">
            <div className="flex items-center gap-4 mb-4">
                <div className="text-xs font-mono text-[#6a6a6a] border border-[#2a2a2a] px-2 py-0.5">01</div>
                <h2 className="text-xl font-semibold tracking-wide">EXECUTIVE SUMMARY</h2>
            </div>
            <div className="border-l-2 border-[#2a2a2a] pl-6 ml-1">
                <p className="text-[#a0a0a0] leading-relaxed mb-6 max-w-4xl text-sm md:text-base">
                    Apple Inc. presents a compelling asymmetrical risk/reward profile driven by the Services segment expansion
                    and the impending supercycle in spatial computing hardware. Despite regulatory headwinds in the EU and
                    slowing hardware sales in China, the ecosystem stickiness remains at an all-time high of 94%.
                    Our proprietary model suggests the market is underpricing the margin expansion from strict operational
                    discipline and the shift to high-margin subscription revenue.
                </p>
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-4 inline-block">
                    <div className="text-xs text-[#3b82f6] mb-1 font-mono">CORE VERDICT</div>
                    <div className="font-semibold text-white">
                        Overweight relative to S&P 500 Information Technology Index.
                    </div>
                </div>
            </div>
        </section>
    )
}
