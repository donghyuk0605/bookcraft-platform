import type { ReactNode } from "react"
import Link from "next/link"
import {
  BookOpen,
  LayoutDashboard,
  Library,
  PenTool,
  Palette,
  Store,
  Users,
  Share2,
  Printer,
  BarChart3,
  Settings,
  HelpCircle,
  Bell,
  Search,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ModeToggle } from "@/components/mode-toggle"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Suspense } from "react"
import { LanguageSelector } from "@/components/language-selector"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 apple-blur">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">메뉴 열기</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <div className="flex flex-col gap-1 p-4">
                  <div className="flex items-center gap-2 mb-4 px-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span className="text-lg font-semibold">책공장</span>
                  </div>
                  <Link href="/dashboard">
                    <Button variant="ghost" className="w-full justify-start gap-2 font-medium">
                      <LayoutDashboard className="h-4 w-4" />
                      대시보드
                    </Button>
                  </Link>
                  <Link href="/library">
                    <Button variant="ghost" className="w-full justify-start gap-2 font-medium">
                      <Library className="h-4 w-4" />내 서재
                    </Button>
                  </Link>
                  <Link href="/create">
                    <Button variant="ghost" className="w-full justify-start gap-2 font-medium">
                      <PenTool className="h-4 w-4" />새 책 만들기
                    </Button>
                  </Link>
                  <Link href="/design-studio">
                    <Button variant="ghost" className="w-full justify-start gap-2 font-medium">
                      <Palette className="h-4 w-4" />
                      디자인 스튜디오
                    </Button>
                  </Link>
                  <Link href="/templates">
                    <Button variant="ghost" className="w-full justify-start gap-2 font-medium">
                      <Store className="h-4 w-4" />
                      템플릿
                    </Button>
                  </Link>
                  <Link href="/community">
                    <Button variant="ghost" className="w-full justify-start gap-2 font-medium">
                      <Users className="h-4 w-4" />
                      커뮤니티
                    </Button>
                  </Link>
                  <Link href="/publish">
                    <Button variant="ghost" className="w-full justify-start gap-2 font-medium">
                      <Share2 className="h-4 w-4" />
                      출판하기
                    </Button>
                  </Link>
                  <Link href="/print">
                    <Button variant="ghost" className="w-full justify-start gap-2 font-medium">
                      <Printer className="h-4 w-4" />
                      인쇄
                    </Button>
                  </Link>
                  <Link href="/stats">
                    <Button variant="ghost" className="w-full justify-start gap-2 font-medium">
                      <BarChart3 className="h-4 w-4" />
                      통계
                    </Button>
                  </Link>
                  <Link href="/settings">
                    <Button variant="ghost" className="w-full justify-start gap-2 font-medium">
                      <Settings className="h-4 w-4" />
                      설정
                    </Button>
                  </Link>
                  <Link href="/help">
                    <Button variant="ghost" className="w-full justify-start gap-2 font-medium">
                      <HelpCircle className="h-4 w-4" />
                      도움말
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
            <Link href="/dashboard" className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold hidden md:inline-block">책공장</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-4 flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="책, 템플릿, 작가 검색..."
                className="w-full pl-9 rounded-full bg-muted/40"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <LanguageSelector />
            <Suspense fallback={<div className="h-8 w-8" />}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">3</Badge>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <DropdownMenuLabel>알림</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="max-h-80 overflow-auto">
                    {[
                      {
                        title: "새 댓글",
                        desc: "홍길동님이 '여름 여행 일기'에 댓글을 남겼습니다.",
                        time: "10분 전",
                      },
                      {
                        title: "출판 완료",
                        desc: "'요리 레시피 모음집' 출판이 완료되었습니다.",
                        time: "1시간 전",
                      },
                      {
                        title: "인쇄 진행 중",
                        desc: "'나의 첫 번째 시집' 인쇄가 진행 중입니다.",
                        time: "3시간 전",
                      },
                    ].map((notification, i) => (
                      <DropdownMenuItem key={i} className="flex flex-col items-start p-4 cursor-pointer">
                        <div className="font-medium">{notification.title}</div>
                        <div className="text-sm text-muted-foreground mt-1">{notification.desc}</div>
                        <div className="text-xs text-muted-foreground mt-2">{notification.time}</div>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </Suspense>
            <ModeToggle />
            <Link href="/create">
              <Button size="sm" className="rounded-full">
                <PenTool className="mr-2 h-4 w-4" />새 책 만들기
              </Button>
            </Link>
            <Suspense fallback={<div className="h-8 w-8 rounded-full bg-muted" />}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="사용자" />
                    <AvatarFallback>홍</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>내 계정</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/profile" className="flex w-full">
                      프로필
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/settings" className="flex w-full">
                      설정
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/subscription" className="flex w-full">
                      구독 관리
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>로그아웃</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Suspense>
          </div>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside className="hidden md:flex w-64 flex-col border-r bg-background">
          <div className="flex flex-col gap-1 p-4">
            <Link href="/dashboard">
              <Button variant="ghost" className="w-full justify-start gap-2 font-medium">
                <LayoutDashboard className="h-4 w-4" />
                대시보드
              </Button>
            </Link>
            <Link href="/library">
              <Button variant="ghost" className="w-full justify-start gap-2 font-medium">
                <Library className="h-4 w-4" />내 서재
              </Button>
            </Link>
            <Link href="/create">
              <Button variant="ghost" className="w-full justify-start gap-2 font-medium">
                <PenTool className="h-4 w-4" />새 책 만들기
              </Button>
            </Link>
            <Link href="/design-studio/1">
              <Button variant="ghost" className="w-full justify-start gap-2 font-medium">
                <Palette className="h-4 w-4" />
                디자인 스튜디오
              </Button>
            </Link>
            <Link href="/templates">
              <Button variant="ghost" className="w-full justify-start gap-2 font-medium">
                <Store className="h-4 w-4" />
                템플릿
              </Button>
            </Link>
            <Link href="/community">
              <Button variant="ghost" className="w-full justify-start gap-2 font-medium">
                <Users className="h-4 w-4" />
                커뮤니티
              </Button>
            </Link>
            <Link href="/publish">
              <Button variant="ghost" className="w-full justify-start gap-2 font-medium">
                <Share2 className="h-4 w-4" />
                출판하기
              </Button>
            </Link>
            <Link href="/print">
              <Button variant="ghost" className="w-full justify-start gap-2 font-medium">
                <Printer className="h-4 w-4" />
                인쇄
              </Button>
            </Link>
            <Link href="/stats">
              <Button variant="ghost" className="w-full justify-start gap-2 font-medium">
                <BarChart3 className="h-4 w-4" />
                통계
              </Button>
            </Link>
            <Link href="/settings">
              <Button variant="ghost" className="w-full justify-start gap-2 font-medium">
                <Settings className="h-4 w-4" />
                설정
              </Button>
            </Link>
            <Link href="/help">
              <Button variant="ghost" className="w-full justify-start gap-2 font-medium">
                <HelpCircle className="h-4 w-4" />
                도움말
              </Button>
            </Link>
          </div>

          <div className="mt-auto p-4">
            <div className="rounded-xl bg-muted p-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  PRO
                </Badge>
                <h4 className="font-medium">프로로 업그레이드</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">고급 기능과 혜택을 이용해보세요.</p>
              <Button size="sm" className="w-full rounded-full">
                업그레이드
              </Button>
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
