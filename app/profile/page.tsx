import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Camera, Mail, MapPin, User, Users } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="container py-8 max-w-5xl">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">프로필 설정</h1>
          <p className="text-muted-foreground">계정 설정 및 프로필 정보를 관리하세요.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <Card className="apple-card">
              <CardHeader>
                <CardTitle>프로필 사진</CardTitle>
                <CardDescription>프로필 사진을 업데이트하세요</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="relative mb-4">
                  <Avatar className="h-32 w-32">
                    <AvatarImage src="/placeholder.svg?height=128&width=128" alt="프로필" />
                    <AvatarFallback className="text-4xl">홍</AvatarFallback>
                  </Avatar>
                  <Button size="icon" className="absolute bottom-0 right-0 rounded-full h-8 w-8">
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-center">
                  <h3 className="font-medium text-lg">홍길동</h3>
                  <p className="text-muted-foreground text-sm">작가 & 디자이너</p>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <Badge variant="outline" className="gap-1">
                    <BookOpen className="h-3 w-3" /> 12권의 책
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <Users className="h-3 w-3" /> 245 팔로워
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:w-2/3">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="general">기본 정보</TabsTrigger>
                <TabsTrigger value="account">계정</TabsTrigger>
                <TabsTrigger value="preferences">환경설정</TabsTrigger>
              </TabsList>
              <TabsContent value="general" className="mt-4">
                <Card className="apple-card">
                  <CardHeader>
                    <CardTitle>기본 정보</CardTitle>
                    <CardDescription>개인 정보를 업데이트하세요</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">이름</Label>
                        <Input id="firstName" defaultValue="길동" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">성</Label>
                        <Input id="lastName" defaultValue="홍" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="displayName">표시 이름</Label>
                      <Input id="displayName" defaultValue="홍길동" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">소개</Label>
                      <Textarea
                        id="bio"
                        defaultValue="스토리텔링과 시각적 내러티브에 열정을 가진 작가이자 디자이너입니다."
                        rows={4}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="location">위치</Label>
                        <div className="relative">
                          <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input id="location" defaultValue="서울, 대한민국" className="pl-9" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">웹사이트</Label>
                        <Input id="website" defaultValue="https://honggilding.com" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button className="rounded-full">변경사항 저장</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="account" className="mt-4">
                <Card className="apple-card">
                  <CardHeader>
                    <CardTitle>계정 설정</CardTitle>
                    <CardDescription>계정 인증 정보와 보안을 관리하세요</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">이메일 주소</Label>
                      <div className="relative">
                        <Mail className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input id="email" type="email" defaultValue="hong.gildong@example.com" className="pl-9" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username">사용자 이름</Label>
                      <div className="relative">
                        <User className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input id="username" defaultValue="hongildong" className="pl-9" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">현재 비밀번호</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">새 비밀번호</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">새 비밀번호 확인</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button className="rounded-full">계정 업데이트</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="preferences" className="mt-4">
                <Card className="apple-card">
                  <CardHeader>
                    <CardTitle>환경설정</CardTitle>
                    <CardDescription>사용자 경험을 맞춤 설정하세요</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="language">기본 언어</Label>
                      <select id="language" className="w-full p-2 border rounded-md">
                        <option value="ko">한국어</option>
                        <option value="jp">日本語</option>
                        <option value="en">English</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timezone">시간대</Label>
                      <select id="timezone" className="w-full p-2 border rounded-md">
                        <option value="kst">KST (한국 표준시)</option>
                        <option value="jst">JST (일본 표준시)</option>
                        <option value="utc">UTC (협정 세계시)</option>
                        <option value="est">EST (동부 표준시)</option>
                        <option value="pst">PST (태평양 표준시)</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="notifications">이메일 알림</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="notify-comments" defaultChecked />
                          <label htmlFor="notify-comments">내 책에 대한 댓글</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="notify-followers" defaultChecked />
                          <label htmlFor="notify-followers">새 팔로워</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="notify-updates" defaultChecked />
                          <label htmlFor="notify-updates">플랫폼 업데이트</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="notify-marketing" />
                          <label htmlFor="notify-marketing">마케팅 이메일</label>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button className="rounded-full">환경설정 저장</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
