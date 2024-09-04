import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '../trpc'

export const toolsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.tools.findMany()
  }),

  create: publicProcedure
    .input(z.object({ title: z.string().min(1).max(10), description: z.string().min(0), link: z.string().url() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.tools.create({
        data: {
          title: input.title,
          description: input.description,
          link: input.link,
        },
      })
    }),
})
