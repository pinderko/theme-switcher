import * as React from 'react'
import { Theme, useTheme } from '../../context/ThemeContext'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <button onClick={() => setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark)}>
        switch to {theme === Theme.Dark ? Theme.Light : Theme.Dark} theme
      </button>
    </div>
  )
}

export default ThemeSwitcher
