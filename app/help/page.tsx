"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function HelpPage() {
  return (
    <div className="container py-8 max-w-3xl">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">도움말</h1>
          <p className="text-muted-foreground">
            자주 묻는 질문을 통해 빠르게 해결해 보세요.
          </p>
        </div>

        <Accordion type="single" collapsible>
          <AccordionItem value="what-is">
            <AccordionTrigger>책공장이 무엇인가요?</AccordionTrigger>
            <AccordionContent>
              책공장은 글쓰기부터 출판까지 한 번에 진행할 수 있는 온라인 플랫폼입니다.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="cost">
            <AccordionTrigger>서비스 이용 요금이 있나요?</AccordionTrigger>
            <AccordionContent>
              무료 플랜과 유료 플랜이 있으며, 자세한 내용은 요금제 페이지에서 확인하실 수 있습니다.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="support">
            <AccordionTrigger>추가 문의는 어디로 하나요?</AccordionTrigger>
            <AccordionContent>
              support@bookcraft.co 로 메일 주시면 빠르게 답변드리겠습니다.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
