"use client"

<<<<<<< HEAD
import { useCallback, useEffect } from "react"
import { useAtom } from "jotai"
import { streamInvestmentDecision } from "@/features/invest/infrastructure/api/investApi"
import {
    investQueryAtom,
    investIsLoadingAtom,
    investResultAtom,
=======
import { useAtom } from "jotai"
import { useCallback } from "react"
import { streamInvestmentDecision } from "@/features/invest/infrastructure/api/investApi"
import {
    investQueryAtom,
    investResultAtom,
    investIsLoadingAtom,
>>>>>>> c6fdd81 (feat: AI Insight 전역 상태 관리 적용 (BL-FE-72/73/74))
    investErrorAtom,
    investLogsAtom,
} from "@/features/invest/application/atoms/investJudgmentAtom"

export function useInvestJudgment() {
    const [query, setQuery] = useAtom(investQueryAtom)
<<<<<<< HEAD
    const [isLoading, setIsLoading] = useAtom(investIsLoadingAtom)
    const [result, setResult] = useAtom(investResultAtom)
    const [error, setError] = useAtom(investErrorAtom)
    const [logs, setLogs] = useAtom(investLogsAtom)

    // 브라우저 탭 닫기/새로고침 시 스트림 유실 방지
    useEffect(() => {
        if (!isLoading) return
        const handler = (e: BeforeUnloadEvent) => { e.preventDefault() }
        window.addEventListener("beforeunload", handler)
        return () => window.removeEventListener("beforeunload", handler)
    }, [isLoading])
=======
    const [result, setResult] = useAtom(investResultAtom)
    const [isLoading, setIsLoading] = useAtom(investIsLoadingAtom)
    const [error, setError] = useAtom(investErrorAtom)
    const [logs, setLogs] = useAtom(investLogsAtom)
>>>>>>> c6fdd81 (feat: AI Insight 전역 상태 관리 적용 (BL-FE-72/73/74))

    const submit = useCallback(async () => {
        if (!query.trim()) return
        setIsLoading(true)
        setError(null)
        setResult(null)
        setLogs([])
        try {
            for await (const event of streamInvestmentDecision(query.trim())) {
                if (event.type === "log") {
                    setLogs((prev) => [...prev, event.data])
                } else if (event.type === "result") {
                    setResult({ answer: event.data })
                } else if (event.type === "error") {
                    setError(event.data)
                }
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "투자 판단 요청에 실패했습니다.")
        } finally {
            setIsLoading(false)
        }
    }, [query, setIsLoading, setError, setResult, setLogs])

    const reset = useCallback(() => {
        setQuery("")
        setResult(null)
        setError(null)
        setLogs([])
    }, [setQuery, setResult, setError, setLogs])

    return { query, setQuery, result, isLoading, error, logs, submit, reset }
}
