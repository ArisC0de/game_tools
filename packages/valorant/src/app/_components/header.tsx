import type { NextPage } from 'next'
import React from 'react'

import Navigation from './navigation'
import { ModeToggle } from './modeToggle'
import Avatar from './avatars'

const Header: NextPage = () => {
  return (
    <div className="flex justify-between items-center w-full h-full md:max-w-2xl p-1.5">
      <Navigation />
      <Avatar />
      <ModeToggle />
    </div>
  )
}

export default Header
