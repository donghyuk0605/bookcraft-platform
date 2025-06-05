"use client"

import { supabase } from "@/utils/supabase/client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) setError(error.message)
    else router.push("/dashboard")
  }

  return (
    <div className="container py-8 max-w-md">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">로그인</h1>
          <p className="text-muted-foreground">
            계정에 로그인하여 책공장의 모든 기능을 이용하세요.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full"
          />
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-full"
          />
          {error && <p className="text-destructive text-sm">{error}</p>}
          <Button className="rounded-full" onClick={handleLogin}>
            로그인
          </Button>
        </div>
      </div>
    </div>
  )
}
