// /**
//  * File: hooks/use-auth.ts
//  * Purpose: Authentication hook for login/logout and protected route guarding
//  * Maps to: POST /api/Account/Login, POST /api/Account
//  */

// "use client"

// import { useState, useCallback, useEffect } from "react"
// import { apiClient } from "@/lib/api-client"
// import { notify } from "@/lib/notify"

// interface User {
//   id: string
//   email: string
//   name: string
//   role: string
// }

// interface AuthState {
//   user: User | null
//   isLoading: boolean
//   isAuthenticated: boolean
// }

// export function useAuth() {
//   const [state, setState] = useState<AuthState>({
//     user: null,
//     isLoading: true,
//     isAuthenticated: false,
//   })

//   // useEffect(() => {
//   //   const checkAuth = async () => {
//   //     if (apiClient.isAuthenticated()) {
//   //       try {
//   //         const user = await apiClient.get<User>("/api/Account/Login")
//   //         setState({
//   //           user,
//   //           isLoading: false,
//   //           isAuthenticated: true,
//   //         })
//   //       } catch (error) {
//   //         setState({
//   //           user: null,
//   //           isLoading: false,
//   //           isAuthenticated: false,
//   //         })
//   //       }
//   //     } else {
//   //       setState({
//   //         user: null,
//   //         isLoading: false,
//   //         isAuthenticated: false,
//   //       })
//   //     }
//   //   }

//   //   checkAuth()
//   // }, [])

//   const login = useCallback(async (userName: string, password: string) => {
//     setState((prev) => ({ ...prev, isLoading: true }))
//     try {
//       const response = await apiClient.post<{ token: string; user: User }>("/api/Account/Login", { userName, password })
//       apiClient.setToken(response.token)
//       setState({
//         user: response.user,
//         isLoading: false,
//         isAuthenticated: true,
//       })
//       notify.success("تم تسجيل الدخول بنجاح")
//       return true
//     } catch (error) {
//       notify.error("فشل تسجيل الدخول")
//       setState((prev) => ({ ...prev, isLoading: false }))
//       return false
//     }
//   }, [])

//   const logout = useCallback(() => {
//     apiClient.clearToken()
//     setState({
//       user: null,
//       isLoading: false,
//       isAuthenticated: false,
//     })
//     notify.success("تم تسجيل الخروج")
//   }, [])

//   const register = useCallback(async (email: string, password: string, name: string) => {
//     setState((prev) => ({ ...prev, isLoading: true }))
//     try {
//       const response = await apiClient.post<{ token: string; user: User }>("/api/Account", { email, password, name })
//       apiClient.setToken(response.token)
//       setState({
//         user: response.user,
//         isLoading: false,
//         isAuthenticated: true,
//       })
//       notify.success("تم إنشاء الحساب بنجاح")
//       return true
//     } catch (error) {
//       notify.error("فشل إنشاء الحساب")
//       setState((prev) => ({ ...prev, isLoading: false }))
//       return false
//     }
//   }, [])

//   return {
//     ...state,
//     login,
//     logout,
//     register,
//   }
// }





"use client"

import { useState, useCallback, useEffect } from "react"
import { apiClient } from "@/lib/api-client"
import { notify } from "@/lib/notify"

interface User {
  userName: string
  token: string
}

interface AuthState {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
}

export function useAuth() {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: true,
    isAuthenticated: false,
  })

  // التحقق من وجود جلسة محفوظة
  useEffect(() => {
    const token = apiClient.getToken()
    if (token) {
      setState({
        user: { userName: "User", token },
        isLoading: false,
        isAuthenticated: true,
      })
    } else {
      setState({
        user: null,
        isLoading: false,
        isAuthenticated: false,
      })
    }
  }, [])

  // تسجيل الدخول
  const login = useCallback(async (userName: string, password: string) => {
    setState((prev) => ({ ...prev, isLoading: true }))
    try {
      const response = await apiClient.post<{ token: string; expiration: string }>(
        "/api/Account/Login",
        { userName, password }
      )

      apiClient.setToken(response.token)

      setState({
        user: { userName, token: response.token },
        isLoading: false,
        isAuthenticated: true,
      })

      notify.success("تم تسجيل الدخول بنجاح ✅")
      return true
    } catch (error) {
      notify.error("فشل تسجيل الدخول ❌")
      console.error(error)
      setState((prev) => ({ ...prev, isLoading: false }))
      return false
    }
  }, [])

  // تسجيل الخروج
  const logout = useCallback(() => {
    apiClient.clearToken()
    setState({
      user: null,
      isLoading: false,
      isAuthenticated: false,
    })
    notify.success("تم تسجيل الخروج ✅")
  }, [])

  return {
    ...state,
    login,
    logout,
  }
}
