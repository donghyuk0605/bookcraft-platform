"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  ImageIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  ChevronDown,
  Plus,
  Eye,
  Settings,
  Undo,
  Redo,
  BookOpen,
  Heading1,
  Heading2,
  Heading3,
  Quote,
  Code,
  LinkIcon,
  Table,
  Video,
  AudioLines,
  Check,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LanguageSelector } from "@/components/language-selector"
import { TextEditor } from "@/components/text-editor"

export default function EditorPage({ params }: { params: { id: string } }) {
  const [chapters, setChapters] = useState([
    { id: 1, title: "서문", expanded: true, sections: [] },
    {
      id: 2,
      title: "1장: 시작",
      expanded: true,
      sections: [
        { id: 21, title: "1.1 첫 번째 섹션" },
        { id: 22, title: "1.2 두 번째 섹션" },
      ],
    },
    {
      id: 3,
      title: "2장: 전개",
      expanded: false,
      sections: [
        { id: 31, title: "2.1 첫 번째 섹션" },
        { id: 32, title: "2.2 두 번째 섹션" },
      ],
    },
    { id: 4, title: "3장: 결말", expanded: false, sections: [] },
    { id: 5, title: "부록", expanded: false, sections: [] },
  ])

  const toggleChapter = (id: number) => {
    setChapters(chapters.map((chapter) => (chapter.id === id ? { ...chapter, expanded: !chapter.expanded } : chapter)))
  }

  const initialContent = `
  <h1>여름 여행 일기</h1>
  <p>2023년 여름, 제주도에서의 특별한 순간들</p>
  <h2>첫째 날: 도착과 설렘</h2>
  <p>제주공항에 도착했을 때, 공기부터 달랐습니다. 바다 내음이 섞인 신선한 공기가 반갑게 맞이해주었습니다.</p>
  <h2>둘째 날: 자연과의 만남</h2>
  <p>둘째 날은 제주의 자연을 탐험하며 오름을 올랐습니다. 정상에서 바라본 전경은 장관이었습니다.</p>
  <blockquote><p>"여행의 진정한 의미는 새로운 풍경을 보는 것이 아니라, 새로운 시각을 갖는 것이다."</p><footer>- 마르셀 프루스트</footer></blockquote>
  `

  return (
    <div className="flex h-screen flex-col">
      <header className="border-b bg-background/80 apple-blur z-10">
        <div className="flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm">
                <BookOpen className="h-4 w-4 mr-2 text-primary" />
                여름 여행 일기
              </Button>
            </Link>
            <Separator orientation="vertical" className="h-6" />
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Undo className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Redo className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <LanguageSelector />
            <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20 gap-1">
              <Check className="h-3.5 w-3.5" />
              저장됨
            </Badge>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Eye className="h-4 w-4" />
            </Button>
            <Button size="sm" className="rounded-full">
              출판하기
            </Button>
          </div>
        </div>
        <div className="border-t flex items-center px-4 h-12">
          <Tabs defaultValue="edit" className="w-full">
            <TabsList className="bg-muted/50 p-0.5 rounded-full w-auto">
              <TabsTrigger value="edit" className="rounded-full data-[state=active]:bg-background">
                편집
              </TabsTrigger>
              <TabsTrigger value="insert" className="rounded-full data-[state=active]:bg-background">
                삽입
              </TabsTrigger>
              <TabsTrigger value="format" className="rounded-full data-[state=active]:bg-background">
                서식
              </TabsTrigger>
              <TabsTrigger value="view" className="rounded-full data-[state=active]:bg-background">
                보기
              </TabsTrigger>
            </TabsList>

            <TabsContent value="edit" className="mt-0 p-0">
              <TooltipProvider>
                <div className="flex items-center gap-0.5">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Bold className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>굵게</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Italic className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>기울임</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Underline className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>밑줄</TooltipContent>
                  </Tooltip>
                  <Separator orientation="vertical" className="mx-1 h-6" />
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Heading1 className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>제목 1</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Heading2 className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>제목 2</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Heading3 className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>제목 3</TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            </TabsContent>

            <TabsContent value="insert" className="mt-0 p-0">
              <TooltipProvider>
                <div className="flex items-center gap-0.5">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ImageIcon className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>이미지 삽입</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Table className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>표 삽입</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Video className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>비디오 삽입</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <AudioLines className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>오디오 삽입</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <LinkIcon className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>링크 삽입</TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            </TabsContent>

            <TabsContent value="format" className="mt-0 p-0">
              <TooltipProvider>
                <div className="flex items-center gap-0.5">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <List className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>글머리 기호</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ListOrdered className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>번호 매기기</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Quote className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>인용구</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Code className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>코드 블록</TooltipContent>
                  </Tooltip>
                  <Separator orientation="vertical" className="mx-1 h-6" />
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <AlignLeft className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>왼쪽 정렬</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <AlignCenter className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>가운데 정렬</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <AlignRight className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>오른쪽 정렬</TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            </TabsContent>

            <TabsContent value="view" className="mt-0 p-0">
              <div className="flex items-center gap-2">
                <select className="bg-transparent border rounded-md px-2 py-1 text-sm">
                  <option>페이지 보기</option>
                  <option>연속 보기</option>
                  <option>아웃라인 보기</option>
                </select>
                <select className="bg-transparent border rounded-md px-2 py-1 text-sm">
                  <option>100%</option>
                  <option>125%</option>
                  <option>150%</option>
                  <option>75%</option>
                  <option>50%</option>
                </select>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 border-r bg-background flex flex-col">
          <div className="p-4 flex justify-between items-center">
            <h3 className="font-medium">목차</h3>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <ScrollArea className="flex-1">
            <div className="p-4 pt-0">
              {chapters.map((chapter) => (
                <div key={chapter.id} className="mb-2">
                  <div
                    className="flex items-center gap-2 py-1 px-2 rounded hover:bg-muted cursor-pointer"
                    onClick={() => toggleChapter(chapter.id)}
                  >
                    <ChevronDown className={`h-4 w-4 transition-transform ${chapter.expanded ? "" : "-rotate-90"}`} />
                    <span className="text-sm font-medium">{chapter.title}</span>
                  </div>
                  {chapter.expanded && chapter.sections.length > 0 && (
                    <div className="ml-6 mt-1 space-y-1">
                      {chapter.sections.map((section) => (
                        <div key={section.id} className="py-1 px-2 text-sm rounded hover:bg-muted cursor-pointer">
                          {section.title}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </aside>
        <main className="flex-1 overflow-auto bg-background">
          <div className="max-w-4xl mx-auto p-8">
            <TextEditor defaultContent={initialContent} />
          </div>
        </main>
      </div>
    </div>
  )
}
