import { HydrateClient, api } from '@tools/valorant/trpc/server'

import Header from './_components/header'

export default async function Home() {
  void api.post.getLatest.prefetch()

  return (
    <HydrateClient>
      <header className="flex justify-center w-full h-12 border-b border-red-400">
        <Header />
      </header>
      <main>
        333
      </main>
    </HydrateClient>
  )
}
