import { AnalysisRequest, AnalysisResponse } from './types';

// Mock data generator since real n8n is not connected yet
export async function startAnalysis(data: AnalysisRequest): Promise<{ analysisId: string }> {
    // Simulate API call
    console.log('Starting analysis for:', data.ticker);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ analysisId: 'mock-' + Date.now() });
        }, 1000);
    });
}

export async function getAnalysisStatus(analysisId: string): Promise<AnalysisResponse> {
    // Simulate processing stages based on time (or random for demo)
    // For now, return 'processing' then 'complete'

    // This is a stub. In a real app, this would fetch from the n8n status endpoint.
    return {
        id: analysisId,
        status: 'complete', // Mock immediate completion for UI dev
        ticker: 'AAPL',
        processedAt: new Date().toISOString(),
        // Mock data would be populated here...
    };
}
