import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { songs } from '../data/data.ts'

function SongsCarousel() {
  const listItems = songs.map((song) => (
    <CarouselItem
      key={song.id}
      className=" aspect-video basis-1/3 justify-center p-4"
    >
      <a href={song.href}>
        <img
          src={song.image}
          alt={`${song.name} song preview image`}
          className="transition ease-in-out delay-150 hover:scale-110 rounded-3xl object-cover max-h-[70%]  h-64 w-96 min-h-1/2 min-w-1/2 justify-self-center"
        />
      </a>
      <h3 className="font-mono pt-5 text-center text-zinc-400">{song.name}</h3>
    </CarouselItem>
  ))

  return (
    <div className="flex flex-col align-middle justify-evenly gap-10 ">
      <h2 className="text-3xl text-white font-bold px-24">
        My favourite songs
      </h2>
      <Carousel className=" px-8 bg-black w-[90%] self-center">
        <CarouselContent className=" align-middle justify-evenly flex mx-4">
          {listItems}
        </CarouselContent>
        <CarouselPrevious className="bg-gray-400 border-gray-400 " />
        <CarouselNext className="bg-gray-400 border-gray-400" />
      </Carousel>
    </div>
  )
}

export default SongsCarousel
