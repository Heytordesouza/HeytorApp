import React from 'react';
import { useTheme } from './contexts/ThemeContext';
import lightIcon from "./assets/light-icon.png"
import darkIcon from "./assets/dark-icon.png"

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div onClick={toggleTheme} cursor="pointer">
      {theme === 'light' ?
        (<img src={darkIcon} width='35px' />)
        :
        (<img src={lightIcon} width='35px' />)}
    </div>
  );
};

export default ThemeToggle;