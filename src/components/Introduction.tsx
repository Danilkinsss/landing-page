import IMAGES from '@/images/Images'

function Introduction() {
  const achievements = [
    '💿 Billions of Spotify streams',
    '🏆 Grammy winners',
    '📻 Longest-charting album of the 2010s',
  ]
  const styling =
    'italic w-fit p-7 basis-auto rounded bg-zinc-950 content-center'

  return (
    <div className="flex flex-col items-center p-10 pt-20">
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
        <div className={styling}>{achievements[0]}</div>
        <div className={styling}>{achievements[1]}</div>
        <div className={styling}>{achievements[2]}</div>
      </div>
    </div>
  )
}

export default Introduction
