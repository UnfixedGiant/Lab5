"use client"

import { useRouter } from "next/navigation"

import {
    createContext,
    useContext,
    useState,
    useEffect,
    useCallback,
    ReactNode
} from "react"

import {
    checkGoogleSession,
    handleGoogleSignout
} from "../actions/GoogleAction"

interface User {
    id: string | null | undefined
    email: string | null | undefined
    name: string | null | undefined
}

interface AuthState {
    user: User
    isAuthenticated: boolean
    isLoading: boolean
}

interface AuthContextType extends AuthState {
    checkGoogle: () => void
    logout: () => Promise<void>
}




const AuthContext = createContext<AuthContextType | undefined>(undefined)




export function AuthProvider({ children }: { children: ReactNode }) {
    const router = useRouter()

    const user = {
        id: "",
        email: "",
        name: ""
    }

    const [authState, setAuthState] = useState<AuthState>({
        user: user,
        isAuthenticated: false,
        isLoading: true
    })

    const checkGoogle = async () => {
        const session = await checkGoogleSession()
        if (session) {
            const currentUser: User = {
                id: session.user?.id,
                name: session.user?.name,
                email: session.user?.email
            }
            setAuthState({
                user: currentUser,
                isAuthenticated: true,
                isLoading: false
            })
        }
    }

    useEffect(() => {
        checkGoogle()
    }, [])


    const logout = useCallback(async () => {
        setAuthState({
            user: user,
            isAuthenticated: false,
            isLoading: false
        })
        await handleGoogleSignout()
    }, [])


    const value: AuthContextType = {
        ...authState,
        checkGoogle,
        logout
    }

    return <AuthContext.Provider value={value}>{children} </AuthContext.Provider>
}


export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error("useAuth must be used wuthin an AuthProvider")
    }
    return context
}

