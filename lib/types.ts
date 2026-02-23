export interface AnalysisRequest {
    ticker: string;
    companyName?: string;
}

export interface AnalysisResponse {
    id: string;
    status: 'processing' | 'complete' | 'error';
    ticker: string;
    companyData?: CompanyData;
    investmentMemo?: InvestmentMemo;
    consultingReport?: ConsultingReport;
    processedAt: string;
}

export interface CompanyData {
    name: string;
    ticker: string;
    sector: string;
    marketCap: number;
    peRatio: number;
    revenue: number;
    fcfYield: number;
    description: string;
}

export interface InvestmentMemo {
    executiveSummary: string;
    rating: 'BUY' | 'HOLD' | 'SELL';
    financialSnapshot: Record<string, any>;
    investmentThesis: ThesisPoint[];
    risks: RiskItem[];
    prospectiveData: Record<string, any>[];
}

export interface ConsultingReport {
    situationOverview: MetricItem[];
    keyFindings: FindingItem[];
    implications: {
        immediate: string[];
        mediumTerm: string[];
        longTerm: string;
    };
}

export interface ThesisPoint {
    title: string;
    content: string;
}

export interface RiskItem {
    dimension: string;
    probability: 'LOW' | 'MEDIUM' | 'HIGH';
    magnitude: 'LOW' | 'MEDIUM' | 'HIGH';
    mitigation: string;
}

export interface MetricItem {
    icon: string;
    title: string;
    metric: string;
    label: string;
    desc: string;
}

export interface FindingItem {
    title: string;
    highlight: string;
    content: string;
    metrics: { label: string; value: string }[];
}
