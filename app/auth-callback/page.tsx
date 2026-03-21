"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useAuth } from "@/features/auth/application/hooks/useAuth"

export default function AuthCallbackPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const { handleAuthCallback } = useAuth()

    useEffect(() => {
        const result = handleAuthCallback()
        if (result === "pending_terms") {
            const params = searchParams.toString()
            router.replace(`/terms${params ? `?${params}` : ""}`)
        } else {
            router.replace("/")
        }
    }, [handleAuthCallback, router, searchParams])

    return (
        <div className="flex justify-center items-center h-screen">
            <p className="text-gray-500">인증 처리 중...</p>
        </div>
    )
}
