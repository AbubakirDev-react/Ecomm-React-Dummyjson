import React, { useEffect, useState } from 'react'
import { ChevronRight,ChevronLeft } from 'lucide-react'

const slides = [
  {
    url:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    url:"https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    url:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]

export default function Slider({isActive}) {
  const [currentIndex,setCurrentIndex] = useState(()=>{
    const saved = localStorage.getItem('currentIndex')
    return saved?JSON.parse(saved):0
  });
  useEffect(()=>{
    localStorage.setItem('currentIndex',JSON.stringify(currentIndex))
  },[currentIndex])
  const prevSlide = () => {
    const isFirstSlide = currentIndex===0
    isFirstSlide?setCurrentIndex(slides.length-1):setCurrentIndex(currentIndex-1)
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex===slides.length - 1
    isLastSlide?setCurrentIndex(0):setCurrentIndex(currentIndex+1)
  }
  if(isActive){ return (
    
      <div className='max-w-350 h-70 w-full m-auto px-4 relative'>
      <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
      {/* left arrow */}

    <div className=' absolute top-[50%] left-5 bg-black/20 text-white rounded-full p-2 cursor-pointer ' onClick={prevSlide}>
      <ChevronLeft />
    </div>

      {/* right arrow */}
    <div className=' absolute top-[50%] right-5 bg-black/20 text-white rounded-full p-2 cursor-pointer ' onClick={nextSlide}>
      <ChevronRight />
    </div>
    </div>
  )}
}
