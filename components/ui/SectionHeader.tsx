import { cn } from '@/lib/utils'

interface SectionHeaderProps {
    title: string
    subtitle?: string
    className?: string
    icon?: React.ReactNode
}

export function SectionHeader({ title, subtitle, className, icon }: SectionHeaderProps) {
    return (
        <div className={cn("mb-6 border-b border-[#2a2a2a] pb-2", className)}>
            <div className="flex items-center gap-2 mb-1">
                {icon && <span className="text-[#3b82f6]">{icon}</span>}
                <h2 className="text-sm font-bold tracking-widest uppercase text-[#a0a0a0]">
                    {title}
                </h2>
            </div>
            {subtitle && <p className="text-xs text-[#6a6a6a]">{subtitle}</p>}
        </div>
    )
}
