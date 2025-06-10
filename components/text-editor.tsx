"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Bold, Italic, Underline } from "lucide-react"

export function TextEditor({ defaultContent = "" }: { defaultContent?: string }) {
  const editorRef = useRef<HTMLDivElement>(null)

  const exec = (command: string) => {
    document.execCommand(command, false)
    editorRef.current?.focus()
  }

  return (
    <div>
      <div className="mb-2 flex gap-1">
        <Button variant="outline" size="icon" onClick={() => exec("bold")}> 
          <Bold className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={() => exec("italic")}> 
          <Italic className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={() => exec("underline")}> 
          <Underline className="h-4 w-4" />
        </Button>
      </div>
      <div
        ref={editorRef}
        className="min-h-[300px] p-4 border rounded bg-background focus:outline-none"
        contentEditable
        dangerouslySetInnerHTML={{ __html: defaultContent }}
      />
    </div>
  )
}
