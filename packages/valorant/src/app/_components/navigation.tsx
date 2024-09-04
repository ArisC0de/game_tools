'use client'

import { Menubar, MenubarMenu, MenubarTrigger } from '@tools/valorant/components/ui/menubar'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@tools/valorant/components/ui/tooltip'
import { api } from '@tools/valorant/trpc/react'
import type { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const Navigation: NextPage = () => {
  const { data: tools, isLoading } = api.tools.getAll.useQuery()

  if (isLoading)
    return <div>Loading....</div>
  if (!tools)
    return <div>No tools found</div>

  return (
    <Menubar>
      {
        tools.map((tool) => {
          return (
            <MenubarMenu key={tool.id}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Link href={tool.link}>
                      <MenubarTrigger>{tool.title}</MenubarTrigger>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    {tool.description}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

            </MenubarMenu>
          )
        })
      }

    </Menubar>
  )
}

export default Navigation
