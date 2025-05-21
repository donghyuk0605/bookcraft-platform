import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, CreditCard, Zap } from "lucide-react"

const currentPlan = "free" // 현재 사용자의 구독 플랜

export default function SubscriptionPage() {
  return (
    <div className="container py-8 max-w-5xl">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">구독 관리</h1>
          <p className="text-muted-foreground">구독 플랜과 결제 정보를 관리하세요.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className={`apple-card ${currentPlan === "free" ? "border-2 border-primary" : ""}`}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>무료</CardTitle>
                  <CardDescription>개인 사용을 위한 기본 기능</CardDescription>
                </div>
                {currentPlan === "free" && (
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    현재 플랜
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="text-3xl font-bold">₩0</span>
                <span className="text-muted-foreground"> / 월</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>최대 3권의 책</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>기본 템플릿</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>표준 내보내기 형식</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>커뮤니티 지원</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              {currentPlan === "free" ? (
                <Button variant="outline" className="w-full rounded-full" disabled>
                  현재 플랜
                </Button>
              ) : (
                <Button variant="outline" className="w-full rounded-full">
                  다운그레이드
                </Button>
              )}
            </CardFooter>
          </Card>

          <Card className={`apple-card ${currentPlan === "pro" ? "border-2 border-primary" : ""}`}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>프로</CardTitle>
                  <CardDescription>창작자를 위한 고급 기능</CardDescription>
                </div>
                {currentPlan === "pro" && (
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    현재 플랜
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="text-3xl font-bold">₩12,000</span>
                <span className="text-muted-foreground"> / 월</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>무제한 책</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>프리미엄 템플릿</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>고급 내보내기 옵션</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>우선 지원</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>사용자 정의 글꼴</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              {currentPlan === "pro" ? (
                <Button variant="outline" className="w-full rounded-full" disabled>
                  현재 플랜
                </Button>
              ) : (
                <Button className="w-full rounded-full">
                  <Zap className="mr-2 h-4 w-4" />
                  프로로 업그레이드
                </Button>
              )}
            </CardFooter>
          </Card>

          <Card className={`apple-card ${currentPlan === "enterprise" ? "border-2 border-primary" : ""}`}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>엔터프라이즈</CardTitle>
                  <CardDescription>팀 및 조직을 위한 플랜</CardDescription>
                </div>
                {currentPlan === "enterprise" && (
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    현재 플랜
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="text-3xl font-bold">₩49,000</span>
                <span className="text-muted-foreground"> / 월</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>프로의 모든 기능</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>팀 협업</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>고급 분석</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>전담 지원</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>맞춤형 브랜딩</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              {currentPlan === "enterprise" ? (
                <Button variant="outline" className="w-full rounded-full" disabled>
                  현재 플랜
                </Button>
              ) : (
                <Button variant="outline" className="w-full rounded-full">
                  영업팀 문의
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>

        <div className="mt-8">
          <Card className="apple-card">
            <CardHeader>
              <CardTitle>결제 정보</CardTitle>
              <CardDescription>결제 수단 및 결제 내역을 관리하세요</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">결제 수단</h3>
                  <div className="border rounded-md p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-muted p-2 rounded-md">
                        <CreditCard className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-medium">•••• •••• •••• 4242</p>
                        <p className="text-sm text-muted-foreground">만료일: 12/2025</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="rounded-full">
                        수정
                      </Button>
                      <Button variant="ghost" size="sm" className="rounded-full">
                        삭제
                      </Button>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="mt-4 rounded-full">
                    결제 수단 추가
                  </Button>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">결제 내역</h3>
                  <div className="border rounded-md divide-y">
                    {[
                      { date: "2023년 5월 1일", amount: "₩12,000", status: "결제 완료", plan: "프로 플랜" },
                      { date: "2023년 4월 1일", amount: "₩12,000", status: "결제 완료", plan: "프로 플랜" },
                      { date: "2023년 3월 1일", amount: "₩12,000", status: "결제 완료", plan: "프로 플랜" },
                    ].map((invoice, i) => (
                      <div key={i} className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">{invoice.date}</p>
                          <p className="text-sm text-muted-foreground">{invoice.plan}</p>
                        </div>
                        <div className="text-right">
                          <p>{invoice.amount}</p>
                          <p className="text-sm text-green-600">{invoice.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
