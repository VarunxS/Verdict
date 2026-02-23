export function ProspectiveData() {
    const data = [
        { metric: 'Revenue ($B)', v24: '391.0', v25: '418.2', v26: '447.1', v27: '476.9', v28: '508.4' },
        { metric: 'Rev Growth', v24: '2.0%', v25: '7.0%', v26: '6.9%', v27: '6.7%', v28: '6.6%' },
        { metric: 'Gross Margin', v24: '45.8%', v25: '46.2%', v26: '46.8%', v27: '47.1%', v28: '47.5%' },
        { metric: 'EBITDA ($B)', v24: '133.2', v25: '146.4', v26: '159.8', v27: '172.1', v28: '185.0' },
        { metric: 'EBITDA Margin', v24: '34.1%', v25: '35.0%', v26: '35.7%', v27: '36.1%', v28: '36.4%' },
        { metric: 'EPS (Diluted)', v24: '6.56', v25: '7.34', v26: '8.12', v27: '8.95', v28: '9.82' },
        { metric: 'EPS Growth', v24: '7.1%', v25: '11.9%', v26: '10.6%', v27: '10.2%', v28: '9.7%' },
        { metric: 'P/E (Implied)', v24: '28.5x', v25: '25.5x', v26: '23.0x', v27: '20.9x', v28: '19.0x' },
    ]

    return (
        <section className="mb-20 scroll-mt-24" id="data">
            <div className="flex items-baseline gap-4 mb-8 border-b border-[#2a2a2a] pb-2">
                <span className="text-[#3b82f6] font-mono text-xs font-bold">05</span>
                <h2 className="text-sm font-bold tracking-widest uppercase text-[#a0a0a0]">Prospective Data Table (FY24-FY28E)</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                    <thead>
                        <tr className="border-b border-t border-[#333]">
                            <th className="py-2 pl-2 font-mono text-[10px] uppercase text-[#6a6a6a] font-normal tracking-wider w-[25%]">Key Metric</th>
                            <th className="py-2 px-4 font-mono text-[10px] uppercase text-[#6a6a6a] font-normal tracking-wider text-right w-[15%]">FY24E</th>
                            <th className="py-2 px-4 font-mono text-[10px] uppercase text-[#6a6a6a] font-normal tracking-wider text-right w-[15%]">FY25E</th>
                            <th className="py-2 px-4 font-mono text-[10px] uppercase text-[#6a6a6a] font-normal tracking-wider text-right w-[15%]">FY26E</th>
                            <th className="py-2 px-4 font-mono text-[10px] uppercase text-[#6a6a6a] font-normal tracking-wider text-right w-[15%]">FY27E</th>
                            <th className="py-2 pr-2 font-mono text-[10px] uppercase text-[#6a6a6a] font-normal tracking-wider text-right w-[15%]">FY28E</th>
                        </tr>
                    </thead>
                    <tbody className="font-mono text-xs">
                        {data.map((row, i) => (
                            <tr key={i} className="hover:bg-[#111] transition-colors border-b border-[#222] last:border-0">
                                <td className="py-3 pl-2 font-medium text-white/90">{row.metric}</td>
                                <td className="py-3 px-4 text-right text-[#a0a0a0]">{row.v24}</td>
                                <td className="py-3 px-4 text-right text-white font-bold">{row.v25}</td>
                                <td className="py-3 px-4 text-right text-white font-bold">{row.v26}</td>
                                <td className="py-3 px-4 text-right text-white font-bold">{row.v27}</td>
                                <td className="py-3 pr-2 text-right text-[#a0a0a0] italic">{row.v28}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
