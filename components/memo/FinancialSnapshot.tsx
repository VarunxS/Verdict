export function FinancialSnapshot() {
    const metrics = [
        { label: 'MARKET CAP', value: '2.94T', unit: 'USD', delta: '+1.2%' },
        { label: 'ENTERPRISE VALUE', value: '2.98T', unit: 'USD', delta: '-0.4%' },
        { label: 'LTM REVENUE', value: '383.3B', unit: 'USD', delta: '+2.1%' },
        { label: 'LTM EBITDA', value: '129.6B', unit: 'USD', delta: '+4.5%' },
        { label: 'P/E (NTM)', value: '26.4x', unit: 'MULT', delta: '+0.8x' },
        { label: 'EV/EBITDA', value: '19.8x', unit: 'MULT', delta: '-1.2x' },
    ]

    return (
        <section className="mb-20 scroll-mt-24" id="financial">
            <div className="flex items-baseline gap-4 mb-8 border-b border-[#2a2a2a] pb-2">
                <span className="text-[#3b82f6] font-mono text-xs font-bold">02</span>
                <h2 className="text-sm font-bold tracking-widest uppercase text-[#a0a0a0]">Financial Summary</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#2a2a2a] border border-[#2a2a2a]">
                {metrics.map((item, i) => (
                    <div key={i} className="bg-[#0f0f0f] p-6 group hover:bg-[#141414] transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-[10px] uppercase tracking-wider text-[#6a6a6a] group-hover:text-[#3b82f6] transition-colors">{item.label}</span>
                            <span className="text-[10px] font-mono text-[#444]">{item.unit}</span>
                        </div>
                        <div className="font-mono text-3xl text-white mb-2 tracking-tight">{item.value}</div>
                        <div className={`text-[10px] font-mono ${item.delta.startsWith('+') ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                            {item.delta} vs Consensus
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
