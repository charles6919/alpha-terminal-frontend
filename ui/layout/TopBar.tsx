"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useCallback, useEffect } from "react"
import { useAuth } from "@/features/auth/application/hooks/useAuth"

const NAV_ITEMS = [
    { href: "/dashboard", label: "DASHBOARD" },
    { href: "/watchlist", label: "WATCHLIST" },
    { href: "/board", label: "BOARD" },
    { href: "/youtube", label: "VIDEOS" },
]

export default function TopBar() {
    const { state, logout, loadUser } = useAuth()
    const router = useRouter()
    const pathname = usePathname()

    const isLoggedIn = state.status === "AUTHENTICATED"

    useEffect(() => {
        loadUser()
    }, [loadUser])

    const handleLogout = useCallback(async () => {
        await logout()
        router.push("/")
    }, [logout, router])

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center w-full px-2 h-10 bg-[#f9f9f9] border-b border-outline">
            <div className="flex items-center gap-6">
                <Link
                    href="/"
                    className="text-lg font-black tracking-tighter text-primary font-headline uppercase"
                >
                    ALPHA_DESK
                </Link>

                <nav className="hidden md:flex items-center gap-4 font-headline uppercase tracking-tighter text-sm font-bold h-10">
                    {NAV_ITEMS.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={
                                pathname.startsWith(href)
                                    ? "text-primary border-b-2 border-primary pb-1"
                                    : "text-on-surface opacity-80 hover:bg-surface-container transition-none px-1"
                            }
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
            </div>

            <div className="flex items-center gap-3">
                {isLoggedIn && state.status === "AUTHENTICATED" && (
                    <span className="hidden sm:block font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
                        {state.user.nickname}
                    </span>
                )}

                {isLoggedIn ? (
                    <button
                        type="button"
                        onClick={handleLogout}
                        className="border border-outline font-mono text-[10px] px-2 py-0.5 hover:bg-error hover:text-white hover:border-error transition-none uppercase cursor-pointer"
                    >
                        SYS_LOGOUT
                    </button>
                ) : (
                    <Link
                        href="/login"
                        className="bg-primary text-white font-mono text-[10px] px-2 py-0.5 hover:opacity-90 uppercase"
                    >
                        SYS_LOGIN
                    </Link>
                )}
            </div>
        </header>
    )
}
