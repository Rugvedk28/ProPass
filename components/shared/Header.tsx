import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SignedOut, UserButton } from '@clerk/nextjs'
import { SignedIn } from '@clerk/nextjs'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header>
        <div className="wrapper flex items-center justify-between">
            <Link href='/' className='w-36'>
                <img src="/assets/images/propass.png" alt="logo" width={54} height={38}></img>
            </Link>

            <SignedIn>
              <nav className="md:flex-between hidden w-full max-w-xs">
                <NavItems /></nav>  
            </SignedIn>

            <div className="flex w-32 justify-end gap-3">
                <SignedIn>
                  <UserButton afterSignOutUrl='/'></UserButton>
                  <MobileNav/>
                </SignedIn> 
                <SignedOut>
                  <Button asChild className='rounded-full' size='lg'>
                    <Link href='/sign-in'>Login
                    </Link>
                  </Button>
                </SignedOut>
            </div>
        </div>

    </header>
  )
}

export default Header