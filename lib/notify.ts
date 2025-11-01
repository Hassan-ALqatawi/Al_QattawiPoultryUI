/**
 * File: lib/notify.ts
 * Purpose: Toast notification utility for success/error/warning/info messages
 * Usage: notify.success('Item created'), notify.error('Failed to save')
 */

type NotificationType = "success" | "error" | "warning" | "info"

interface Toast {
  id: string
  message: string
  type: NotificationType
  duration?: number
}

class NotificationManager {
  private toasts: Toast[] = []
  private listeners: ((toasts: Toast[]) => void)[] = []

  subscribe(listener: (toasts: Toast[]) => void) {
    this.listeners.push(listener)
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener)
    }
  }

  private notify(message: string, type: NotificationType, duration = 3000) {
    const id = Math.random().toString(36).substr(2, 9)
    const toast: Toast = { id, message, type, duration }

    this.toasts = [...this.toasts, toast]
    this.listeners.forEach((listener) => listener(this.toasts))

    if (duration > 0) {
      setTimeout(() => {
        this.toasts = this.toasts.filter((t) => t.id !== id)
        this.listeners.forEach((listener) => listener(this.toasts))
      }, duration)
    }

    return id
  }

  success(message: string, duration?: number) {
    return this.notify(message, "success", duration)
  }

  error(message: string, duration?: number) {
    return this.notify(message, "error", duration)
  }

  warning(message: string, duration?: number) {
    return this.notify(message, "warning", duration)
  }

  info(message: string, duration?: number) {
    return this.notify(message, "info", duration)
  }

  getToasts() {
    return this.toasts
  }
}

export const notify = new NotificationManager()
