"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function NewEditorRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Simulate creating a new document and redirecting to its editor
    // In a real app, this would create a document in the database first
    router.push("/editor/new-document")
  }, [router])

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        <p className="text-lg">새 문서를 준비하는 중입니다...</p>
      </div>
    </div>
  )
}
