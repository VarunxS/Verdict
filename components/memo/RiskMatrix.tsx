export function RiskMatrix() {
    const risks = [
        { id: 'R-1', criterion: 'Regulatory Pressure (EU DMA)', criticality: 'HIGH', probability: 'CERTAIN', mitigation: 'Platform bifurcation; API access fees' },
        { id: 'R-2', criterion: 'China Macro / Nationalism', criticality: 'HIGH', probability: 'LIKELY', mitigation: 'Diversify supply chain to India/Vietnam' },
        { id: 'R-3', criterion: 'GenAI Hardware Lag', criticality: 'MEDIUM', probability: 'POSSIBLE', mitigation: 'Accelerated NPU roadmap; M&A' },
        { id: 'R-4', criterion: 'Antitrust (DOJ US)', criticality: 'MEDIUM', probability: 'LIKELY', mitigation: 'Extended litigation; settlement' },
    ]

    return (
        <section className="mb-20 scroll-mt-24" id="risks">
            <div className="flex items-baseline gap-4 mb-8 border-b border-[#2a2a2a] pb-2">
                <span className="text-[#3b82f6] font-mono text-xs font-bold">04</span>
                <h2 className="text-sm font-bold tracking-widest uppercase text-[#a0a0a0]">Risk Assessment Matrix</h2>
            </div>

            <div className="w-full border-t border-b border-[#2a2a2a]">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-[#2a2a2a]">
                            <th className="py-3 pr-4 text-[10px] uppercase tracking-widest font-mono text-[#6a6a6a] font-normal w-[30%]">Risk Criterion</th>
                            <th className="py-3 px-4 text-[10px] uppercase tracking-widest font-mono text-[#6a6a6a] font-normal w-[15%]">Criticality</th>
                            <th className="py-3 px-4 text-[10px] uppercase tracking-widest font-mono text-[#6a6a6a] font-normal w-[15%]">Probability</th>
                            <th className="py-3 pl-4 text-[10px] uppercase tracking-widest font-mono text-[#6a6a6a] font-normal w-[40%]">Mitigation Strategy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {risks.map((risk, i) => (
                            <tr key={i} className={`group hover:bg-[#1a1a1a] transition-colors border-b border-[#2a2a2a]/30 last:border-0 ${i % 2 === 0 ? 'bg-transparent' : 'bg-[#0f0f0f]'}`}>
                                <td className="py-3 pr-4 font-mono text-xs text-white group-hover:text-[#3b82f6] transition-colors">
                                    <span className="text-[#444] mr-2 text-[10px]">{risk.id}</span>
                                    {risk.criterion}
                                </td>
                                <td className="py-3 px-4 font-mono text-[10px]">
                                    <span className={`${risk.criticality === 'HIGH' ? 'text-red-500' : 'text-[#a0a0a0]'}`}>
                                        {risk.criticality}
                                    </span>
                                </td>
                                <td className="py-3 px-4 font-mono text-[10px] text-[#a0a0a0]">
                                    {risk.probability}
                                </td>
                                <td className="py-3 pl-4 font-mono text-xs text-[#888]">
                                    {risk.mitigation}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
