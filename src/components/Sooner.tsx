"use client"

import { Toaster as Sonner } from "sonner"
import React from "react";

type ToasterProps = React.ComponentProps<typeof Sonner> & {
    theme?: 'light' | 'dark' | 'system'
}

const Toaster = ({ theme = 'system', position = 'top-center', ...props }: ToasterProps) => {
    const getResolvedTheme = (): ToasterProps["theme"] => {
        if (theme !== 'system') return theme

        if (typeof window === 'undefined') return 'light'

        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
    }

    const resolvedTheme = getResolvedTheme()

    return (
        <Sonner
            theme={resolvedTheme}
            className="toaster group"
            position={position}
            toastOptions={{
                classNames: {
                    toast:
                        "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                    description: "group-[.toast]:text-muted-foreground",
                    actionButton:
                        "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                    cancelButton:
                        "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
                },
            }}
            {...props}
        />
    )
}

export { Toaster }