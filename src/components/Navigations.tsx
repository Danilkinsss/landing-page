import IMAGES from '@/images/Images'

function Navigations() {
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
    <div
      id="navbar"
      className="font-typeface w-[92.7%] bg-red-700 flex justify-between fixed  text-7xl font-extralight tracking-wide "
    >
      <a href="">
        <div id="name" className="text-6xl flex gap-4 p-3 px-7 items-center">
          <img src={IMAGES.logo} alt="logo" className="object-cover h-9 w-9" />
          <div id="name">Twenty One Pilots</div>
        </div>
      </a>

      <div
        id="navigations & website"
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
  )
}

export default Navigations
