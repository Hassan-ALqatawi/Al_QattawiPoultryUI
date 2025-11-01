/**
 * File: lib/api-client.ts
 * Purpose: Central API client for all admin requests
 * Maps to: NEXT_PUBLIC_API_BASE_URL + endpoints from Swagger
 * Endpoints: /api/Contact, /api/Service, /api/Protected, /api/Notifications, /api/Upload, /api/Account, /api/Analytics
 * Change: Set NEXT_PUBLIC_API_BASE_URL in .env.local
 * Security: Stores JWT in httpOnly cookie (recommended) or localStorage (note XSS risks)
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://al-qattawipoultryapi.runasp.net"
const AUTH_TOKEN_KEY = "admin_token"

interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

interface ApiError {
  status: number
  message: string
  data?: any
  isAuthError?: boolean // ⬅️ علامة خاصة لخطأ 401
}

class ApiClient {
  private baseUrl: string
  private token: string | null = null

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
    this.loadToken()
  }

  private loadToken() {
    if (typeof window !== "undefined") {
      this.token = localStorage.getItem(AUTH_TOKEN_KEY)
    }
  }

  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    }

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`
    }

    return headers
  }

  


  async request<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
  try {
    const url = `${this.baseUrl}${endpoint}`
    const response = await fetch(url, {
      ...options,
      headers: {
        ...this.getHeaders(),
        ...options.headers,
      },
    })

    if (!response.ok) {
      if (response.status === 401) {
        this.clearToken()
        if (typeof window !== "undefined") {
          window.location.href = "/admin/login"
        }
      }
      throw {
        status: response.status,
        message: response.statusText,
      } as ApiError
    }

    // ✅ التعديل هنا
    const text = await response.text()

    if (!text) {
      console.warn(`⚠️ Empty response from ${url}`)
      return { success: false, data: undefined, error: "Empty response" }
    }

    try {
      const data = JSON.parse(text)
      return { success: true, data }
    } catch (err) {
      // console.error(`❌ Invalid JSON response from ${url}:`, text)
      // return { success: false, data: undefined, error: "Invalid JSON format" }
      return { success: true, data: text as any }

    }
  } catch (error) {
    console.error("[API Error]", error)
    throw error
  }
}


  async get<T>(endpoint: string): Promise<T> {
    const response = await this.request<T>(endpoint, { method: "GET" })
    return response.data as T
  }

  async post<T>(endpoint: string, body: any): Promise<T> {
    const response = await this.request<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
    })
    return response.data as T
  }

  async put<T>(endpoint: string, body: any): Promise<T> {
    const response = await this.request<T>(endpoint, {
      method: "PUT",
      body: JSON.stringify(body),
    })
    return response.data as T
  }

  async delete<T>(endpoint: string): Promise<T> {
    const response = await this.request<T>(endpoint, { method: "DELETE" })
    return response.data as T
  }

  setToken(token: string) {
    this.token = token
    localStorage.setItem(AUTH_TOKEN_KEY, token)
  }

  clearToken() {
    this.token = null
    localStorage.removeItem(AUTH_TOKEN_KEY)
  }

  getToken(): string | null {
    return this.token
  }

  isAuthenticated(): boolean {
    return !!this.token
  }
}

export const apiClient = new ApiClient(API_BASE_URL)
