import { useCallback } from "react"
import { useAtom } from "jotai"
import { authStateAtom } from "../atoms/authAtom"
import { detectAuthState, getCurrentUserFromCookie, logoutUser } from "../../infrastructure/api/authApi"

export const useAuth = () => {
    const [state, setState] = useAtom(authStateAtom)

    const loadUser = useCallback(() => {
        setState(detectAuthState())
    }, [setState])

    const logout = useCallback(async () => {
        try {
            await logoutUser()
        } catch {
            // 백엔드 실패(401 등)와 무관하게 로컬 상태는 항상 초기화
        } finally {
            setState({ status: "UNAUTHENTICATED" })
        }
    }, [setState])

    const handleAuthCallback = useCallback((): "authenticated" | "pending_terms" => {
        const user = getCurrentUserFromCookie()
        if (user) {
            setState({ status: "AUTHENTICATED", user })
            return "authenticated"
        } else {
            setState({ status: "PENDING_TERMS" })
            return "pending_terms"
        }
    }, [setState])

    return { state, loadUser, logout, handleAuthCallback }
}
