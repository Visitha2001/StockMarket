import React from 'react'
import Header from '@/components/Header'
import { auth } from '@/lib/betterauth/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { searchStocks } from '@/lib/actions/finnhub.actions'

const Layout = async ({children}: {children: React.ReactNode}) => {
    const session = await auth?.api.getSession({
      headers: await headers()
    });
    if (!session?.user) redirect('/sign-in')
    const user = {
      id: session?.user.id,
      email: session?.user.email,
      name: session?.user.name,
    }
    const initialStocks = await searchStocks();
    return (
      <main className='min-h-screen text-gray-400'>
        <Header user={user} initialStocks={initialStocks} />
        <div className='container'>
          {children}
        </div>
      </main>
    )
}

export default Layout