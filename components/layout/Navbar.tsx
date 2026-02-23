import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-[#2a2a2a] bg-[#0a0a0a]/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white flex items-center justify-center">
                        <span className="text-black font-bold text-xl">V</span>
                    </div>
                    <span className="font-bold text-xl tracking-tight text-white">VERDICT</span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="#intelligence" className="text-sm text-[#a0a0a0] hover:text-white transition-colors">INTELLIGENCE</Link>
                    <Link href="#terminal" className="text-sm text-[#a0a0a0] hover:text-white transition-colors">TERMINAL</Link>
                    <Link href="#methodology" className="text-sm text-[#a0a0a0] hover:text-white transition-colors">METHODOLOGY</Link>
                    <Link href="#institutional" className="text-sm text-[#a0a0a0] hover:text-white transition-colors">INSTITUTIONAL</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" className="text-[#a0a0a0] hover:text-white">LOGIN</Button>
                    <Button variant="default" className="bg-white text-black hover:bg-[#e0e0e0]">
                        ACCESS
                    </Button>
                </div>
            </div>
        </nav>
    )
}
