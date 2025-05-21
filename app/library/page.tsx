import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpenText, PenTool, Clock, MoreHorizontal, Trash2, Eye, Download, BarChart3 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export default function LibraryPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight font-heading">내 서재</h1>
          <p className="text-muted-foreground">작성 중인 책과 출판된 책을 관리하세요.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative">
              <Input placeholder="책 제목 검색" className="w-full md:w-[300px] pl-10 rounded-full" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <Select defaultValue="recent">
              <SelectTrigger className="w-full md:w-[180px] rounded-full">
                <SelectValue placeholder="정렬 기준" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">최근 수정순</SelectItem>
                <SelectItem value="title">제목순</SelectItem>
                <SelectItem value="progress">진행률순</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Link href="/create">
            <Button className="w-full md:w-auto rounded-full">
              <PenTool className="h-4 w-4 mr-2" />새 책 만들기
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="in-progress">
          <TabsList className="bg-muted/50 p-1 rounded-full">
            <TabsTrigger value="in-progress" className="rounded-full data-[state=active]:bg-background">
              작성 중 (3)
            </TabsTrigger>
            <TabsTrigger value="published" className="rounded-full data-[state=active]:bg-background">
              출판 완료 (2)
            </TabsTrigger>
            <TabsTrigger value="trash" className="rounded-full data-[state=active]:bg-background">
              휴지통 (1)
            </TabsTrigger>
          </TabsList>
          <TabsContent value="in-progress" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "여름 여행 일기",
                  progress: 75,
                  lastEdited: "2시간 전",
                  chapters: "12/16 챕터",
                  color: "primary",
                },
                {
                  title: "요리 레시피 모음집",
                  progress: 40,
                  lastEdited: "1일 전",
                  chapters: "8/20 챕터",
                  color: "purple-500",
                },
                {
                  title: "포트폴리오 작품집",
                  progress: 25,
                  lastEdited: "3일 전",
                  chapters: "5/20 챕터",
                  color: "blue-500",
                },
              ].map((book, index) => (
                <Card key={index} className="overflow-hidden border shadow-lg rounded-xl book-cover">
                  <div
                    className={`aspect-[3/4] flex items-center justify-center relative`}
                    style={{
                      backgroundColor:
                        book.color === "primary"
                          ? "rgba(59, 130, 246, 0.1)"
                          : book.color === "purple-500"
                            ? "rgba(168, 85, 247, 0.1)"
                            : "rgba(59, 130, 246, 0.1)",
                    }}
                  >
                    <BookOpenText
                      className="h-12 w-12"
                      style={{
                        color:
                          book.color === "primary"
                            ? "rgb(59, 130, 246)"
                            : book.color === "purple-500"
                              ? "rgb(168, 85, 247)"
                              : "rgb(59, 130, 246)",
                      }}
                    />
                    <Badge className="absolute top-3 right-3 bg-background/80 text-foreground font-normal">
                      {book.progress}% 완료
                    </Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg font-heading">{book.title}</CardTitle>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>복제하기</DropdownMenuItem>
                          <DropdownMenuItem>이름 변경</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">휴지통으로 이동</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Clock className="h-3.5 w-3.5" />
                      <span>최근 편집: {book.lastEdited}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BookOpenText className="h-3.5 w-3.5" />
                      <span>{book.chapters}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Link href={`/editor/${index}`} className="flex-1">
                      <Button variant="default" className="w-full rounded-lg">
                        편집하기
                      </Button>
                    </Link>
                    <Link href={`/preview/${index}`}>
                      <Button variant="outline" size="icon" className="rounded-lg">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="published" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "나의 첫 번째 시집",
                  publishDate: "2023년 12월 15일",
                  views: "523회 조회",
                  downloads: "78회 다운로드",
                  color: "primary",
                },
                {
                  title: "사진으로 보는 2023년",
                  publishDate: "2023년 11월 30일",
                  views: "711회 조회",
                  downloads: "142회 다운로드",
                  color: "purple-500",
                },
              ].map((book, index) => (
                <Card key={index} className="overflow-hidden border shadow-lg rounded-xl book-cover">
                  <div
                    className={`aspect-[3/4] flex items-center justify-center relative`}
                    style={{
                      backgroundColor: book.color === "primary" ? "rgba(59, 130, 246, 0.1)" : "rgba(168, 85, 247, 0.1)",
                    }}
                  >
                    <BookOpenText
                      className="h-12 w-12"
                      style={{ color: book.color === "primary" ? "rgb(59, 130, 246)" : "rgb(168, 85, 247)" }}
                    />
                    <Badge className="absolute top-3 right-3 bg-background/80 text-foreground font-normal">
                      출판됨
                    </Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg font-heading">{book.title}</CardTitle>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>복제하기</DropdownMenuItem>
                          <DropdownMenuItem>수정하기</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">휴지통으로 이동</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Clock className="h-3.5 w-3.5" />
                      <span>출판일: {book.publishDate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Eye className="h-3.5 w-3.5" />
                      <span>{book.views}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Download className="h-3.5 w-3.5" />
                      <span>{book.downloads}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Link href={`/view/${index}`} className="flex-1">
                      <Button variant="default" className="w-full rounded-lg">
                        보기
                      </Button>
                    </Link>
                    <Link href={`/stats/${index}`}>
                      <Button variant="outline" size="icon" className="rounded-lg">
                        <BarChart3 className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="trash" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="overflow-hidden opacity-70 border shadow-lg rounded-xl">
                <div className="aspect-[3/4] bg-muted flex items-center justify-center">
                  <BookOpenText className="h-12 w-12 text-muted-foreground/50" />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-heading">미완성 프로젝트</CardTitle>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Trash2 className="h-3.5 w-3.5" />
                    <span>삭제일: 2023년 12월 10일</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    <span>20일 후 영구 삭제</span>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" className="w-full rounded-lg">
                    복원하기
                  </Button>
                  <Button variant="destructive" size="icon" className="rounded-lg">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
