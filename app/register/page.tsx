"use client"

import { supabase } from "@/utils/supabase/client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [error, setError] = useState<string | null>(null)

  const handleRegister = async () => {
    if (password !== confirm) {
      setError("비밀번호가 일치하지 않습니다")
      return
    }

    const { error } = await supabase.auth.signUp({ email, password })
    if (error) setError(error.message)
    else router.push("/dashboard")
  }

  return (
    <div className="container py-8 max-w-md">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">회원가입</h1>
          <p className="text-muted-foreground">새 계정을 생성합니다.</p>
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
          <Input
            type="password"
            placeholder="비밀번호 확인"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="rounded-full"
          />
          {error && <p className="text-destructive text-sm">{error}</p>}
          <Button className="rounded-full" onClick={handleRegister}>
            가입하기
          </Button>
        </div>
      </div>
    </div>
  )
}
