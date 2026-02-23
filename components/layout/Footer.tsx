export function Footer() {
    return (
        <footer className="border-t border-[#2a2a2a] py-8 px-6 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-[#6a6a6a] gap-4">
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">LEGAL</a>
                    <a href="#" className="hover:text-white transition-colors">COMPLIANCE</a>
                    <a href="#" className="hover:text-white transition-colors">API</a>
                </div>
                <div>© 2026 VERDICT INTELLIGENCE CORP.</div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#00ff00] rounded-full animate-pulse"></div>
                    INSTITUTIONAL GRADE
                </div>
            </div>
        </footer>
    )
}
