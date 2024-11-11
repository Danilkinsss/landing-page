import './App.css'
import IMAGES from './images/Images'

// shadcn components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './components/ui/accordion'
import { Button } from './components/ui/button'
import { Separator } from './components/ui/separator'
import Introduction from './components/Introduction'
import SongsCarousel from './components/SongsCarousel'
import BandMembers from './components/BandMembers'

function App() {
  const paragraphs = ['main', 'songs', 'members', 'questions', 'socials']
  const liParagraphs = paragraphs.map((elem) => (
    <li>
      {
        <a href={`#${elem}`} className="hover:underline underline-offset-8">
          {elem}
        </a>
      }
    </li>
  ))

  return (
    <div>
      <header className="px-14 max-w-screen fixed z-10">
        <div
          id="navbar"
          className="font-typeface w-[92.7%] bg-red-700 flex justify-between fixed  text-7xl font-extralight tracking-wide "
        >
          <div
            id="logo and name"
            className="text-6xl flex gap-4 p-3 px-7 items-center"
          >
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
              <ul className=" flex flex-row gap-4">{liParagraphs}</ul>
            </div>
            <a href="https://www.twentyonepilots.com/">
              <div id="website">website</div>
            </a>
          </div>
        </div>
      </header>

      <main className="px-14 max-w-screen bg-black flex flex-col gap-24 ">
        <div id="main" className="px-5">
          <Introduction />
        </div>

        <Separator id="songs" className="bg-gray-400" />

        <div id="songsElem" className=" px-5">
          <SongsCarousel />
        </div>

        <Separator id="members" className="bg-gray-400" />

        <div id="membersElem" className="px-5 ">
          <BandMembers />
        </div>

        <Separator id="questions" className="bg-gray-400" />

        <div id="questionsElem" className="w-full flex flex-col px-5 gap-16 ">
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
                They are currently on "The Clancy" world tour, so starting from
                November 15 and till May 14 you can see their performance.
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
                biggest concerts close to us will be in London, Berlin, Paris
                and Barcelona.
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

        <Separator id="socials" className="bg-gray-400" />

        <div
          id="socials"
          className=" pb-24  flex flex-row gap-24 p-5  font-sans text-gray-400 self-center py-7 underline"
        >
          <a href="https://www.instagram.com/twentyonepilots/?hl=en">
            <div className="flex flex-row gap-4">
              <img
                src={IMAGES.inst}
                alt="instagram icon"
                className=" h-7 w-7 hover:brightness-[60%] brightness-50"
              />
              <p>Instagram</p>
            </div>
          </a>
          <a href="https://open.spotify.com/artist/3YQKmKGau1PzlVlkL1iodx">
            <div className="flex flex-row gap-4">
              <img
                src={IMAGES.spot}
                alt="spotify icon"
                className=" h-7 w-7 hover:brightness-[60%] brightness-50"
              />
              <p>Spotify</p>
            </div>
          </a>
          <a href="https://www.youtube.com/channel/UCBQZwaNPFfJ1gZ1fLZpAEGw">
            <div className="flex flex-row gap-4">
              <img
                src={IMAGES.yout}
                alt="youtube icon"
                className=" h-7 w-7 hover:brightness-[60%] brightness-50"
              />
              <p>Youtube</p>
            </div>
          </a>
          <a href="https://www.facebook.com/twentyonepilots/">
            <div className="flex flex-row gap-4">
              <img
                src={IMAGES.fcb}
                alt="facebook icon"
                className=" h-7 w-7 hover:brightness-[60%] brightness-50"
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
