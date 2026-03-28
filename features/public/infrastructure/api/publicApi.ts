import { env } from "@/infrastructure/config/env"
import type { PublicSummary } from "../../domain/model/publicSummary"

const PUBLIC_SYMBOLS = ["005930", "000660"]

export async function fetchPublicSummaries(): Promise<PublicSummary[]> {
    const params = new URLSearchParams({ symbols: PUBLIC_SYMBOLS.join(",") })
    const res = await fetch(`${env.apiBaseUrl}/public/summaries?${params}`, {
        method: "GET",
        next: { revalidate: 3600 },
    })
    if (!res.ok) return []
    return res.json()
}
