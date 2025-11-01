/**
 * File: hooks/use-fetch.ts
 * Purpose: Data fetching hook with caching and revalidation
 * Usage: const { data, isLoading, error } = useFetch('/api/Contact')
 */

"use client"

import { useState, useEffect, useCallback } from "react"
import { apiClient } from "@/lib/api-client"

interface UseFetchState<T> {
  data: T | null
  isLoading: boolean
  error: Error | null
}

const cache = new Map<string, { data: any; timestamp: number }>()
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

export function useFetch<T>(
  endpoint: string | null,
  options?: { revalidateOnFocus?: boolean; cacheDuration?: number },
) {
  const [state, setState] = useState<UseFetchState<T>>({
    data: null,
    isLoading: true,
    error: null,
  })

  const fetch = useCallback(async () => {
    if (!endpoint) {
      setState({ data: null, isLoading: false, error: null })
      return
    }

    const cached = cache.get(endpoint)
    if (cached && Date.now() - cached.timestamp < (options?.cacheDuration || CACHE_DURATION)) {
      setState({ data: cached.data, isLoading: false, error: null })
      return
    }

    setState((prev) => ({ ...prev, isLoading: true }))
    try {
      const data = await apiClient.get<T>(endpoint)
      cache.set(endpoint, { data, timestamp: Date.now() })
      setState({ data, isLoading: false, error: null })
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        error: error instanceof Error ? error : new Error("Unknown error"),
      })
    }
  }, [endpoint, options?.cacheDuration])

  useEffect(() => {
    fetch()
  }, [fetch])

  const refetch = useCallback(() => {
    cache.delete(endpoint || "")
    fetch()
  }, [endpoint, fetch])

  return { ...state, refetch }
}
