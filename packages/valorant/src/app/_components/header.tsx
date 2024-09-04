import type { NextPage } from 'next'
import React from 'react'

import Avatar from './Avatar'
import Navigation from './navigation'

const Header: NextPage = () => {
  return (
    <div className="flex justify-between items-center w-full h-full md:max-w-2xl p-1.5">
      <Navigation />
      <Avatar />
    </div>
  )
}

export default Header
