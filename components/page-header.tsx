"use client"

interface PageHeaderProps {
  title: string
  subtitle?: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">{title}</h1>
        {subtitle && (
          <p className="text-xl text-foreground/70">{subtitle}</p>
        )}
      </div>
    </div>
  )
}

