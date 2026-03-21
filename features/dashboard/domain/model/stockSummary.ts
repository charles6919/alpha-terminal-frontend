export type Sentiment = 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL'

export interface StockSummary {
    symbol: string
    name: string
    summary: string
    tags: string[]
    sentiment: Sentiment
    sentiment_score: number
    confidence: number
}
