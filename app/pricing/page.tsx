"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="container py-8 max-w-5xl">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">요금제</h1>
          <p className="text-muted-foreground">필요에 맞는 플랜을 선택하세요.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "무료",
              price: "₩0",
              features: [
                "최대 3권의 책",
                "기본 템플릿",
                "커뮤니티 지원",
              ],
              action: <Button variant="outline" className="w-full rounded-full">시작하기</Button>,
            },
            {
              title: "프로",
              price: "₩12,000",
              features: [
                "무제한 책",
                "프리미엄 템플릿",
                "우선 지원",
              ],
              action: <Button className="w-full rounded-full">업그레이드</Button>,
            },
            {
              title: "엔터프라이즈",
              price: "₩49,000",
              features: [
                "팀 협업",
                "고급 분석",
                "맞춤형 브랜딩",
              ],
              action: (
                <Button variant="outline" className="w-full rounded-full">
                  영업팀 문의
                </Button>
              ),
            },
          ].map((plan, i) => (
            <Card key={i} className="apple-card">
              <CardHeader>
                <CardTitle>{plan.title}</CardTitle>
                <CardDescription>{plan.price} / 월</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>{plan.action}</CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
