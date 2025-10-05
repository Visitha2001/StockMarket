import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavItems from '@/components/NavItems'
import UserDropDowm from '@/components/UserDropDowm'

const Header = ({user, initialStocks}: {user: User, initialStocks: StockWithWatchlistStatus[]}) => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/">
            <Image src="/assets/icons/logo.svg" 
                alt="logo" 
                width={140} 
                height={32} 
                className='h-8 w-auto cursor-pointer'
            />
        </Link>
        <nav className='hidden sm:block'>
          <NavItems initialStocks={initialStocks}/>
        </nav>
        <UserDropDowm user={user} initialStocks={initialStocks}/>
      </div>
    </header>
  )
}

export default Header