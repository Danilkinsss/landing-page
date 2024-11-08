// import { useState } from 'react'

import './App.css'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './components/ui/accordion'
import { Separator } from './components/ui/separator'
import IMAGES from './images/Images'

// shadcn components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="w-screen">
      {/* <button
            onClick={() => setCount((count) => count + 1)}
            className="justify-self-end"
          >
            count is {count}
          </button> */}
      <header>
        <div className="bg-pink-300">Nav bar here</div>
      </header>
      <main className="bg-black flex flex-col gap-32">
        <div
          id="quote and picture"
          className="  flex flex-col items-center p-10"
        >
          <h1 className="bg-purple-400 w-1/3 p-10 justify-center align-middle">
            Band genre desriptiong + quote
          </h1>
          <img
            src={IMAGES.poster}
            alt="first image"
            className="object-cover h-96 w-[90%] p-10 "
          />

          <div className="bg-purple-400 w-1/3 p-10">
            Band genre desriptiong + quote
          </div>
        </div>

        <Separator className="bg-gray-400" />
        <div id="carousel" className="w-100% flex align-middle justify-evenly">
          <Carousel className=" bg-black w-[90%]">
            <CarouselContent className="h-min flex align-middle justify-evenly">
              <CarouselItem className=" aspect-video basis-1/3 items-center justify-center  p-6">
                <a href="https://www.youtube.com/watch?v=r_9Kf0D5BTs">
                  <img
                    src={IMAGES.song1}
                    alt="first song preview image"
                    className="rounded-3xl object-cover max-h-full h-64 w-96 min-h-36 min-w-80 justify-self-center"
                  />
                </a>
              </CarouselItem>
              <CarouselItem className="aspect-video  basis-1/3 items-center justify-center p-6">
                <a href="https://www.youtube.com/watch?v=3sO-Y1Zbft4">
                  <img
                    src={IMAGES.song2}
                    alt="second song preview image"
                    className="rounded-3xl object-cover max-h-full h-64 w-96 min-h-36 min-w-80 justify-self-center"
                  />
                </a>
              </CarouselItem>
              <CarouselItem className="aspect-video basis-1/3 items-center justify-center p-6">
                <a href="https://www.youtube.com/watch?v=MEiVnNNpJLA">
                  <img
                    src={IMAGES.song3}
                    alt="third song preview image"
                    className="rounded-3xl object-cover max-h-full h-64 w-96 min-h-36 min-w-80 justify-self-center"
                  />
                </a>
              </CarouselItem>
              <CarouselItem className="aspect-video  basis-1/3 items-center justify-center p-6">
                <a href="https://www.youtube.com/watch?v=Io2hbcrAYBw">
                  <img
                    src={IMAGES.song4}
                    alt="forth song preview image"
                    className="rounded-3xl object-cover max-h-full h-64 w-96 min-h-36 min-w-80 justify-self-center"
                  />
                </a>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="bg-gray-400 border-gray-400" />
            <CarouselNext className="bg-gray-400 border-gray-400" />
          </Carousel>
        </div>
        {/* 
        <div id="carousel" className="flex flex-row bg-blue-400  ">
          <img
            src={IMAGES.song1}
            alt="first image"
            className="rounded-3xl object-cover h-1/3 w-1/3 min-h-36 min-w-80"
          />
          <img src={IMAGES.song2} alt="first image" />
          <img src={IMAGES.song3} alt="first image" />
          <img src={IMAGES.song4} alt="first image" />
        </div>
         */}

        <Separator className="bg-gray-400" />

        <div
          id="members"
          className=" flex flex-col items-center gap-10 w-screen"
        >
          <div className="flex flex-row gap-32 justify-center place-items-center">
            <h3 className="text-lg font-serif  text-white w-[20%] leading-relaxed">
              <h2 className="text-2xl text-amber-200 font-bold">
                Tyler Joseph
              </h2>{' '}
              is the creative mind behind Twenty One Pilots, leading with
              vocals, lyrics, and an array of instruments. He's known for
              pouring raw, introspective energy into every performance.
            </h3>
            <a
              href="https://en.wikipedia.org/wiki/Tyler_Joseph"
              className="p-0 h-1/4 w-1/4 min-h-36 min-w-80"
            >
              <img
                src={IMAGES.tyler}
                alt="Tyler Joseph picture"
                className="rounded-full"
              />
            </a>
          </div>

          <div className="flex flex-row gap-32 justify-center place-items-center">
            <a
              href="https://en.wikipedia.org/wiki/Josh_Dun"
              className="p-0 h-1/4 w-1/4 min-h-36 min-w-80"
            >
              <img
                src={IMAGES.josh}
                alt="Josh Dun picture"
                className="rounded-full"
              />
            </a>
            <h3 className="text-lg font-serif  text-white w-[20%] leading-relaxed">
              <h2 className="text-2xl text-cyan-200 font-bold">Josh Dun</h2>
              is the band’s dynamic drummer, always bringing explosive energy on
              stage. He's the guy often found flipping over his drum kit
              mid-song or jumping into the crowd.
            </h3>
          </div>
        </div>

        <Separator className="bg-gray-400" />

        <div
          id="questions"
          className="flex flex-col gap-4 p-5 w-[70%] self-center"
        >
          <Accordion
            type="single"
            collapsible
            className="w-full bg-black font-extrabold"
          >
            <AccordionItem value="question-1">
              <AccordionTrigger className="px-4 py-6 font-extrabold text-white text-lg">
                When can I go to their concert?
              </AccordionTrigger>
              <AccordionContent className="px-4 font-mono text-white">
                They are currently on "The Clancy" world tour, therefore
                starting from November 15 and till May 14.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question-2">
              <AccordionTrigger className="px-4 py-6 font-extrabold text-white text-lg">
                Where can I meet them?
              </AccordionTrigger>
              <AccordionContent className="px-4 font-mono text-white">
                All across the world: Oceania, South America and Europe. Their
                biggest concert will be in London, Berlin, Paris and Barcelona.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question-3">
              <AccordionTrigger className="px-4 py-6 font-bold text-white text-lg">
                Any special guests on their concert in Barcelona?
              </AccordionTrigger>
              <AccordionContent className="px-4 font-mono text-white">
                1 particularly special guy: me :)
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <Separator className="bg-gray-400" />

        <div
          id="socials"
          className=" pb-24  flex flex-row gap-24 p-5  font-sans text-gray-400 self-center py-7 underline"
        >
          <a href="https://www.instagram.com/twentyonepilots/?hl=en">
            <div className="flex flex-row gap-4">
              <img
                src={IMAGES.inst}
                alt="instagram icon"
                className=" h-7 w-7 hover:scale-120 hover:animate-spin brightness-50"
              />
              <p>Instagram</p>
            </div>
          </a>
          <a href="https://open.spotify.com/artist/3YQKmKGau1PzlVlkL1iodx">
            <div className="flex flex-row gap-4">
              <img
                src={IMAGES.spot}
                alt="spotify icon"
                className=" h-7 w-7 hover:scale-120 hover:animate-spin brightness-50"
              />
              <p>Spotify</p>
            </div>
          </a>
          <a href="https://www.youtube.com/channel/UCBQZwaNPFfJ1gZ1fLZpAEGw">
            <div className="flex flex-row gap-4">
              <img
                src={IMAGES.yout}
                alt="youtube icon"
                className=" h-7 w-7 hover:scale-120 hover:animate-spin brightness-50"
              />
              <p>Youtube</p>
            </div>
          </a>
          <a href="https://www.facebook.com/twentyonepilots/">
            <div className="flex flex-row gap-4">
              <img
                src={IMAGES.fcb}
                alt="facebook icon"
                className=" h-7 w-7 hover:scale-120 hover:animate-spin brightness-50"
              />
              <p>Facebook</p>
            </div>
          </a>
        </div>
      </main>
    </div>
  )
  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
