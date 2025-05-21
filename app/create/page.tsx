"use client";

import { supabase } from "@/utils/supabase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, BookOpen } from "lucide-react";

export default function CreatePage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [language, setLanguage] = useState("ko");

  const handleCreate = async () => {
    if (!title) {
      alert("제목은 필수입니다!");
      return;
    }

    const { error } = await supabase.from("books").insert({
      title,
      author,
      description,
      category,
      language,
    });

    if (error) {
      alert("❌ 저장 실패: " + error.message);
    } else {
      router.push("/editor/new");
    }
  };

  return (
    <div className="container py-8 max-w-4xl">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">새 책 만들기</h1>
          <p className="text-muted-foreground">
            새로운 책 프로젝트를 시작하세요.
          </p>
        </div>

        <Tabs defaultValue="blank">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="blank">빈 캔버스에서 시작</TabsTrigger>
            <TabsTrigger value="template">템플릿으로 시작</TabsTrigger>
          </TabsList>

          <TabsContent value="blank" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>기본 정보</CardTitle>
                <CardDescription>
                  새 책의 기본 정보를 입력하세요.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  className="space-y-6"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="space-y-2">
                    <label htmlFor="title" className="text-sm font-medium">
                      책 제목
                    </label>
                    <Input
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="제목을 입력하세요"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="author" className="text-sm font-medium">
                      저자
                    </label>
                    <Input
                      id="author"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      placeholder="저자 이름을 입력하세요"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="description"
                      className="text-sm font-medium"
                    >
                      책 소개
                    </label>
                    <Textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="책에 대한 간략한 소개를 입력하세요"
                      rows={4}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="category" className="text-sm font-medium">
                        카테고리
                      </label>
                      <Select onValueChange={setCategory}>
                        <SelectTrigger id="category">
                          <SelectValue placeholder="카테고리 선택" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fiction">소설/문학</SelectItem>
                          <SelectItem value="non-fiction">
                            에세이/논픽션
                          </SelectItem>
                          <SelectItem value="poetry">시/시집</SelectItem>
                          <SelectItem value="travel">여행</SelectItem>
                          <SelectItem value="cooking">요리/레시피</SelectItem>
                          <SelectItem value="photo">사진집</SelectItem>
                          <SelectItem value="portfolio">포트폴리오</SelectItem>
                          <SelectItem value="children">아동/그림책</SelectItem>
                          <SelectItem value="other">기타</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="language" className="text-sm font-medium">
                        언어
                      </label>
                      <Select defaultValue="ko" onValueChange={setLanguage}>
                        <SelectTrigger id="language">
                          <SelectValue placeholder="언어 선택" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ko">한국어</SelectItem>
                          <SelectItem value="en">영어</SelectItem>
                          <SelectItem value="ja">일본어</SelectItem>
                          <SelectItem value="zh">중국어</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="pt-4 flex justify-end">
                    <Button
                      type="button"
                      className="gap-2"
                      onClick={handleCreate}
                    >
                      다음 단계
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="template" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>템플릿 선택</CardTitle>
                <CardDescription>
                  시작점으로 사용할 템플릿을 선택하세요.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "여행 일기",
                      description: "여행 경험을 기록하기 위한 구조화된 템플릿",
                    },
                    {
                      title: "요리책",
                      description: "레시피와 요리 사진을 위한 레이아웃",
                    },
                    {
                      title: "포트폴리오",
                      description: "작품과 프로젝트를 전시하기 위한 구성",
                    },
                    {
                      title: "사진집",
                      description: "사진과 설명을 위한 최적화된 레이아웃",
                    },
                    {
                      title: "시집",
                      description: "시와 짧은 글을 위한 미니멀한 디자인",
                    },
                    {
                      title: "동화책",
                      description: "아이들을 위한 그림책 형식",
                    },
                  ].map((template, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-6 flex flex-col items-center text-center hover:border-primary hover:bg-primary/5 cursor-pointer transition-colors"
                    >
                      <div className="mb-4">
                        <BookOpen className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">
                        {template.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {template.description}
                      </p>
                      <Link href={`/template/${index}`}>
                        <Button variant="outline" size="sm">
                          선택하기
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex justify-center">
                  <Link href="/templates">
                    <Button variant="outline">더 많은 템플릿 보기</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
