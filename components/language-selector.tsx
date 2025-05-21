"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type Language = {
  code: string
  name: string
  localName: string
  flag: string
}

const languages: Language[] = [
  { code: "ko", name: "Korean", localName: "한국어", flag: "🇰🇷" },
  { code: "jp", name: "Japanese", localName: "日本語", flag: "🇯🇵" },
  { code: "en", name: "English", localName: "English", flag: "🇺🇸" },
]

export function LanguageSelector() {
  const [language, setLanguage] = useState<Language>(languages[0])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 gap-1 px-2">
          <span>{language.flag}</span>
          <span className="sr-only md:not-sr-only md:inline-block">{language.code.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={`flex items-center justify-between ${lang.code === language.code ? "bg-accent" : ""}`}
            onClick={() => setLanguage(lang)}
          >
            <span
              className={`flex items-center gap-2 ${lang.code === "jp" ? "lang-jp" : lang.code === "ko" ? "lang-ko" : "lang-en"}`}
            >
              <span>{lang.flag}</span>
              <span>{lang.localName}</span>
            </span>
            {lang.code === language.code && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
