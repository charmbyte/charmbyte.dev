export type Game = {
  id: string
  name: string
  href: string
  logo: string
  description: string
}

export const games: Game[] = [
  {
    id: 'pwtycoon',
    name: 'Pro Wrestling Tycoon',
    href: 'http://www.pwtycoon.com',
    logo: `${import.meta.env.BASE_URL}brand/pwtycoon-logo-outline.svg`,
    description:
      'Build your wrestling empire—book matches, grow your roster, and chase the championship.',
  },
]
