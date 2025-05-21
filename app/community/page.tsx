import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { BookOpen, MessageSquare, Search, Share, ThumbsUp, Users } from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="container py-8 max-w-5xl">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">커뮤니티</h1>
          <p className="text-muted-foreground">다른 작가들과 소통하고 영감을 얻으세요.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="커뮤니티 검색..." className="pl-9 rounded-full" />
          </div>
          <div className="flex gap-2">
            <Button className="rounded-full">
              <Users className="mr-2 h-4 w-4" />
              그룹 찾기
            </Button>
            <Button variant="outline" className="rounded-full">
              내 활동
            </Button>
          </div>
        </div>

        <Tabs defaultValue="trending" className="w-full">
          <TabsList className="bg-muted/50 p-0.5 rounded-full w-full md:w-auto flex flex-wrap justify-start">
            <TabsTrigger value="trending" className="rounded-full data-[state=active]:bg-background">
              인기
            </TabsTrigger>
            <TabsTrigger value="recent" className="rounded-full data-[state=active]:bg-background">
              최신
            </TabsTrigger>
            <TabsTrigger value="following" className="rounded-full data-[state=active]:bg-background">
              팔로잉
            </TabsTrigger>
            <TabsTrigger value="groups" className="rounded-full data-[state=active]:bg-background">
              그룹
            </TabsTrigger>
            <TabsTrigger value="events" className="rounded-full data-[state=active]:bg-background">
              이벤트
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trending" className="mt-6">
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  author: "김작가",
                  avatar: "/placeholder.svg?height=40&width=40",
                  time: "2시간 전",
                  content:
                    "새 책 '디지털 시대의 스토리텔링'의 표지 디자인을 공유합니다. 여러분의 의견을 듣고 싶어요! 어떤 버전이 더 나아 보이나요?",
                  image: "/placeholder.svg?height=300&width=600",
                  likes: 124,
                  comments: 32,
                  shares: 8,
                  tags: ["디자인", "표지", "피드백"],
                },
                {
                  author: "이에디터",
                  avatar: "/placeholder.svg?height=40&width=40",
                  time: "어제",
                  content:
                    "출판 과정에서 가장 어려웠던 부분은 무엇인가요? 저는 개인적으로 편집 과정에서 내용을 줄이는 결정을 내리는 것이 항상 가장 어렵습니다. 여러분의 경험이 궁금해요.",
                  image: "",
                  likes: 89,
                  comments: 56,
                  shares: 3,
                  tags: ["출판", "편집", "토론"],
                },
                {
                  author: "박디자이너",
                  avatar: "/placeholder.svg?height=40&width=40",
                  time: "3일 전",
                  content:
                    "책공장을 사용해서 첫 포트폴리오 책을 완성했습니다! 디자인 작업물을 모아 인쇄까지 진행했는데, 결과물이 정말 만족스럽네요. 특히 템플릿 기능이 정말 유용했어요.",
                  image: "/placeholder.svg?height=300&width=600",
                  likes: 215,
                  comments: 42,
                  shares: 18,
                  tags: ["포트폴리오", "디자인", "성공사례"],
                },
              ].map((post, index) => (
                <Card key={index} className="apple-card">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={post.avatar || "/placeholder.svg"} alt={post.author} />
                          <AvatarFallback>{post.author[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{post.author}</div>
                          <div className="text-xs text-muted-foreground">{post.time}</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="19" cy="12" r="1" />
                          <circle cx="5" cy="12" r="1" />
                        </svg>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="mb-4">{post.content}</p>
                    {post.image && (
                      <div className="rounded-lg overflow-hidden mb-4">
                        <img src={post.image || "/placeholder.svg"} alt="Post content" className="w-full h-auto" />
                      </div>
                    )}
                    <div className="flex flex-wrap gap-1 mb-2">
                      {post.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="rounded-full text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <div className="flex justify-between w-full text-sm">
                      <Button variant="ghost" size="sm" className="gap-1 rounded-full">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-1 rounded-full">
                        <MessageSquare className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-1 rounded-full">
                        <Share className="h-4 w-4" />
                        <span>{post.shares}</span>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="groups" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "소설 작가 모임",
                  description: "소설 작가들을 위한 피드백과 토론 그룹",
                  members: 1245,
                  posts: 324,
                  image: "/placeholder.svg?height=100&width=200",
                  tags: ["소설", "창작", "피드백"],
                },
                {
                  name: "시각 디자이너 클럽",
                  description: "책 디자인과 시각적 스토리텔링에 관심 있는 디자이너 모임",
                  members: 876,
                  posts: 210,
                  image: "/placeholder.svg?height=100&width=200",
                  tags: ["디자인", "시각", "레이아웃"],
                },
                {
                  name: "자기계발서 작가",
                  description: "자기계발과 비즈니스 서적 작가들의 커뮤니티",
                  members: 654,
                  posts: 189,
                  image: "/placeholder.svg?height=100&width=200",
                  tags: ["자기계발", "비즈니스", "출판"],
                },
                {
                  name: "일러스트레이터 모임",
                  description: "책 일러스트와 그림책 작가를 위한 그룹",
                  members: 932,
                  posts: 267,
                  image: "/placeholder.svg?height=100&width=200",
                  tags: ["일러스트", "그림책", "시각예술"],
                },
                {
                  name: "시인의 방",
                  description: "시와 짧은 글 작가들을 위한 영감과 피드백 공간",
                  members: 543,
                  posts: 421,
                  image: "/placeholder.svg?height=100&width=200",
                  tags: ["시", "짧은글", "창작"],
                },
                {
                  name: "독립 출판 네트워크",
                  description: "독립 출판과 자가 출판에 관심 있는 작가들의 모임",
                  members: 789,
                  posts: 156,
                  image: "/placeholder.svg?height=100&width=200",
                  tags: ["독립출판", "자가출판", "마케팅"],
                },
              ].map((group, index) => (
                <Card key={index} className="apple-card">
                  <div className="h-32 overflow-hidden">
                    <img
                      src={group.image || "/placeholder.svg"}
                      alt={group.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>{group.name}</CardTitle>
                    <CardDescription>{group.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex justify-between text-sm mb-2">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{group.members} 멤버</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span>{group.posts} 게시물</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {group.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="rounded-full text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full rounded-full">
                      <Users className="mr-2 h-4 w-4" />
                      가입하기
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "30일 글쓰기 챌린지",
                  description:
                    "30일 동안 매일 글을 쓰는 챌린지에 참여하세요. 습관 형성과 창작 능력 향상에 도움이 됩니다.",
                  date: "2023년 6월 1일 - 6월 30일",
                  participants: 342,
                  image: "/placeholder.svg?height=150&width=300",
                  tags: ["챌린지", "글쓰기", "습관형성"],
                },
                {
                  title: "출판 워크숍",
                  description: "출판 전문가들과 함께하는 온라인 워크숍. 출판 과정의 모든 단계를 배울 수 있습니다.",
                  date: "2023년 6월 15일, 오후 2시",
                  participants: 128,
                  image: "/placeholder.svg?height=150&width=300",
                  tags: ["워크숍", "출판", "교육"],
                },
                {
                  title: "북 디자인 마스터클래스",
                  description: "전문 디자이너가 알려주는 효과적인 책 디자인 원칙과 실전 팁",
                  date: "2023년 6월 22일, 오후 7시",
                  participants: 96,
                  image: "/placeholder.svg?height=150&width=300",
                  tags: ["마스터클래스", "디자인", "레이아웃"],
                },
                {
                  title: "작가와의 만남",
                  description: "베스트셀러 작가와 함께하는 Q&A 세션. 작가의 여정과 팁을 들어보세요.",
                  date: "2023년 7월 5일, 오후 6시",
                  participants: 215,
                  image: "/placeholder.svg?height=150&width=300",
                  tags: ["인터뷰", "작가", "Q&A"],
                },
              ].map((event, index) => (
                <Card key={index} className="apple-card">
                  <div className="h-40 overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="text-sm mb-2">
                      <p className="font-medium">일정: {event.date}</p>
                      <p className="text-muted-foreground">참가자: {event.participants}명</p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {event.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="rounded-full text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full rounded-full">참가 신청</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
