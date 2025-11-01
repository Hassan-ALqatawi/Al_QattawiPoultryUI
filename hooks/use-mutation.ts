/**
 * File: hooks/use-mutation.ts
 * Purpose: Mutation hook for POST/PUT/DELETE with optimistic updates
 * Usage: const { mutate, isLoading } = useMutation('/api/Contact', 'POST')
 */

"use client"

import { useState, useCallback } from "react"
import { apiClient } from "@/lib/api-client"
import { notify } from "@/lib/notify"

interface UseMutationState {
  isLoading: boolean
  error: Error | null
}

export function useMutation<T>(endpoint: string, method: "POST" | "PUT" | "DELETE" = "POST") {
  const [state, setState] = useState<UseMutationState>({
    isLoading: false,
    error: null,
  })

  const mutate = useCallback(
    async (data?: any, options?: { onSuccess?: (data: T) => void; onError?: (error: Error) => void }) => {
      setState({ isLoading: true, error: null })
      try {
        let result: T
        if (method === "POST") {
          result = await apiClient.post<T>(endpoint, data)
        } else if (method === "PUT") {
          result = await apiClient.put<T>(endpoint, data)
        } else {
          result = await apiClient.delete<T>(endpoint)
        }

        setState({ isLoading: false, error: null })
        notify.success("تم بنجاح")
        options?.onSuccess?.(result)
        return result
      } catch (error) {
        const err = error instanceof Error ? error : new Error("Unknown error")
        setState({ isLoading: false, error: err })
        notify.error(err.message)
        options?.onError?.(err)
        throw err
      }
    },
    [endpoint, method],
  )

  return { ...state, mutate }
}
