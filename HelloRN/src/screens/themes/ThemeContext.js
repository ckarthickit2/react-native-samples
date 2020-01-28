import React from 'react';

export const Themes = {
  light: {
    foreground: '#000000',
    background: 'lightblue',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
  salmon: {
    foreground: '#eeeeee',
    background: '#e9967a',
  },
};
export const ThemeContext = React.createContext(
  Themes.dark, // default value
);
