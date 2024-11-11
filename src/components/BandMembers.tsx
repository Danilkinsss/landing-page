import { members } from '@/data/data'

function BandMembers() {
  const listItems = members.map((member) => (
    <div
      key={member.id}
      className="items-center flex flex-row gap-32 justify-center place-items-center"
    >
      {member.id === 0 ? (
        <h3 className="text-lg font-serif  text-white w-[20%] leading-relaxed">
          <p className="text-2xl text-amber-200 font-bold">{member.name}</p>
          {member.description}
        </h3>
      ) : (
        ''
      )}
      <a href={member.href} className="p-0 h-1/4 w-1/4 min-h-36 min-w-80">
        <img
          src={member.image}
          alt={`${member.name} picture`}
          className="rounded-full"
        />
      </a>
      {member.id !== 0 ? (
        <h3 className="text-lg font-serif  text-white w-[20%] leading-relaxed">
          <p className="text-2xl text-cyan-200 font-bold">{member.name}</p>
          {member.description}
        </h3>
      ) : (
        ''
      )}
    </div>
  ))

  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold px-24">Band members</h2>
      {listItems}
    </div>
  )
}

export default BandMembers
