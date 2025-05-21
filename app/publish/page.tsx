import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, Download, FileText, Globe, Share2 } from "lucide-react"

export default function PublishPage() {
  return (
    <div className="container py-8 max-w-5xl">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">출판 및 배포</h1>
          <p className="text-muted-foreground">완성된 책을 다양한 형식으로 출판하고 공유하세요.</p>
        </div>

        <Tabs defaultValue="export" className="w-full">
          <TabsList className="bg-muted/50 p-0.5 rounded-full w-full md:w-auto flex flex-wrap justify-start">
            <TabsTrigger value="export" className="rounded-full data-[state=active]:bg-background">
              내보내기
            </TabsTrigger>
            <TabsTrigger value="publish" className="rounded-full data-[state=active]:bg-background">
              온라인 출판
            </TabsTrigger>
            <TabsTrigger value="share" className="rounded-full data-[state=active]:bg-background">
              공유 및 홍보
            </TabsTrigger>
            <TabsTrigger value="analytics" className="rounded-full data-[state=active]:bg-background">
              분석
            </TabsTrigger>
          </TabsList>

          <TabsContent value="export" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="apple-card">
                <CardHeader>
                  <CardTitle>내 책</CardTitle>
                  <CardDescription>출판할 책을 선택하세요</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "여름 여행 일기",
                        progress: "완료",
                        lastEdited: "2시간 전",
                        pages: 48,
                      },
                      {
                        title: "요리 레시피 모음집",
                        progress: "진행 중 (80%)",
                        lastEdited: "1일 전",
                        pages: 36,
                      },
                      {
                        title: "포트폴리오 작품집",
                        progress: "진행 중 (65%)",
                        lastEdited: "3일 전",
                        pages: 24,
                      },
                    ].map((book, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-3 border rounded-lg hover:bg-muted/50 cursor-pointer"
                      >
                        <div className="h-16 w-12 bg-muted rounded flex items-center justify-center">
                          <BookOpen className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{book.title}</h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs text-muted-foreground">
                            <span>{book.progress}</span>
                            <span className="hidden sm:inline">•</span>
                            <span>최근 편집: {book.lastEdited}</span>
                            <span className="hidden sm:inline">•</span>
                            <span>{book.pages} 페이지</span>
                          </div>
                        </div>
                        <input type="radio" name="selected-book" className="h-4 w-4" defaultChecked={index === 0} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="apple-card">
                <CardHeader>
                  <CardTitle>내보내기 옵션</CardTitle>
                  <CardDescription>원하는 형식과 설정을 선택하세요</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>파일 형식</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { format: "PDF", icon: <FileText className="h-4 w-4" /> },
                          { format: "EPUB", icon: <BookOpen className="h-4 w-4" /> },
                          { format: "HTML", icon: <Globe className="h-4 w-4" /> },
                          { format: "DOCX", icon: <FileText className="h-4 w-4" /> },
                        ].map((option, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 p-3 border rounded-lg hover:bg-muted/50 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              id={`format-${option.format}`}
                              className="h-4 w-4"
                              defaultChecked={index === 0}
                            />
                            <label
                              htmlFor={`format-${option.format}`}
                              className="flex items-center gap-2 cursor-pointer flex-1"
                            >
                              {option.icon}
                              <span>{option.format}</span>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>품질 설정</Label>
                      <select className="w-full p-2 border rounded-lg">
                        <option>고품질 (인쇄용)</option>
                        <option>표준 품질 (디지털 배포)</option>
                        <option>웹 최적화 (작은 파일 크기)</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label>페이지 크기</Label>
                      <select className="w-full p-2 border rounded-lg">
                        <option>A4 (210 x 297 mm)</option>
                        <option>A5 (148 x 210 mm)</option>
                        <option>B5 (176 x 250 mm)</option>
                        <option>US Letter (215.9 x 279.4 mm)</option>
                        <option>사용자 정의</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label>메타데이터 포함</Label>
                        <input type="checkbox" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label>목차 생성</Label>
                        <input type="checkbox" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label>페이지 번호 표시</Label>
                        <input type="checkbox" defaultChecked />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full rounded-full">
                    <Download className="mr-2 h-4 w-4" />
                    내보내기
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="publish" className="mt-6">
            <Card className="apple-card">
              <CardHeader>
                <CardTitle>온라인 출판</CardTitle>
                <CardDescription>책을 온라인으로 출판하고 독자들과 공유하세요</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="book-title">책 제목</Label>
                    <Input id="book-title" defaultValue="여름 여행 일기" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="book-description">책 설명</Label>
                    <Textarea
                      id="book-description"
                      rows={4}
                      defaultValue="2023년 여름, 제주도에서의 특별한 순간들을 담은 여행 일기입니다. 아름다운 풍경과 맛있는 음식, 그리고 잊지 못할 추억들을 소개합니다."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="book-category">카테고리</Label>
                      <select id="book-category" className="w-full p-2 border rounded-lg">
                        <option>여행</option>
                        <option>에세이</option>
                        <option>자기계발</option>
                        <option>소설</option>
                        <option>시/시집</option>
                        <option>요리/레시피</option>
                        <option>사진집</option>
                        <option>기타</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="book-language">언어</Label>
                      <select id="book-language" className="w-full p-2 border rounded-lg">
                        <option>한국어</option>
                        <option>영어</option>
                        <option>일본어</option>
                        <option>중국어</option>
                        <option>기타</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="book-tags">태그 (쉼표로 구분)</Label>
                    <Input id="book-tags" defaultValue="여행, 제주도, 일기, 여름" />
                  </div>

                  <div className="space-y-2">
                    <Label>공개 설정</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input type="radio" id="visibility-public" name="visibility" defaultChecked />
                        <label htmlFor="visibility-public">공개 (모든 사용자가 볼 수 있음)</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="radio" id="visibility-limited" name="visibility" />
                        <label htmlFor="visibility-limited">제한 (링크가 있는 사용자만 볼 수 있음)</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="radio" id="visibility-private" name="visibility" />
                        <label htmlFor="visibility-private">비공개 (나만 볼 수 있음)</label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>댓글 허용</Label>
                      <input type="checkbox" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>다운로드 허용</Label>
                      <input type="checkbox" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>저작권 정보 표시</Label>
                      <input type="checkbox" defaultChecked />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full rounded-full">
                  <Globe className="mr-2 h-4 w-4" />
                  온라인 출판하기
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="share" className="mt-6">
            <Card className="apple-card">
              <CardHeader>
                <CardTitle>공유 및 홍보</CardTitle>
                <CardDescription>책을 다양한 채널로 공유하고 홍보하세요</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 border rounded-lg bg-muted/30">
                    <h3 className="font-medium mb-2">공유 링크</h3>
                    <div className="flex gap-2">
                      <Input
                        readOnly
                        value="https://bookcraft.com/books/summer-travel-journal"
                        className="bg-background"
                      />
                      <Button variant="outline" className="shrink-0">
                        복사
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium mb-2">소셜 미디어에 공유</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { name: "Twitter", color: "bg-blue-500" },
                        { name: "Facebook", color: "bg-blue-600" },
                        { name: "Instagram", color: "bg-pink-600" },
                        { name: "LinkedIn", color: "bg-blue-700" },
                      ].map((social, index) => (
                        <Button key={index} variant="outline" className="h-12">
                          {social.name}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium mb-2">임베드 코드</h3>
                    <Textarea
                      readOnly
                      rows={3}
                      className="font-mono text-xs bg-muted/30"
                      value={`<iframe src="https://bookcraft.com/embed/summer-travel-journal" width="100%" height="500" frameborder="0" allowfullscreen></iframe>`}
                    />
                    <Button variant="outline" size="sm">
                      코드 복사
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium mb-2">QR 코드</h3>
                    <div className="flex items-center gap-4">
                      <div className="h-32 w-32 bg-muted flex items-center justify-center">
                        <div className="h-24 w-24 bg-background"></div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          이 QR 코드를 스캔하면 독자들이 바로 책에 접근할 수 있습니다.
                        </p>
                        <Button variant="outline" size="sm">
                          QR 코드 다운로드
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium mb-2">홍보 도구</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-1">이메일 뉴스레터</h4>
                        <p className="text-sm text-muted-foreground mb-2">구독자들에게 새 책 출시를 알리세요.</p>
                        <Button variant="outline" size="sm" className="w-full">
                          뉴스레터 작성
                        </Button>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-1">커뮤니티 공유</h4>
                        <p className="text-sm text-muted-foreground mb-2">책공장 커뮤니티에 책을 홍보하세요.</p>
                        <Button variant="outline" size="sm" className="w-full">
                          커뮤니티에 공유
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full rounded-full">
                  <Share2 className="mr-2 h-4 w-4" />
                  모든 채널에 공유하기
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
