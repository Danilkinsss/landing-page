import './App.css'
import IMAGES from './images/Images'

// shadcn components

import { Separator } from './components/ui/separator'
import Introduction from './components/Introduction'
import SongsCarousel from './components/SongsCarousel'
import BandMembers from './components/BandMembers'
import Questions from './components/Questions'

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

        <div id="questionsElem" className="px-5">
          <Questions />
        </div>

        <Separator id="socials" className="bg-gray-400" />

        <div
          id="socialsElem"
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
