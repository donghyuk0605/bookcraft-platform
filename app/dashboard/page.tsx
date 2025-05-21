import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpenText,
  PenTool,
  Clock,
  BookOpen,
  Eye,
  Download,
  BarChart3,
  Printer,
  Users,
  Sparkles,
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight font-heading">대시보드</h1>
          <div className="flex items-center gap-2">
            <p className="text-muted-foreground">책 제작 현황과 통계를 한눈에 확인하세요.</p>
            <div className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">Pro</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border shadow-md bg-gradient-to-br from-primary/10 to-primary/5">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">작성 중인 책</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">3</div>
            </CardContent>
          </Card>
          <Card className="border shadow-md bg-gradient-to-br from-purple-500/10 to-purple-500/5">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">출판된 책</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">2</div>
            </CardContent>
          </Card>
          <Card className="border shadow-md bg-gradient-to-br from-blue-500/10 to-blue-500/5">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">총 조회수</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">1,234</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card className="border shadow-lg rounded-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                <CardTitle className="font-heading">진행 중인 프로젝트</CardTitle>
                <CardDescription>최근 작업 중인 책</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="bg-primary/10 p-1.5 rounded-md">
                          <BookOpenText className="h-4 w-4 text-primary" />
                        </div>
                        <span className="font-medium">여름 여행 일기</span>
                      </div>
                      <span className="text-sm text-muted-foreground">75%</span>
                    </div>
                    <Progress value={75} className="h-2 rounded-full" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        최근 편집: 2시간 전
                      </span>
                      <span>12/16 챕터 완료</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="bg-purple-500/10 p-1.5 rounded-md">
                          <BookOpenText className="h-4 w-4 text-purple-500" />
                        </div>
                        <span className="font-medium">요리 레시피 모음집</span>
                      </div>
                      <span className="text-sm text-muted-foreground">40%</span>
                    </div>
                    <Progress value={40} className="h-2 rounded-full bg-muted" indicatorColor="bg-purple-500" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        최근 편집: 1일 전
                      </span>
                      <span>8/20 챕터 완료</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="bg-blue-500/10 p-1.5 rounded-md">
                          <BookOpenText className="h-4 w-4 text-blue-500" />
                        </div>
                        <span className="font-medium">포트폴리오 작품집</span>
                      </div>
                      <span className="text-sm text-muted-foreground">25%</span>
                    </div>
                    <Progress value={25} className="h-2 rounded-full bg-muted" indicatorColor="bg-blue-500" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        최근 편집: 3일 전
                      </span>
                      <span>5/20 챕터 완료</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/30 px-6 py-3">
                <Link href="/library">
                  <Button variant="outline" size="sm" className="rounded-full">
                    모든 프로젝트 보기
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Card className="h-full border shadow-lg rounded-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                <CardTitle className="font-heading">빠른 작업</CardTitle>
                <CardDescription>자주 사용하는 기능</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Link href="/create">
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2 rounded-lg hover:bg-primary/5 hover:text-primary hover:border-primary transition-colors"
                    >
                      <PenTool className="h-4 w-4" />새 책 만들기
                    </Button>
                  </Link>
                  <Link href="/library?filter=recent">
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2 rounded-lg hover:bg-primary/5 hover:text-primary hover:border-primary transition-colors"
                    >
                      <Clock className="h-4 w-4" />
                      최근 작업 이어하기
                    </Button>
                  </Link>
                  <Link href="/templates">
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2 rounded-lg hover:bg-primary/5 hover:text-primary hover:border-primary transition-colors"
                    >
                      <BookOpen className="h-4 w-4" />
                      템플릿 둘러보기
                    </Button>
                  </Link>
                  <Link href="/stats">
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2 rounded-lg hover:bg-primary/5 hover:text-primary hover:border-primary transition-colors"
                    >
                      <BarChart3 className="h-4 w-4" />
                      통계 확인하기
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <Card className="border shadow-lg rounded-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
              <CardTitle className="font-heading">활동 통계</CardTitle>
              <CardDescription>출판된 책의 성과</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <Tabs defaultValue="views">
                <TabsList className="mb-6 bg-muted/50 p-1 rounded-full">
                  <TabsTrigger value="views" className="rounded-full data-[state=active]:bg-background">
                    조회수
                  </TabsTrigger>
                  <TabsTrigger value="downloads" className="rounded-full data-[state=active]:bg-background">
                    다운로드
                  </TabsTrigger>
                  <TabsTrigger value="engagement" className="rounded-full data-[state=active]:bg-background">
                    참여도
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="views" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-xl">
                        <Eye className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">총 조회수</div>
                        <div className="text-2xl font-bold">1,234</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-xl">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">완독률</div>
                        <div className="text-2xl font-bold">68%</div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[250px] flex items-center justify-center border rounded-xl bg-muted/20">
                    <div className="text-center">
                      <Sparkles className="h-10 w-10 text-muted-foreground/40 mx-auto mb-3" />
                      <span className="text-muted-foreground">조회수 차트가 여기에 표시됩니다</span>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="downloads" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-purple-500/10 p-3 rounded-xl">
                        <Download className="h-5 w-5 text-purple-500" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">총 다운로드</div>
                        <div className="text-2xl font-bold">356</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-purple-500/10 p-3 rounded-xl">
                        <Printer className="h-5 w-5 text-purple-500" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">인쇄 주문</div>
                        <div className="text-2xl font-bold">12</div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[250px] flex items-center justify-center border rounded-xl bg-muted/20">
                    <div className="text-center">
                      <Sparkles className="h-10 w-10 text-muted-foreground/40 mx-auto mb-3" />
                      <span className="text-muted-foreground">다운로드 차트가 여기에 표시됩니다</span>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="engagement" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-500/10 p-3 rounded-xl">
                        <Users className="h-5 w-5 text-blue-500" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">좋아요</div>
                        <div className="text-2xl font-bold">87</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-500/10 p-3 rounded-xl">
                        <BarChart3 className="h-5 w-5 text-blue-500" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">댓글</div>
                        <div className="text-2xl font-bold">24</div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[250px] flex items-center justify-center border rounded-xl bg-muted/20">
                    <div className="text-center">
                      <Sparkles className="h-10 w-10 text-muted-foreground/40 mx-auto mb-3" />
                      <span className="text-muted-foreground">참여도 차트가 여기에 표시됩니다</span>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
