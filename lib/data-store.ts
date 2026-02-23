export const LIVE_DATA_KEY = 'verdict_live_intelligence'

export interface VerdictLiveResponse {
    investment_agent?: any[]
    management_agent?: any[]
    // Allow for flexible structure since n8n output can vary
    [key: string]: any
}

export function saveLiveData(data: any) {
    if (typeof window === 'undefined') return
    try {
        localStorage.setItem(LIVE_DATA_KEY, JSON.stringify(data))
    } catch (e) {
        console.error('Failed to save live data', e)
    }
}

export function getLiveData(): any | null {
    if (typeof window === 'undefined') return null
    try {
        const item = localStorage.getItem(LIVE_DATA_KEY)
        return item ? JSON.parse(item) : null
    } catch (e) {
        console.error('Failed to load live data', e)
        return null
    }
}

export function clearLiveData() {
    if (typeof window === 'undefined') return
    localStorage.removeItem(LIVE_DATA_KEY)
}
