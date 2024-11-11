import './App.css'

import { Separator } from './components/ui/separator'

import Introduction from './components/Introduction'
import SongsCarousel from './components/SongsCarousel'
import BandMembers from './components/BandMembers'
import Questions from './components/Questions'
import Socials from './components/Socials'
import Navigations from './components/Navigations'

function App() {
  return (
    <div>
      <header className="px-14 max-w-screen fixed z-10">
        <Navigations />
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
