"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function TermsPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [agreed, setAgreed] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!agreed) return
        const params = searchParams.toString()
        router.push(`/signup${params ? `?${params}` : ""}`)
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-96 p-8 border rounded-lg">
                <h1 className="text-2xl font-bold">서비스 이용약관</h1>

                <div className="border rounded p-4 h-48 overflow-y-auto text-sm text-gray-600 bg-gray-50">
                    <p className="font-semibold mb-2">이용약관</p>
                    <p>본 서비스는 주식 공시 정보 분석 서비스입니다. 서비스 이용 시 개인정보 수집 및 이용에 동의하게 됩니다.</p>
                    <br />
                    <p className="font-semibold mb-2">개인정보 수집 및 이용</p>
                    <p>수집 항목: 닉네임, 이메일<br />수집 목적: 서비스 회원 관리<br />보유 기간: 회원 탈퇴 시까지</p>
                </div>

                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="w-4 h-4"
                    />
                    <span className="text-sm">이용약관 및 개인정보 수집에 동의합니다</span>
                </label>

                <button
                    type="submit"
                    disabled={!agreed}
                    className="bg-[#FEE500] text-[#3C1E1E] font-bold py-3 rounded-lg hover:bg-[#E6CF00] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    동의하고 계속하기
                </button>
            </form>
        </div>
    )
}
