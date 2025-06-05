"use client"

import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container py-8 max-w-3xl">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">책공장이란?</h1>
          <p className="text-muted-foreground">
            책공장은 누구나 쉽게 책을 만들고 출판할 수 있도록 돕는 플랫폼입니다.
          </p>
        </div>

        <div className="space-y-4">
          <p>
            문서 작성 도구부터 템플릿, 커뮤니티까지 책 제작의 모든 과정을 한곳에서
            경험하세요.
          </p>
          <p>
            우리는 창작자들이 아이디어를 실현하는 데 집중할 수 있도록 직관적인
            도구와 유연한 워크플로우를 제공합니다.
          </p>
          <p>
            더 궁금한 점이 있으면 언제든지
            <Link href="/help" className="underline text-primary">
              도움말 페이지
            </Link>
            를 방문해주세요.
          </p>
        </div>
      </div>
    </div>
  )
}
