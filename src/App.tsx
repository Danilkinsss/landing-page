// import { useState } from 'react'

import './App.css'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './components/ui/accordion'
import { Button } from './components/ui/button'
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
  return (
    <div>
      <header
        // className="w-full fixed top-0 p-20 text-2xl flex flex-col justify-center items-center transition-colors duration-500 ease-in-out"
        className="px-14 max-w-screen fixed z-10"
      >
        <div
          id="navbar"
          className="font-typeface w-[92.7%] bg-red-700 flex justify-between fixed  text-5xl font-extralight tracking-wide "
        >
          <div id="logo and name" className="flex gap-4 p-3 px-7 items-center">
            <img
              src={IMAGES.logo}
              alt="logo"
              className="object-cover h-9 w-9"
            />
            <div>Twenty One Pilots</div>
          </div>
          <div
            id="navigations and website"
            className="flex gap-14 p-3 px-7 text-4xl items-center"
          >
            <div id="navigations" className="gap-24">
              <ul className=" flex flex-row gap-4">
                <li>
                  <a
                    href="#main"
                    className="hover:underline underline-offset-8"
                  >
                    main
                  </a>
                </li>
                <li>
                  <a
                    href="#songsSep"
                    className="hover:underline underline-offset-8"
                  >
                    songs
                  </a>
                </li>
                <li>
                  <a
                    href="#membersSep"
                    className="hover:underline underline-offset-8"
                  >
                    members
                  </a>
                </li>
                <li>
                  <a
                    href="#questionsSep"
                    className=" hover:underline underline-offset-8   "
                  >
                    questions
                  </a>
                </li>
                <li>
                  <a
                    href="#socials"
                    className=" hover:underline underline-offset-8   "
                  >
                    socials
                  </a>
                </li>
              </ul>
            </div>
            <a href="https://www.twentyonepilots.com/">
              <div id="website">website</div>
            </a>
          </div>
        </div>
      </header>

      <main className="px-14 max-w-screen bg-black flex flex-col gap-24 ">
        <div id="main" className="flex flex-col items-center p-10 ">
          <h1
            className=" animate-[pulse_3s_ease-in-out_infinite]
 text-red-500/60 font-serif font-light tracking-wide text-center text-6xl w-2/3 p-32 justify-center align-middle"
          >
            "Unfiltered anthems, raw energy, and fearless artistry."
          </h1>
          <img
            src={IMAGES.poster}
            alt="first image"
            className="object-cover h-96 w-[90%] p-10 opacity-75 blur-sm hover:blur-none  delay-200"
          />

          <div className="underline underline-offset-8 min-w-fit flex text-lg text-zinc-100 gap-8 ">
            <div className=" italic w-fit p-7 basis-auto	rounded bg-zinc-950 content-center ">
              💿 Billions of Spotify streams
            </div>
            <div className="italic w-fit p-7 basis-auto	 rounded bg-zinc-950 content-center">
              🏆 Grammy winners
            </div>
            <div className="italic w-fit p-7 basis-auto	 rounded bg-zinc-950 content-center">
              📻 Longest-charting album of the 2010s
            </div>
          </div>
        </div>

        <Separator id="songsSep" className="bg-gray-400" />

        <div
          id="songs"
          className="flex flex-col align-middle justify-evenly px-5 gap-5"
        >
          <h2 className="text-3xl text-white font-bold px-24">
            My favourite songs
          </h2>
          <Carousel className=" px-8 bg-black w-[90%] mx-10">
            <CarouselContent className="h-min align-middle justify-evenly flex">
              <CarouselItem className=" aspect-video basis-1/3 items-center justify-center p-8 ">
                <a href="https://www.youtube.com/watch?v=r_9Kf0D5BTs">
                  <img
                    src={IMAGES.song1}
                    alt="first song preview image"
                    className="transition ease-in-out delay-150 hover:scale-110 rounded-3xl object-cover max-h-full h-64 w-96 min-h-36 min-w-80 justify-self-center"
                  />
                </a>
                <h3 className="font-mono py-5 text-center text-zinc-400">
                  Heavydirtysoul
                </h3>
              </CarouselItem>
              <CarouselItem className="aspect-video  basis-1/3 items-center justify-center p-8">
                <a href="https://www.youtube.com/watch?v=3sO-Y1Zbft4">
                  <img
                    src={IMAGES.song2}
                    alt="second song preview image"
                    className="transition ease-in-out delay-150 hover:scale-110 rounded-3xl object-cover max-h-full h-64 w-96 min-h-36 min-w-80 justify-self-center"
                  />
                </a>
                <h3 className="font-mono py-5 text-center text-zinc-400">
                  Shy Away
                </h3>
              </CarouselItem>
              <CarouselItem className="aspect-video basis-1/3 items-center justify-center p-8">
                <a href="https://www.youtube.com/watch?v=MEiVnNNpJLA">
                  <img
                    src={IMAGES.song3}
                    alt="third song preview image"
                    className="transition ease-in-out delay-150 hover:scale-110 rounded-3xl object-cover max-h-full h-64 w-96 min-h-36 min-w-80 justify-self-center"
                  />
                </a>
                <h3 className="font-mono py-5 text-center text-zinc-400">
                  Doubt
                </h3>
              </CarouselItem>
              <CarouselItem className="aspect-video  basis-1/3 items-center justify-center p-8 ">
                <a href="https://www.youtube.com/watch?v=Io2hbcrAYBw">
                  <img
                    src={IMAGES.song4}
                    alt="forth song preview image"
                    className="transition ease-in-out delay-150 hover:scale-110 rounded-3xl object-cover max-h-full h-64 w-96 min-h-36 min-w-80 justify-self-center"
                  />
                </a>
                <h3 className="font-mono py-5 text-center text-zinc-400">
                  The Hype
                </h3>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="bg-gray-400 border-gray-400" />
            <CarouselNext className="bg-gray-400 border-gray-400" />
          </Carousel>
        </div>

        <Separator className="bg-gray-400" id="membersSep" />

        <div id="members" className="px-5 flex flex-col gap-10">
          <h2 className="text-3xl text-white font-bold px-24">Band members</h2>
          <div className="items-center flex flex-row gap-32 justify-center place-items-center">
            <h3 className="text-lg font-serif  text-white w-[20%] leading-relaxed">
              <p className="text-2xl text-amber-200 font-bold">Tyler Joseph</p>{' '}
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
              <p className="text-2xl text-cyan-200 font-bold">Josh Dun</p>
              is the band’s dynamic drummer, always bringing explosive energy on
              stage. He's the guy often found flipping over his drum kit
              mid-song or jumping into the crowd.
            </h3>
          </div>
        </div>

        <Separator className="bg-gray-400" id="questionsSep" />

        <div id="questions" className="w-full flex flex-col p-5 gap-16 ">
          <h2 className="text-3xl text-white font-bold px-24">Questions</h2>
          <Accordion
            type="single"
            collapsible
            className="w-[70%] bg-black font-extrabold flex flex-col justify-center self-center"
          >
            <AccordionItem value="question-1">
              <AccordionTrigger
                className="transition ease-in-out
               bg-zinc-950 hover:bg-zinc-900 my-2 duration-150  rounded-xl px-4 py-6 font-extrabold text-white text-lg"
              >
                When can I go to their concert?
              </AccordionTrigger>
              <AccordionContent className="my-2 py-3 px-4 font-mono text-white rounded-xl">
                They are currently on "The Clancy" world tour, therefore
                starting from November 15 and till May 14.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question-2">
              <AccordionTrigger
                className="transition ease-in-out
               bg-zinc-950 hover:bg-zinc-900 my-2 duration-150  rounded-xl px-4 py-6 font-extrabold text-white text-lg"
              >
                Where can I meet them?
              </AccordionTrigger>
              <AccordionContent className="px-4 font-mono text-white">
                All across the world: Oceania, South America and Europe. Their
                biggest concert will be in London, Berlin, Paris and Barcelona.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question-3">
              <AccordionTrigger
                className="transition ease-in-out
               bg-zinc-950 hover:bg-zinc-900 my-2 duration-150  rounded-xl px-4 py-6 font-extrabold text-white text-lg"
              >
                Any special guests on their concert in Barcelona?
              </AccordionTrigger>
              <AccordionContent className="px-4 font-mono text-white">
                1 particularly special guy: me :)
              </AccordionContent>
            </AccordionItem>
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
