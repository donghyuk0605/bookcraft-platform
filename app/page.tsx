import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  BookOpenText,
  Bookmark,
  Palette,
  Printer,
  Share2,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpenText className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold font-heading">책공장</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/dashboard"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              대시보드
            </Link>
            <Link
              href="/library"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              내 서재
            </Link>
            <Link
              href="/templates"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              템플릿
            </Link>
            <Link
              href="/community"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              커뮤니티
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" className="rounded-full">
                로그인
              </Button>
            </Link>
            <Link href="/register">
              <Button className="rounded-full">회원가입</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5"></div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-spin-slow"></div>
            <div className="absolute top-60 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          </div>
          <div className="container relative flex flex-col items-center text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium animate-slide-up">
              <span className="flex items-center">
                <Sparkles className="h-4 w-4 mr-2" />
                100% 사용자 주도 책 제작 플랫폼
              </span>
            </div>
            <h1
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 font-heading gradient-heading animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              당신만의 책을 만들고
              <br />
              출판하세요
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-[800px] mb-10 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              로그인부터 작성, 편집, 출판, 공유, 인쇄까지 - AI 없이 사용자가
              100% 주도하는 통합 책 제작 플랫폼
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Link href="/create">
                <Button size="lg" className="px-8 rounded-full">
                  새 책 만들기
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/templates">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 rounded-full"
                >
                  템플릿 둘러보기
                </Button>
              </Link>
            </div>

            <div
              className="mt-20 relative w-full max-w-4xl animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                  <div className="w-[80%] h-[80%] bg-white rounded-lg shadow-lg flex">
                    <div className="w-1/4 border-r p-4">
                      <div className="w-full h-6 bg-gray-200 rounded-md mb-4"></div>
                      <div className="w-full h-4 bg-gray-200 rounded-md mb-2"></div>
                      <div className="w-full h-4 bg-gray-200 rounded-md mb-2"></div>
                      <div className="w-full h-4 bg-gray-200 rounded-md mb-2"></div>
                      <div className="w-3/4 h-4 bg-gray-200 rounded-md"></div>
                    </div>
                    <div className="flex-1 p-4">
                      <div className="w-1/2 h-8 bg-gray-200 rounded-md mb-6"></div>
                      <div className="w-full h-4 bg-gray-200 rounded-md mb-2"></div>
                      <div className="w-full h-4 bg-gray-200 rounded-md mb-2"></div>
                      <div className="w-3/4 h-4 bg-gray-200 rounded-md mb-6"></div>
                      <div className="w-full h-40 bg-gray-200 rounded-md mb-4"></div>
                      <div className="w-full h-4 bg-gray-200 rounded-md mb-2"></div>
                      <div className="w-full h-4 bg-gray-200 rounded-md mb-2"></div>
                      <div className="w-1/2 h-4 bg-gray-200 rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-56 bg-primary rotate-12 rounded-md shadow-lg">
                <div className="absolute inset-0 p-4 flex flex-col items-center justify-center text-white">
                  <BookOpen className="h-8 w-8 mb-2" />
                  <div className="text-center">
                    <div className="font-bold">여행 일기</div>
                    <div className="text-xs mt-1">나의 첫 번째 책</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -left-6 w-32 h-48 bg-purple-600 -rotate-6 rounded-md shadow-lg">
                <div className="absolute inset-0 p-4 flex flex-col items-center justify-center text-white">
                  <BookOpen className="h-6 w-6 mb-2" />
                  <div className="text-center">
                    <div className="font-bold text-sm">요리책</div>
                    <div className="text-xs mt-1">레시피 모음</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 container">
          <h2 className="text-3xl font-bold text-center mb-16 font-heading gradient-heading">
            책 제작의 모든 과정
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center group">
              <div className="feature-icon mb-6 group-hover:scale-110 bg-primary/10 p-4 rounded-full">
                <Bookmark className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">
                콘텐츠 작성 및 편집
              </h3>
              <p className="text-muted-foreground">
                직관적인 에디터로 텍스트, 이미지, 표 등을 자유롭게 편집하고
                챕터를 구성하세요.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="feature-icon mb-6 group-hover:scale-110 bg-primary/10 p-4 rounded-full">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">
                디자인 및 레이아웃
              </h3>
              <p className="text-muted-foreground">
                표지 디자인부터 내부 레이아웃까지 다양한 테마와 템플릿으로 책을
                꾸며보세요.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="feature-icon mb-6 group-hover:scale-110 bg-primary/10 p-4 rounded-full">
                <Share2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">
                출판 및 공유
              </h3>
              <p className="text-muted-foreground">
                완성된 책을 PDF, ePub 등 다양한 형식으로 출판하고 커뮤니티에
                공유하세요.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted"></div>
          <div className="container relative">
            <h2 className="text-3xl font-bold text-center mb-16 font-heading gradient-heading">
              주요 기능
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-card rounded-xl p-6 shadow-lg card-hover border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 font-heading">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <BookOpenText className="h-5 w-5 text-primary" />
                  </div>
                  통합 에디터
                </h3>
                <p className="text-muted-foreground mb-4">
                  리치 텍스트 서식, 멀티미디어 삽입, 챕터 구성 등 책 제작에
                  필요한 모든 기능을 제공합니다.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    챕터/섹션 드래그 & 드롭
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    이미지, 오디오, 비디오, 테이블 삽입
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    버전 관리 및 자동 저장
                  </li>
                </ul>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-lg card-hover border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 font-heading">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Palette className="h-5 w-5 text-primary" />
                  </div>
                  디자인 스튜디오
                </h3>
                <p className="text-muted-foreground mb-4">
                  표지 디자인, 테마 선택, 레이아웃 설정 등 책의 시각적 요소를
                  커스터마이징할 수 있습니다.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    글꼴, 글자 크기, 행간, 여백 설정
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    표지 편집 (배경, 컬러 팔레트, 스티커)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    단면/양면, 머리말/꼬리말 설정
                  </li>
                </ul>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-lg card-hover border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 font-heading">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Printer className="h-5 w-5 text-primary" />
                  </div>
                  출판 및 인쇄
                </h3>
                <p className="text-muted-foreground mb-4">
                  다양한 형식으로 출판하고 실물 책으로 인쇄할 수 있는 옵션을
                  제공합니다.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    PDF, ePub, HTML, Markdown 형식 지원
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    판형, 종이 종류, 부수 선택
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    국내/해외 배송 옵션
                  </li>
                </ul>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-lg card-hover border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 font-heading">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  통계 및 커뮤니티
                </h3>
                <p className="text-muted-foreground mb-4">
                  책의 성과를 분석하고 다른 작가들과 소통할 수 있는 커뮤니티
                  기능을 제공합니다.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    페이지 뷰, 완독률, 다운로드 수 분석
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    장르별 소모임 및 피드백 요청
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    "30일 완성" 챌린지 및 시즌 이벤트
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 font-heading gradient-heading">
              지금 바로 시작하세요
            </h2>
            <p className="text-lg text-muted-foreground max-w-[600px] mx-auto mb-10">
              무료로 첫 책을 만들고, 필요에 따라 프로 기능을 활용하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="px-8 rounded-full">
                  무료로 시작하기
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 rounded-full"
                >
                  요금제 보기
                </Button>
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  10,000+
                </div>
                <div className="text-muted-foreground">출판된 책</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  5,000+
                </div>
                <div className="text-muted-foreground">활성 사용자</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">템플릿</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-10 bg-muted/50">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <BookOpenText className="h-5 w-5 text-primary" />
            <span className="font-semibold font-heading">
              책공장 (BookCraft)
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link
              href="/about"
              className="hover:text-primary transition-colors"
            >
              소개
            </Link>
            <Link
              href="/pricing"
              className="hover:text-primary transition-colors"
            >
              요금제
            </Link>
            <Link href="/help" className="hover:text-primary transition-colors">
              도움말
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              이용약관
            </Link>
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              개인정보처리방침
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BookCraft. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
