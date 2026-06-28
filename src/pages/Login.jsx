import React from 'react'

export default function Login() {
  const  SubmitHandle = (e) =>{
    e.preventDefault()
  }
  return (
    <div className='w-full h-screen p-4 gap-1 flex flex-col items-center justify-center'>
      <h1 className='text-3xl text-center font-bold'>Войти</h1>
      <form onSubmit={SubmitHandle} className='w-3/4 grid grid-cols-1 gap-2 py-3'>
          <div className='w-full flex outline-1 -outline-offset-1 rounded-xl  has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-(--primary) duration-75'>
          <input type="text" placeholder='Почта' className='w-full p-3 outline-0 text-xl' />
        </div>
          <div className='w-full flex outline-1 -outline-offset-1 rounded-xl  has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-(--primary) duration-75'>
          <input type="text" placeholder='Пароль' className='w-full p-3 outline-0 text-xl' />
        </div>
        <button className='bg-(--primary) p-3 rounded-2xl hover:bg-(--primary-hover) font-bold'>Войти</button>
      </form>
    </div>
  )
}
