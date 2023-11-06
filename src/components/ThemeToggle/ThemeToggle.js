import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import lightIcon from "../../assets/light-icon.png"
import darkIcon from "../../assets/dark-icon.png"
import { ImgTheme } from './ThemeToggle.styled';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div onClick={toggleTheme}>
      {theme === 'light' ?
        (<ImgTheme src={darkIcon} alt="exitDark" />)
        :
        (<ImgTheme src={lightIcon} alt="exitLight" />)}
    </div>
  );
};

export default ThemeToggle;