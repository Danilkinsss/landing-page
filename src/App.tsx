// import { useState } from 'react'
import './App.css'
import IMAGES from './images/Images'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      {/* <button
            onClick={() => setCount((count) => count + 1)}
            className="justify-self-end"
          >
            count is {count}
          </button> */}
      <header>
        <div className="bg-pink-300">Nav bar here</div>
      </header>
      <main className="flex flex-col gap-5 bg-orange-400">
        <div
          id="quote and picture"
          className="bg-green-300 border-2 flex flex-col items-center"
        >
          <img
            src={IMAGES.poster}
            alt="first image"
            className="object-cover h-96 w-[90%] p-10 "
          />

          <div className="bg-purple-400 w-1/3">
            Band genre desriptiong + quote
          </div>
        </div>

        {/* TODO: shadcn Carousel compnent❎ */}

        <div id="carousel" className="flex flex-row bg-blue-400 border-2 ">
          <img
            src={IMAGES.song1}
            alt="first image"
            className="rounded-3xl object-cover h-1/3 w-1/3 min-h-36 min-w-80"
          />
          {/* <img src={IMAGES.song2} alt="first image" />
          <img src={IMAGES.song3} alt="first image" />
          <img src={IMAGES.song4} alt="first image" /> */}
        </div>

        <div
          id="members"
          className="bg-purple-400 flex flex-col gap-10 border-2"
        >
          <div className="flex flex-row gap-10">
            <h2>Name 1</h2>
            <img src={IMAGES.tyler} alt="first image" className="rounded-3xl" />
          </div>

          <div className="flex flex-row gap-10">
            <img src={IMAGES.josh} alt="first image" />
            <h2>Name 2</h2>
          </div>
        </div>

        {/* TODO: shadcn Accordion component❎ */}

        <div
          id="questions"
          className="bg-lime-400 flex flex-col gap-4 border-2"
        >
          <h2>► Accordion 1</h2>
          <h2>► Accordion 2</h2>
          <h2>► Accordion 3</h2>
        </div>

        {/* TODO: shadcn Avatar component❎❓❓ */}

        <div id="socials" className="bg-amber-400 border-2">
          <p>--Separator--</p>
          <div>
            <p>Instagram</p>
            <img src={IMAGES.inst} alt="instagram image" />
          </div>
          <div>
            <p>Youtube</p>
            <img src={IMAGES.spot} alt="youtube image" />
          </div>
          <div>
            <p>Spotify</p>
            <img src={IMAGES.yout} alt="spotify image" />
          </div>
          <div>
            <p>Facebook</p>
            <img src={IMAGES.fcb} alt="facebook image" />
          </div>
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
