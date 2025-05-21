import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Search, Filter, BookText, Leaf } from "lucide-react"

export default function TemplatesPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight font-heading-kr">템플릿 갤러리</h1>
          <p className="text-muted-foreground">다양한 템플릿으로 책 제작을 시작하세요.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="flex flex-col md:flex-row gap-4 flex-1">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input placeholder="템플릿 검색..." className="pl-10 rounded-full" />
            </div>
            <Button variant="outline" className="rounded-full">
              <Filter className="mr-2 h-4 w-4" />
              필터
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">정렬:</span>
            <select className="bg-transparent border rounded-md px-2 py-1 text-sm">
              <option>인기순</option>
              <option>최신순</option>
              <option>이름순</option>
            </select>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-muted/50 p-1 rounded-full w-full md:w-auto flex flex-wrap justify-start">
            <TabsTrigger value="all" className="rounded-full data-[state=active]:bg-background">
              전체
            </TabsTrigger>
            <TabsTrigger value="books" className="rounded-full data-[state=active]:bg-background">
              도서
            </TabsTrigger>
            <TabsTrigger value="magazines" className="rounded-full data-[state=active]:bg-background">
              매거진
            </TabsTrigger>
            <TabsTrigger value="photo" className="rounded-full data-[state=active]:bg-background">
              사진집
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="rounded-full data-[state=active]:bg-background">
              포트폴리오
            </TabsTrigger>
            <TabsTrigger value="recipe" className="rounded-full data-[state=active]:bg-background">
              레시피북
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {templates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="books" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {templates
                .filter((t) => t.category === "도서")
                .map((template) => (
                  <TemplateCard key={template.id} template={template} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="magazines" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {templates
                .filter((t) => t.category === "매거진")
                .map((template) => (
                  <TemplateCard key={template.id} template={template} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="photo" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {templates
                .filter((t) => t.category === "사진집")
                .map((template) => (
                  <TemplateCard key={template.id} template={template} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="portfolio" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {templates
                .filter((t) => t.category === "포트폴리오")
                .map((template) => (
                  <TemplateCard key={template.id} template={template} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="recipe" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {templates
                .filter((t) => t.category === "레시피북")
                .map((template) => (
                  <TemplateCard key={template.id} template={template} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

interface Template {
  id: number
  title: string
  description: string
  category: string
  tags: string[]
  isPremium: boolean
  isNew: boolean
  language: string[]
}

const templates: Template[] = [
  {
    id: 1,
    title: "자연 여행 일기",
    description: "숲과 자연을 테마로 한 여행 일기 템플릿",
    category: "도서",
    tags: ["여행", "자연", "일기"],
    isPremium: false,
    isNew: true,
    language: ["ko", "jp", "en"],
  },
  {
    id: 2,
    title: "요리 레시피 컬렉션",
    description: "요리 레시피를 체계적으로 정리하는 템플릿",
    category: "레시피북",
    tags: ["요리", "레시피", "음식"],
    isPremium: false,
    isNew: false,
    language: ["ko", "jp", "en"],
  },
  {
    id: 3,
    title: "미니멀 포트폴리오",
    description: "심플하고 세련된 작품 포트폴리오 템플릿",
    category: "포트폴리오",
    tags: ["포트폴리오", "미니멀", "작품집"],
    isPremium: true,
    isNew: false,
    language: ["ko", "en"],
  },
  {
    id: 4,
    title: "계절 사진집",
    description: "사계절 사진을 아름답게 담을 수 있는 템플릿",
    category: "사진집",
    tags: ["사진", "계절", "앨범"],
    isPremium: false,
    isNew: false,
    language: ["ko", "jp", "en"],
  },
  {
    id: 5,
    title: "문학 매거진",
    description: "시와 단편 소설을 위한 문학 매거진 템플릿",
    category: "매거진",
    tags: ["문학", "시", "소설"],
    isPremium: true,
    isNew: true,
    language: ["ko", "en"],
  },
  {
    id: 6,
    title: "일본 정원 가이드",
    description: "일본 정원의 아름다움을 소개하는 가이드북",
    category: "도서",
    tags: ["일본", "정원", "가이드"],
    isPremium: false,
    isNew: false,
    language: ["jp", "en"],
  },
  {
    id: 7,
    title: "숲속 동화책",
    description: "숲을 배경으로 한 아름다운 동화책 템플릿",
    category: "도서",
    tags: ["동화", "숲", "아동"],
    isPremium: true,
    isNew: false,
    language: ["ko", "jp", "en"],
  },
  {
    id: 8,
    title: "식물 도감",
    description: "다양한 식물을 기록하고 소개하는 도감 템플릿",
    category: "도서",
    tags: ["식물", "도감", "자연"],
    isPremium: false,
    isNew: true,
    language: ["ko", "jp", "en"],
  },
]

function TemplateCard({ template }: { template: Template }) {
  return (
    <Card className="overflow-hidden book-cover">
      <div className="aspect-[3/4] flex items-center justify-center relative bg-gradient-to-br from-[#f0f4f8] to-[#d7e3fc]">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(76,125,91,0.05)] to-[rgba(76,125,91,0.1)]" />
        <BookText className="h-12 w-12 text-[#4c7d5b]" />
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {template.isNew && <Badge className="bg-[#4c7d5b]">NEW</Badge>}
          {template.isPremium && (
            <Badge variant="outline" className="bg-accent text-accent-foreground border-0">
              <Leaf className="h-3 w-3 mr-1" /> Premium
            </Badge>
          )}
        </div>
        <div className="absolute bottom-3 right-3 flex gap-1">
          {template.language.includes("ko") && (
            <span className="text-xs bg-background/80 px-1.5 py-0.5 rounded">KO</span>
          )}
          {template.language.includes("jp") && (
            <span className="text-xs bg-background/80 px-1.5 py-0.5 rounded">JP</span>
          )}
          {template.language.includes("en") && (
            <span className="text-xs bg-background/80 px-1.5 py-0.5 rounded">EN</span>
          )}
        </div>
      </div>
      <CardContent className="p-4">
        <div className="mb-2">
          <h3 className="font-medium">{template.title}</h3>
          <p className="text-sm text-muted-foreground">{template.description}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-wrap gap-1">
            {template.tags.map((tag, i) => (
              <span key={i} className="text-xs bg-muted px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <Link href={`/templates/${template.id}`}>
            <Button size="sm" variant="outline" className="rounded-full">
              <BookOpen className="h-3.5 w-3.5 mr-1" /> 보기
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
