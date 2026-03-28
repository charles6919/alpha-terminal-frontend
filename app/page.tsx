"use client"

import Link from "next/link"
import { useHome } from "@/features/home/application/hooks/useHome"
import { HomeSentimentGauge } from "@/app/components/HomeSentimentGauge"
import { HomeAlphaTopPicks } from "@/app/components/HomeAlphaTopPicks"
import { HomeTodayBriefing } from "@/app/components/HomeTodayBriefing"

function Skeleton() {
    return (
        <div className="space-y-3">
            <div className="h-36 bg-surface-container animate-pulse" />
            <div className="h-36 bg-surface-container animate-pulse" />
        </div>
    )
}

export default function HomePage() {
    const state = useHome()

    return (
        <main className="mx-auto max-w-2xl px-4 py-8 pb-20 md:pb-8">
            <div className="mb-6 border-b border-outline pb-4">
                <div className="font-headline font-bold text-on-surface text-xl uppercase tracking-tighter">
                    HOME
                </div>
                <div className="font-mono text-sm text-on-surface-variant mt-0.5">
                    내 관심종목 AI 센티먼트 · 오늘의 알파 기회
                </div>
            </div>

            {state.status === "LOADING" && <Skeleton />}

            {state.status === "UNAUTHENTICATED" && (
                <div className="border border-dashed border-outline px-6 py-12 text-center">
                    <p className="font-mono text-sm text-on-surface-variant mb-4">
                        AI 분석 현황을 보려면 로그인이 필요합니다.
                    </p>
                    <Link
                        href="/login"
                        className="font-mono text-xs bg-primary text-white px-5 py-2 uppercase hover:opacity-90 inline-block"
                    >
                        로그인 →
                    </Link>
                </div>
            )}

            {state.status === "EMPTY" && (
                <div className="border border-dashed border-outline px-6 py-12 text-center">
                    <p className="font-mono text-sm text-on-surface-variant mb-1">
                        아직 AI 분석 데이터가 없습니다.
                    </p>
                    <p className="font-mono text-xs text-outline mb-4">
                        대시보드에서 관심종목 분석을 실행해 보세요.
                    </p>
                    <Link
                        href="/dashboard"
                        className="font-mono text-xs border border-outline px-5 py-2 text-on-surface-variant hover:bg-surface-container uppercase inline-block"
                    >
                        대시보드로 이동
                    </Link>
                </div>
            )}

            {state.status === "ERROR" && (
                <div className="border border-dashed border-outline px-6 py-10 text-center">
                    <p className="font-mono text-sm text-error">[ERROR] {state.message}</p>
                </div>
            )}

            {state.status === "READY" && (
                <div className="space-y-3">
                    <HomeSentimentGauge
                        gauge={state.stats.gauge}
                        distribution={state.stats.distribution}
                    />
                    <HomeAlphaTopPicks topPicks={state.stats.topPicks} />
                    <HomeTodayBriefing briefing={state.briefing} />
                </div>
            )}

            {(state.status === "READY" || state.status === "EMPTY") && (
                <div className="mt-5 flex gap-3">
                    <Link
                        href="/dashboard"
                        className="flex-1 border border-outline py-2 text-center font-mono text-xs text-on-surface-variant hover:bg-surface-container uppercase"
                    >
                        대시보드
                    </Link>
                    <Link
                        href="/watchlist"
                        className="flex-1 border border-outline py-2 text-center font-mono text-xs text-on-surface-variant hover:bg-surface-container uppercase"
                    >
                        관심종목
                    </Link>
                </div>
            )}
        </main>
    )
}
