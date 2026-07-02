import { createContext, useContext, useEffect, useState } from "react";



const ThemeContext = createContext(null);

const ThemeProvider = ({children}) => {
  const [theme,setTheme] = useState(()=>{
    return localStorage.getItem('app-theme') || '[]'
  });

  useEffect(()=>{
    localStorage.setItem('app-theme',theme)
    document.documentElement.setAttribute('data-theme',theme)
  },[theme])
  const toggleTheme = () => {
    setTheme((prev)=>(prev==='light'?'dark':'light'))
    console.log(theme)  
  }
  return (
    <ThemeContext.Provider value={{
      theme,toggleTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  return context
}

export default ThemeProvider