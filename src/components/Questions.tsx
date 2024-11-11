import { questions } from '@/data/data'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'
import { Button } from './ui/button'

function Questions() {
  const listItems = questions.map((question) => (
    <AccordionItem key={question.id} value={`question #${question.id + 1}`}>
      <AccordionTrigger className="transition ease-in-out bg-zinc-950 hover:bg-zinc-900 my-2 duration-150  rounded-xl px-4 py-6 font-extrabold text-white text-lg">
        {question.question}
      </AccordionTrigger>
      <AccordionContent className="my-2 py-3 px-4 font-mono text-white rounded-xl">
        {question.answer}
      </AccordionContent>
    </AccordionItem>
  ))

  return (
    <div className="w-full flex flex-col gap-16 ">
      <h2 className="text-3xl text-white font-bold px-24">Questions</h2>
      <Accordion
        type="single"
        collapsible
        className="w-[70%] bg-black font-extrabold flex flex-col justify-center self-center"
      >
        {listItems}
      </Accordion>
      <div className="self-center">
        <a href="https://www.twentyonepilots.com/tour">
          <Button
            variant="destructive"
            className="bg-red-600/90 hover:bg-red-600/80 text-lg h-12 rounded-2xl self-center transition ease-in-out delay-150 hover:scale-110"
          >
            Buy tickets now
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Questions
