import { httpClient } from "@/infrastructure/http/httpClient"
import type { StockSummary } from "../../domain/model/stockSummary"

export async function fetchDashboardSummaries(): Promise<StockSummary[]> {
    const res = await httpClient.get("/pipeline/summaries")
    return res.json()
}

export async function runPipeline(): Promise<void> {
    await httpClient.post("/pipeline/run")
}
