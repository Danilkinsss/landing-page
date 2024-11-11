import { socials } from '@/data/data'

function Socials() {
  const listItems = socials.map((social) => (
    <div>
      <a key={social.id} href={social.href}>
        <div className="flex flex-row gap-4">
          <img
            src={social.img}
            alt={`${social.name} icon`}
            className=" h-7 w-7 hover:brightness-[60%] brightness-50"
          />
          <p>{social.name}</p>
        </div>
      </a>
    </div>
  ))

  return (
    <div className="flex flex-row gap-24 justify-self-center font-sans text-gray-400 self-center py-7 underline">
      {listItems}
    </div>
  )
}

export default Socials
