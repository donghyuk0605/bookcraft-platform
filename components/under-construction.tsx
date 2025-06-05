import Link from "next/link"
import { Button } from "@/components/ui/button"

export function UnderConstruction({
  title = "페이지 준비 중",
  message = "해당 페이지는 현재 준비 중입니다.",
}: {
  title?: string
  message?: string
}) {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-muted-foreground">{message}</p>
        <Link href="/">
          <Button className="rounded-full">홈으로 돌아가기</Button>
        </Link>
      </div>
    </div>
  )
}
