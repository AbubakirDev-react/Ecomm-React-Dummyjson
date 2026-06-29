import React from 'react'
import {useAuth} from '../hooks/useAuth'
import { Link } from 'react-router-dom';
import { Mail, UserCircle2 } from 'lucide-react';
import { Button } from '@headlessui/react';


export default function UserProfile() {
  const {currentUser,signout} = useAuth();
  if(!currentUser){
    return(
      <div className='w-full h-screen gap-2 flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold'>Вы еще не вошли в систему.</h1>
        <div className='flex gap-2'>
          <Link to='/signin' className='px-3 py-1.5 text-lg rounded-2xl bg-(--primary) hover:bg-(--primary-hover) duration-300'>Войти</Link>
          <Link to='/signup' className='px-3 py-1.5 text-lg rounded-2xl bg-(transparent) text-(--text-secondary) hover:bg-(--primary) hover:text-(--text) duration-300'>Зарегистрироваться</Link>
        </div>
      </div>
    )
  }
  return (
    <div className='w-full h-screen p-4 flex flex-col gap-3'>
      <Link className='w-full flex gap-2 items-center'>
        <div className='p-3 border rounded-full'>
          <UserCircle2 />
        </div>
        <div className='flex flex-col'>
          <h3>{currentUser.first_name}</h3>
          <p className='text-sm'>Данные и настройки</p>
        </div>
      </Link>
      <button onClick={signout} className='py-1.5 px-3 text-lg font-bold cursor-pointer bg-(--danger) duration-300 rounded-2xl hover:bg-(--danger)/80'>Выйти</button>
    </div>
  )
}
