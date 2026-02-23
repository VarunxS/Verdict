import { motion } from 'framer-motion'
import { Briefcase, Landmark } from 'lucide-react'
import Link from 'next/link'

interface LensSelectionModalProps {
    isOpen: boolean
    ticker: string
    dataReady?: boolean
}

export function LensSelectionModal({ isOpen, ticker, dataReady = false }: LensSelectionModalProps) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div className="absolute inset-0 bg-[#f5f3ee]/90 backdrop-blur-sm animate-in fade-in duration-500" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative bg-white border border-[#c8c2b6] w-full max-w-4xl shadow-2xl overflow-hidden"
            >
                {/* Header content */}
                <div className="p-8 md:p-10 pb-6 text-center">
                    <h2 className="text-3xl font-bold text-[#0a0a0a] mb-3"
                        style={{ fontFamily: 'var(--font-serif), Georgia, serif' }}>Select Analytical Lens</h2>
                    <p className="text-[#6b6560] max-w-xl mx-auto text-sm leading-relaxed"
                        style={{ fontFamily: 'var(--font-ibm-sans), sans-serif' }}>
                        Customize the Verdict engine parameters to align with your specific professional requirements.
                    </p>
                    {/* Data status badge */}
                    <div className={`inline-flex items-center gap-2 mt-4 px-3 py-1 text-[10px] uppercase tracking-widest border ${dataReady
                        ? 'text-[#4caf7d] border-[#4caf7d]/30'
                        : 'text-[#9a9490] border-[#c8c2b6]'
                        }`}
                        style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>
                        <div className={`w-1.5 h-1.5 rounded-full ${dataReady ? 'bg-[#4caf7d] animate-pulse' : 'bg-[#c8c2b6]'}`} />
                        {dataReady ? 'Live Intelligence Ready' : 'Using Simulated Data'}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 md:p-10 pt-2">
                    {/* Investment Banking Card */}
                    <Link href={`/memo/${ticker}`} className="block group h-full">
                        <div className="bg-[#f5f3ee] border border-[#c8c2b6] p-8 h-full transition-all duration-300 group-hover:border-[#0a0a0a] relative overflow-hidden">
                            <div className="w-14 h-14 bg-white border border-[#c8c2b6] flex items-center justify-center mb-6 
                            group-hover:bg-[#0a0a0a] group-hover:border-[#0a0a0a] transition-colors">
                                <Landmark className="w-7 h-7 text-[#0a0a0a] group-hover:text-[#f5f3ee] transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 tracking-wide text-[#0a0a0a] uppercase"
                                style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: '18px', letterSpacing: '0.02em' }}>Investment<br />Banking</h3>
                            <p className="text-sm text-[#6b6560] mb-8 leading-relaxed"
                                style={{ fontFamily: 'var(--font-ibm-sans), sans-serif' }}>
                                Valuation modeling, M&A viability, capital structures, and equity capital markets focus.
                            </p>

                            <div className="flex items-center text-xs text-[#0a0a0a] opacity-80 group-hover:opacity-100 transition-opacity"
                                style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>
                                Initialize Framework <span className="ml-2">→</span>
                            </div>
                        </div>
                    </Link>

                    {/* Strategic Consulting Card */}
                    <Link href={`/consulting/${ticker}`} className="block group h-full">
                        <div className="bg-[#f5f3ee] border border-[#c8c2b6] p-8 h-full transition-all duration-300 group-hover:border-[#0a0a0a] relative overflow-hidden">
                            <div className="w-14 h-14 bg-white border border-[#c8c2b6] flex items-center justify-center mb-6
                            group-hover:bg-[#0a0a0a] group-hover:border-[#0a0a0a] transition-colors">
                                <Briefcase className="w-7 h-7 text-[#0a0a0a] group-hover:text-[#f5f3ee] transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 tracking-wide text-[#0a0a0a] uppercase"
                                style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: '18px', letterSpacing: '0.02em' }}>Strategic<br />Consulting</h3>
                            <p className="text-sm text-[#6b6560] mb-8 leading-relaxed"
                                style={{ fontFamily: 'var(--font-ibm-sans), sans-serif' }}>
                                Operational benchmarks, market positioning, unit economics, and growth strategy moats.
                            </p>

                            <div className="flex items-center text-xs text-[#0a0a0a] opacity-80 group-hover:opacity-100 transition-opacity"
                                style={{ fontFamily: 'var(--font-ibm-mono), monospace' }}>
                                Initialize Framework <span className="ml-2">→</span>
                            </div>
                        </div>
                    </Link>
                </div>


            </motion.div>
        </div>
    )
}


