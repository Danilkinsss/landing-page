import './App.css'
import IMAGES from './images/Images'

import { Separator } from './components/ui/separator'

import Introduction from './components/Introduction'
import SongsCarousel from './components/SongsCarousel'
import BandMembers from './components/BandMembers'
import Questions from './components/Questions'
import Socials from './components/Socials'

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
        <div id="socialsElem" className=" pb-24 p-5 ">
          <Socials />
        </div>
      </main>
    </div>
  )
}

export default App
