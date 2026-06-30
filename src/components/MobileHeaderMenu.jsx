import { Search } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSearch } from '../hooks/useSearch';
// import DropdownTheme from './ui/DropdownTheme'

export default function MobileHeaderMenu({setIsActive}) {
  const [searchQuery,setSearchquery] = useState('');
  const navigate = useNavigate();
  const {setQuery} = useSearch();
  const onSearch=(e)=>{
    e.preventDefault()
    setIsActive(false)
    setQuery(searchQuery)
  }
  return (
    <div className='flex flex-col gap-2 items-center'>
      <form className='p-4 w-full' onSubmit={onSearch}>
        <div className='w-full flex outline-1 -outline-offset-1 rounded-xl  has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-(--primary) duration-75'>
          <div className='p-3 text-secondary flex items-center'><Search/></div>
          <input onChange={(e)=>setSearchquery(e.target.value)} type="text" placeholder='Поиск' className='w-full py-3 outline-0 text-xl' />
          <button className='px-3 py-1.5 rounded-xl duration-300 text-(--surface) bg-(--primary) hover:bg-(--primary-hover)' type='submit'>Искать</button>
        </div>
      </form>
    </div>
  )
}
