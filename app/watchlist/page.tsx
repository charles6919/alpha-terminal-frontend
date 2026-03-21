'use client'

import { useState } from 'react'
import { useWatchlist } from '@/features/watchlist/application/hooks/useWatchlist'

const MARKET_OPTIONS = ['KOSPI', 'KOSDAQ', 'NASDAQ', 'NYSE']

const MARKET_BADGE: Record<string, string> = {
    KOSPI:  'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    KOSDAQ: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    NASDAQ: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
    NYSE:   'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
}

function MarketBadge({ market }: { market?: string | null }) {
    if (!market) return null
    const cls = MARKET_BADGE[market] ?? 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
    return (
        <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${cls}`}>
            {market}
        </span>
    )
}

export default function WatchlistPage() {
    const { items, isLoading, error, add, remove } = useWatchlist()
    const [input, setInput] = useState('')
    const [market, setMarket] = useState('')

    const handleAdd = async () => {
        const value = input.trim()
        if (!value) return
        await add(value, market || undefined)
        setInput('')
        setMarket('')
    }

    return (
        <main className="min-h-screen bg-background text-foreground p-8">
            <h1 className="text-2xl font-bold mb-8">관심종목</h1>

            {/* 등록 UI */}
            <section className="mb-8">
                <h2 className="text-lg font-semibold mb-3">종목 등록</h2>
                <div className="flex gap-2 flex-wrap">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                        placeholder="종목 코드(005930) 또는 종목명(삼성전자)"
                        className="flex-1 min-w-48 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-background text-foreground dark:border-gray-600"
                    />
                    <select
                        value={market}
                        onChange={(e) => setMarket(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg bg-background text-foreground dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">시장 선택 (선택)</option>
                        {MARKET_OPTIONS.map((m) => (
                            <option key={m} value={m}>{m}</option>
                        ))}
                    </select>
                    <button
                        onClick={handleAdd}
                        disabled={isLoading}
                        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors disabled:opacity-50"
                    >
                        등록
                    </button>
                </div>
                {error && (
                    <p className="mt-2 text-sm text-red-500">{error}</p>
                )}
            </section>

            {/* 목록 UI */}
            <section>
                <h2 className="text-lg font-semibold mb-3">
                    관심종목 목록{' '}
                    <span className="text-sm font-normal text-gray-500">({items.length})</span>
                </h2>

                {isLoading ? (
                    <p className="text-gray-500 py-8 text-center">불러오는 중...</p>
                ) : items.length === 0 ? (
                    <p className="text-gray-500 py-8 text-center border border-dashed border-gray-300 rounded-lg dark:border-gray-600">
                        등록된 관심종목이 없습니다.
                    </p>
                ) : (
                    <ul className="flex flex-col gap-2">
                        {items.map((item) => (
                            <li
                                key={item.id}
                                className="flex items-center justify-between px-4 py-3 border border-gray-200 rounded-lg dark:border-gray-700"
                            >
                                <div className="flex items-center gap-3">
                                    {/* 종목코드가 이름과 다를 때만 코드 표시 */}
                                    {item.symbol !== item.name && (
                                        <span className="font-mono text-sm font-semibold text-gray-400">
                                            {item.symbol}
                                        </span>
                                    )}
                                    <span className="font-medium">{item.name}</span>
                                    <MarketBadge market={item.market} />
                                </div>
                                <button
                                    onClick={() => remove(item.id)}
                                    className="px-3 py-1 text-sm text-red-600 border border-red-300 rounded hover:bg-red-50 active:bg-red-100 transition-colors dark:hover:bg-red-950"
                                >
                                    삭제
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </main>
    )
}
