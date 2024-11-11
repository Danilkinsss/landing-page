function Achievements() {
  const achievements = [
    '💿 Billions of Spotify streams',
    '🏆 Grammy winners',
    '📻 Longest-charting album of the 2010s',
  ]
  const styling =
    'italic w-fit p-7 basis-auto rounded bg-zinc-950 content-center'

  return (
    <div className="underline underline-offset-8 min-w-fit flex text-lg text-zinc-100 gap-8 ">
      <div className={styling}>{achievements[0]}</div>
      <div className={styling}>{achievements[1]}</div>
      <div className={styling}>{achievements[2]}</div>
    </div>
  )
}

export default Achievements
