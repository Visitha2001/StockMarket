'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { LogOut } from 'lucide-react'
import NavItems from './NavItems'

const UserDropDowm = () => {
    const router = useRouter()
    const handleSignOut = async() => {
        router.push('/sign-in')
    }
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
    }
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className='flex items-center gap-3 text-gray-400 hover:text-yellow-600' asChild>
                <div> 
                    <Avatar className='h-8 w-8'>
                        <AvatarImage src="https://avatars.githubusercontent.com/u/112849425?v=4" className='rounded-full'/>
                        <AvatarFallback className='!bg-yellow-500 !text-yellow-900 font-bold'>
                            {user.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                    <div className='hidden md:flex flex-col items-start'>
                        <span className='text-base font-medium text-gray-400'>{user.name}</span>
                    </div>
                </div>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="start">
            <DropdownMenuLabel className='flex relative items-center gap-3 py-2'>
                <div className='flex relative items-center gap-3 py-2'>
                    <Avatar className='h-8 w-8'>
                        <AvatarImage src="https://avatars.githubusercontent.com/u/112849425?v=4" className='rounded-full'/>
                        <AvatarFallback className='!bg-yellow-500 !text-yellow-900 font-bold'>
                            {user.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                    <div className='md:flex flex-col items-start'>
                        <span className='text-base font-medium text-gray-400'>{user.name}</span>
                        <span className='text-xs text-gray-400'>{user.email}</span>
                    </div>
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='text-red-500 cursor-pointer' onClick={handleSignOut}>
                <LogOut className='mr-2 h-4 w-4 hidden sm:block'/>
                Sign out
            </DropdownMenuItem>
            <DropdownMenuSeparator className='block sm:hidden bg-gray-600'/>
            <nav className='sm:hidden'>
                <NavItems />
            </nav>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropDowm