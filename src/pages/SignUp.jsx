import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth';
import { data } from 'react-router-dom';

export default function SignUp() {
  const [fName,setFName]=useState('');
  const [lName,setLName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const {signup,err}=useAuth();
  const  SubmitHandle = (e) =>{
    e.preventDefault()
    const data={
      first_name:fName,
      last_name:lName,
      email:email,
      password:password
    }
    signup(data)
  }
  return (
    <div className='w-full h-screen p-4 gap-3 flex flex-col items-center justify-center'>
      <h1 className='text-3xl text-center font-bold'>Создать Учетный Запись</h1>
      <form onSubmit={SubmitHandle} className='w-3/4 grid grid-cols-1 gap-3 py-3'>
          <div className='w-full flex outline-1 -outline-offset-1 rounded-xl  has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-(--primary) duration-75'>
          <input required onChange={(e)=>setFName(e.target.value)} type="text" placeholder='Имя' className='w-full p-3 outline-0 text-xl' />
        </div>
          <div className='w-full flex outline-1 -outline-offset-1 rounded-xl  has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-(--primary) duration-75'>
          <input required onChange={(e)=>setLName(e.target.value)} type="text" placeholder='Фамилия' className='w-full p-3 outline-0 text-xl' />
        </div>
          <div className='w-full flex outline-1 -outline-offset-1 rounded-xl  has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-(--primary) duration-75'>
          <input required onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Почта' className='w-full p-3 outline-0 text-xl' />
        </div>
          <div className='w-full flex outline-1 -outline-offset-1 rounded-xl  has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-(--primary) duration-75'>
          <input required onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='*******' className='w-full p-3 outline-0 text-xl' />
        </div>
        <p className='text-(--danger)'>{err}</p>
        <button className='bg-(--primary) p-3 rounded-2xl hover:bg-(--primary-hover) font-bold mt-3' type='submit'>Создать и Войти</button>
      </form>
    </div>
  )
}
