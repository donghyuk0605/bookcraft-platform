"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { BookOpenText, Eye, ArrowLeft, ArrowRight, Palette, Layout, BookCopy, ImageIcon, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function DesignStudioPage({ params }: { params: { id: string } }) {
  const [coverType, setCoverType] = useState("image")
  const [pageLayout, setPageLayout] = useState("single")
  const [activeColor, setActiveColor] = useState("#4263EB")

  return (
    <div className="flex h-screen flex-col">
      <header className="border-b bg-background z-10">
        <div className="flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="font-medium">
                <BookOpenText className="h-4 w-4 mr-2 text-primary" />
                여름 여행 일기
              </Button>
            </Link>
            <Separator orientation="vertical" className="h-6" />
            <div className="flex items-center gap-1">
              <Link href={`/editor/${params.id}`}>
                <Button variant="ghost" size="sm" className="rounded-full">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  에디터
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20 gap-1">
              <Check className="h-3.5 w-3.5" />
              저장됨
            </Badge>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <Eye className="h-4 w-4" />
            </Button>
            <Button size="sm" className="rounded-full">
              다음
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-72 border-r bg-muted/40 flex flex-col">
          <Tabs defaultValue="theme" className="flex-1 flex flex-col">
            <TabsList className="grid grid-cols-3 m-4 p-1 bg-muted/50 rounded-full">
              <TabsTrigger value="theme" className="rounded-full data-[state=active]:bg-background">
                <Palette className="h-4 w-4 mr-2" />
                테마
              </TabsTrigger>
              <TabsTrigger value="layout" className="rounded-full data-[state=active]:bg-background">
                <Layout className="h-4 w-4 mr-2" />
                레이아웃
              </TabsTrigger>
              <TabsTrigger value="cover" className="rounded-full data-[state=active]:bg-background">
                <BookCopy className="h-4 w-4 mr-2" />
                표지
              </TabsTrigger>
            </TabsList>
            <ScrollArea className="flex-1">
              <TabsContent value="theme" className="p-4 pt-0 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium font-heading">글꼴</h3>
                  <Select defaultValue="noto-sans">
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="글꼴 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="noto-sans">Noto Sans KR</SelectItem>
                      <SelectItem value="nanum-gothic">나눔 고딕</SelectItem>
                      <SelectItem value="nanum-myeongjo">나눔 명조</SelectItem>
                      <SelectItem value="spoqa-han-sans">스포카 한 산스</SelectItem>
                      <SelectItem value="gothic-a1">고딕 A1</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-medium font-heading">글자 크기</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-xs">본문</span>
                      <span className="text-xs">16px</span>
                    </div>
                    <Slider defaultValue={[16]} min={12} max={24} step={1} className="py-1" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-xs">제목</span>
                      <span className="text-xs">24px</span>
                    </div>
                    <Slider defaultValue={[24]} min={18} max={36} step={1} className="py-1" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-medium font-heading">행간</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-xs">행간 비율</span>
                      <span className="text-xs">1.5</span>
                    </div>
                    <Slider defaultValue={[1.5]} min={1} max={2} step={0.1} className="py-1" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-medium font-heading">여백</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="margin-top" className="text-xs">
                        상단
                      </Label>
                      <Input id="margin-top" type="number" defaultValue={20} className="h-8 rounded-lg" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="margin-bottom" className="text-xs">
                        하단
                      </Label>
                      <Input id="margin-bottom" type="number" defaultValue={20} className="h-8 rounded-lg" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="margin-left" className="text-xs">
                        좌측
                      </Label>
                      <Input id="margin-left" type="number" defaultValue={25} className="h-8 rounded-lg" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="margin-right" className="text-xs">
                        우측
                      </Label>
                      <Input id="margin-right" type="number" defaultValue={25} className="h-8 rounded-lg" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-medium font-heading">색상 팔레트</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      "#4263EB",
                      "#F03E3E",
                      "#1098AD",
                      "#F59F00",
                      "#40C057",
                      "#AE3EC9",
                      "#212529",
                      "#495057",
                      "#868E96",
                    ].map((color, index) => (
                      <div
                        key={index}
                        className={`h-10 rounded-lg border cursor-pointer hover:ring-2 hover:ring-primary transition-all ${
                          activeColor === color ? "ring-2 ring-primary" : ""
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => setActiveColor(color)}
                      />
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="layout" className="p-4 pt-0 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium font-heading">페이지 레이아웃</h3>
                  <RadioGroup value={pageLayout} onValueChange={setPageLayout} className="space-y-3">
                    <div className="flex items-center space-x-2 border p-3 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value="single" id="single" />
                      <Label htmlFor="single" className="cursor-pointer flex-1">
                        단면 (한 페이지씩)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border p-3 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value="double" id="double" />
                      <Label htmlFor="double" className="cursor-pointer flex-1">
                        양면 (두 페이지씩)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-medium font-heading">페이지 크기</h3>
                  <Select defaultValue="a5">
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="페이지 크기 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="a4">A4 (210 x 297 mm)</SelectItem>
                      <SelectItem value="a5">A5 (148 x 210 mm)</SelectItem>
                      <SelectItem value="b5">B5 (176 x 250 mm)</SelectItem>
                      <SelectItem value="square">정사각형 (210 x 210 mm)</SelectItem>
                      <SelectItem value="custom">사용자 정의</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-medium font-heading">머리말 & 꼬리말</h3>
                  <div className="flex items-center space-x-2 border p-3 rounded-lg">
                    <Switch id="header" />
                    <Label htmlFor="header" className="flex-1 cursor-pointer">
                      머리말 표시
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border p-3 rounded-lg">
                    <Switch id="footer" defaultChecked />
                    <Label htmlFor="footer" className="flex-1 cursor-pointer">
                      꼬리말 표시
                    </Label>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-medium font-heading">페이지 번호</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 border p-3 rounded-lg">
                      <Switch id="page-numbers" defaultChecked />
                      <Label htmlFor="page-numbers" className="flex-1 cursor-pointer">
                        페이지 번호 표시
                      </Label>
                    </div>
                    <Select defaultValue="bottom-center">
                      <SelectTrigger className="rounded-lg">
                        <SelectValue placeholder="위치 선택" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bottom-center">하단 중앙</SelectItem>
                        <SelectItem value="bottom-outside">하단 바깥쪽</SelectItem>
                        <SelectItem value="bottom-inside">하단 안쪽</SelectItem>
                        <SelectItem value="top-center">상단 중앙</SelectItem>
                        <SelectItem value="top-outside">상단 바깥쪽</SelectItem>
                        <SelectItem value="top-inside">상단 안쪽</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-medium font-heading">목차</h3>
                  <div className="flex items-center space-x-2 border p-3 rounded-lg">
                    <Switch id="auto-toc" defaultChecked />
                    <Label htmlFor="auto-toc" className="flex-1 cursor-pointer">
                      자동 목차 생성
                    </Label>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="cover" className="p-4 pt-0 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium font-heading">표지 유형</h3>
                  <RadioGroup value={coverType} onValueChange={setCoverType} className="space-y-3">
                    <div className="flex items-center space-x-2 border p-3 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value="image" id="image" />
                      <Label htmlFor="image" className="cursor-pointer flex-1">
                        이미지 표지
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border p-3 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value="color" id="color" />
                      <Label htmlFor="color" className="cursor-pointer flex-1">
                        단색 표지
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border p-3 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value="pattern" id="pattern" />
                      <Label htmlFor="pattern" className="cursor-pointer flex-1">
                        패턴 표지
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                {coverType === "image" && (
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium font-heading">표지 이미지</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="aspect-[3/4] bg-muted rounded-lg border cursor-pointer hover:ring-2 hover:ring-primary transition-all flex items-center justify-center"
                        >
                          <ImageIcon className="h-6 w-6 text-muted-foreground/50" />
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full rounded-lg">
                      <ImageIcon className="h-4 w-4 mr-2" />
                      이미지 업로드
                    </Button>
                  </div>
                )}
                {coverType === "color" && (
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium font-heading">표지 색상</h3>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        "#4263EB",
                        "#F03E3E",
                        "#1098AD",
                        "#F59F00",
                        "#40C057",
                        "#AE3EC9",
                        "#212529",
                        "#495057",
                        "#868E96",
                      ].map((color, index) => (
                        <div
                          key={index}
                          className={`h-10 rounded-lg border cursor-pointer hover:ring-2 hover:ring-primary transition-all ${
                            activeColor === color ? "ring-2 ring-primary" : ""
                          }`}
                          style={{ backgroundColor: color }}
                          onClick={() => setActiveColor(color)}
                        />
                      ))}
                    </div>
                  </div>
                )}
                {coverType === "pattern" && (
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium font-heading">표지 패턴</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="aspect-[3/4] rounded-lg border cursor-pointer hover:ring-2 hover:ring-primary transition-all flex items-center justify-center"
                          style={{
                            backgroundImage:
                              i === 1
                                ? `repeating-linear-gradient(45deg, #f0f0f0, #f0f0f0 10px, #e0e0e0 10px, #e0e0e0 20px)`
                                : i === 2
                                  ? `radial-gradient(circle, #f0f0f0 20%, transparent 20%) 0 0, radial-gradient(circle, #f0f0f0 20%, transparent 20%) 8px 8px, radial-gradient(circle, transparent 10%, #e0e0e0 15%, transparent 20%) 0 0, radial-gradient(circle, #e0e0e0 20%, transparent 20%) 8px 8px`
                                  : i === 3
                                    ? `linear-gradient(45deg, #f0f0f0 25%, transparent 25%), linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f0f0f0 75%), linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)`
                                    : `repeating-conic-gradient(#f0f0f0 0% 25%, #e0e0e0 0% 50%)`,
                          }}
                          style-backgroundSize={i === 3 ? "20px 20px" : i === 2 ? "16px 16px" : ""}
                          style-backgroundPosition={i === 3 ? "0 0, 0 10px, 10px -10px, -10px 0px" : ""}
                        />
                      ))}
                    </div>
                  </div>
                )}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium font-heading">표지 텍스트</h3>
                  <div className="space-y-2">
                    <Label htmlFor="cover-title" className="text-xs">
                      제목
                    </Label>
                    <Input id="cover-title" defaultValue="여름 여행 일기" className="rounded-lg" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cover-subtitle" className="text-xs">
                      부제목
                    </Label>
                    <Input
                      id="cover-subtitle"
                      defaultValue="2023년 여름, 제주도에서의 특별한 순간들"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cover-author" className="text-xs">
                      저자
                    </Label>
                    <Input id="cover-author" defaultValue="홍길동" className="rounded-lg" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-medium font-heading">표지 텍스트 위치</h3>
                  <Select defaultValue="center">
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="위치 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="top">상단</SelectItem>
                      <SelectItem value="center">중앙</SelectItem>
                      <SelectItem value="bottom">하단</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-medium font-heading">ISBN</h3>
                  <div className="flex items-center space-x-2 border p-3 rounded-lg">
                    <Switch id="isbn" />
                    <Label htmlFor="isbn" className="flex-1 cursor-pointer">
                      ISBN 바코드 표시 (뒤표지)
                    </Label>
                  </div>
                </div>
              </TabsContent>
            </ScrollArea>
          </Tabs>
        </aside>
        <main className="flex-1 overflow-auto bg-gray-100 flex items-center justify-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>

            <div className="book-cover bg-white shadow-book" style={{ width: "420px", height: "594px" }}>
              <div className="w-full h-full flex flex-col items-center justify-center p-8 relative">
                {coverType === "image" && (
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-0" />
                )}
                {coverType === "color" && (
                  <div className="absolute inset-0 z-0" style={{ backgroundColor: activeColor }} />
                )}
                {coverType === "pattern" && (
                  <div
                    className="absolute inset-0 z-0"
                    style={{
                      backgroundImage: `repeating-linear-gradient(45deg, #f0f0f0, #f0f0f0 10px, #e0e0e0 10px, #e0e0e0 20px)`,
                    }}
                  />
                )}
                <div className="relative z-10 text-center">
                  <h1 className={`text-3xl font-bold mb-4 ${coverType !== "color" ? "text-white" : "text-white"}`}>
                    여름 여행 일기
                  </h1>
                  <p className={`text-lg mb-8 ${coverType !== "color" ? "text-white/80" : "text-white/80"}`}>
                    2023년 여름, 제주도에서의 특별한 순간들
                  </p>
                  <p className={`text-sm ${coverType !== "color" ? "text-white/70" : "text-white/70"}`}>홍길동</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
