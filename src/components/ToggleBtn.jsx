import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ToggleBtn = ({theme , setTheme}) => {

    useEffect(()=>{
        const DarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches;
        setTheme(theme || (DarkMode ? 'dark' : 'light'))
    },[])

    useEffect(()=>{
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    },[theme])
  return (
    <>
      <button>
        {theme === 'dark' ? (
            <img src={assets.sun_icon} onClick={()=>setTheme('light')} alt="" 
            className='size-8.5 p-1.5 border border-gray-500 rounded-full cursor-pointer'/>
        ) : (
            <img src={assets.moon_icon} onClick={()=>setTheme('dark')} alt="" 
            className='size-8.5 p-1.5 border border-gray-500 rounded-full cursor-pointer'/>
        )}
      </button>
    </>
  )
}

export default ToggleBtn
