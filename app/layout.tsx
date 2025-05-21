import type React from "react"
import { Inter, Lora } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"
import "./globals.css"

// 디자인 가이드에 맞는 폰트 설정
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata = {
  title: "BookCraft - 책공장 | 당신만의 책을 만들고 출판하세요",
  description: "로그인부터 작성, 편집, 출판, 공유, 인쇄까지 - 사용자가 100% 주도하는 통합 책 제작 플랫폼",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background antialiased", inter.variable, lora.variable, "font-sans")}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
