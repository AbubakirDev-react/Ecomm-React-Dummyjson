import { Search } from 'lucide-react'
import React from 'react'
// import DropdownTheme from './ui/DropdownTheme'

export default function MobileHeaderMenu() {
  return (
    <div className='flex flex-col gap-2 items-center'>
      {/* <div>
        <DropdownTheme />
      </div> */}
      <form action="" className='p-4 w-full'>
        <div className='w-full flex outline-1 -outline-offset-1 rounded-xl  has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-(--primary) duration-75'>
          <div className='p-3 text-secondary flex items-center'><Search/></div>
          <input type="text" placeholder='Поиск' className='w-full py-3 outline-0 text-xl' />
        </div>
      </form>
    </div>
  )
}
