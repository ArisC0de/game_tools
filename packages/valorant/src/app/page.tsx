import { HydrateClient, api } from '@tools/valorant/trpc/server'
import { Button } from '@shadcn/ui/button'

export default async function Home() {
  void api.post.getLatest.prefetch()

  return (
    <HydrateClient>
      <main>
        <Button>test</Button>
      </main>
    </HydrateClient>
  )
}
