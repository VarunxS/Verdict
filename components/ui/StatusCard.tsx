import { cn } from '@/lib/utils'

interface StatusCardProps {
    label: string
    value: string
    subtext?: string
    trend?: 'up' | 'down' | 'neutral'
    className?: string
}

export function StatusCard({ label, value, subtext, trend, className }: StatusCardProps) {
    return (
        <div className={cn("bg-[#141414] border border-[#2a2a2a] p-6 flex flex-col items-center justify-center text-center", className)}>
            <div className="text-[10px] uppercase tracking-widest text-[#6a6a6a] mb-2">{label}</div>
            <div className={cn(
                "text-3xl font-bold font-mono tracking-tight mb-2",
                trend === 'up' && "text-[#10b981]",
                trend === 'down' && "text-[#ef4444]",
                trend === 'neutral' && "text-white"
            )}>
                {value}
            </div>
            {subtext && <div className="text-[10px] text-[#444] uppercase tracking-wider">{subtext}</div>}
        </div>
    )
}
