import React from 'react'
import Header from '@/components/Header'
import { auth } from '@/lib/betterauth/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

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
    return (
      <main className='min-h-screen text-gray-400'>
        <Header user={user} />
        <div className='container'>
          {children}
      </div>
    </main>
  )
}

export default Layout