import React, { useState } from 'react'
import { Theme, ThemeContext } from '../context/ThemeContext'

interface Props {
  children?: any
}

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(Theme.Light)
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <>{children}</>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
