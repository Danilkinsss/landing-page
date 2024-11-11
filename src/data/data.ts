import IMAGES from '../images/Images.tsx'

export const achievements = [
  { id: 0, text: `💿 Billions of Spotify streams` },
  { id: 1, text: `🏆 Grammy winners` },
  { id: 2, text: `📻 Longest-charting album of the 2010s` },
]

export const songs = [
  {
    id: 0,
    name: 'Heavydirtysoul',
    href: 'https://www.youtube.com/watch?v=r_9Kf0D5BTs',
    image: IMAGES.song1,
  },
  {
    id: 1,
    name: 'Shy Away',
    href: 'https://www.youtube.com/watch?v=3sO-Y1Zbft4',
    image: IMAGES.song2,
  },
  {
    id: 2,
    name: 'Doubt',
    href: 'https://www.youtube.com/watch?v=MEiVnNNpJLA',
    image: IMAGES.song3,
  },
  {
    id: 3,
    name: 'The Hype',
    href: 'https://www.youtube.com/watch?v=Io2hbcrAYBw',
    image: IMAGES.song4,
  },
]

export const members = [
  {
    id: 0,
    name: 'Tyler Joseph',
    description: `is the creative mind behind Twenty One Pilots, leading with vocals,
          lyrics, and an array of instruments. He's known for pouring raw,
          introspective energy into every performance.`,
    href: 'https://en.wikipedia.org/wiki/Tyler_Joseph',
    image: IMAGES.tyler,
  },
  {
    id: 1,
    name: 'Josh Dun',
    description: `is the band’s dynamic drummer, always bringing explosive energy on
    stage. He's the guy often found flipping over his drum kit mid-song or
    jumping into the crowd.`,
    href: 'https://en.wikipedia.org/wiki/Tyler_Joseph',
    image: IMAGES.josh,
  },
]

export const questions = [
  {
    id: 0,
    question: `When can I go to their concert?`,
    answer: `They are currently on "The Clancy" world tour, so starting from November 15 and till May 14 you can see their performance.`,
  },
  {
    id: 1,
    question: `Where can I meet them?`,
    answer: `All across the world: Oceania, South America and Europe. Their biggest concerts close to us will be in London, Berlin, Paris and Barcelona.`,
  },
  {
    id: 2,
    question: `Any special guests on their concert in Barcelona?`,
    answer: `1 particularly special guy: me :)`,
  },
]
