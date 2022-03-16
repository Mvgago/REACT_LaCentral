import React, { useState, useContext, useEffect } from 'react'


export const ThemeContext = React.createContext()
export const ThemeUpdateContext = React.createContext()

export const useDarkTheme = () => {
    return useContext(ThemeContext);
}

export const useUpdateDarkTheme = () => {
    return useContext(ThemeUpdateContext);
}


export function ThemeProvider({ children }) {

  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
      document.body.style.backgroundColor = darkTheme ? '#141419' : 'white'
  }, [darkTheme])

  const toggleTheme = () => {
      setDarkTheme((prevDarkTheme) => !prevDarkTheme)
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
       <ThemeUpdateContext.Provider value={toggleTheme}>
            { children }
       </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}


