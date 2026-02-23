'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function SearchBar() {
    const [query, setQuery] = useState('')
    const router = useRouter()

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (query.trim()) {
            router.push(`/analyze?ticker=${encodeURIComponent(query.trim())}`)
        }
    }

    return (
        <div className="max-w-2xl mx-auto mb-6">
            <form onSubmit={handleSearch} className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6a6a6a] font-mono z-10">$</span>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="EXECUTE SEARCH: TICKER, ENTITY, OR FILING..."
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white placeholder:text-[#6a6a6a] 
                   px-12 py-4 font-mono text-sm focus:outline-none focus:border-[#3b82f6] 
                   transition-all duration-300 uppercase"
                    autoFocus
                />
                <Button
                    type="submit"
                    disabled={!query.trim()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-white text-black 
                   text-sm font-medium hover:bg-[#e0e0e0] transition-colors rounded-none"
                >
                    ANALYZE
                </Button>
            </form>
        </div>
    )
}
