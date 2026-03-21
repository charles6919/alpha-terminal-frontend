"use client"

import { ReactNode, useEffect } from "react"
import Navbar from "./Navbar"
import { useAuth } from "@/features/auth/application/hooks/useAuth"

export default function AppLayout({ children }: { children: ReactNode }) {
    const { loadUser } = useAuth()

    useEffect(() => {
        loadUser()
    }, [loadUser])

    return (
        <>
            <Navbar />
            {children}
        </>
    )
}
