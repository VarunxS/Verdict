import { cn } from '@/lib/utils'

interface DataListProps {
    items: string[]
    type?: 'bullet' | 'alert' | 'check'
    className?: string
}

export function DataList({ items, type = 'bullet', className }: DataListProps) {
    return (
        <div className={cn("space-y-3", className)}>
            {items.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm leading-relaxed group">
                    <div className="shrink-0 mt-1.5">
                        {type === 'bullet' && <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]/50 group-hover:bg-[#3b82f6] transition-colors" />}
                        {type === 'alert' && <div className="w-1.5 h-1.5 rotate-45 bg-[#ef4444]/50 group-hover:bg-[#ef4444] transition-colors" />}
                        {type === 'check' && <div className="w-1.5 h-1.5 rounded-sm bg-[#10b981]/50 group-hover:bg-[#10b981] transition-colors" />}
                    </div>
                    <span className="text-[#a0a0a0] group-hover:text-white transition-colors">{item}</span>
                </div>
            ))}
        </div>
    )
}
