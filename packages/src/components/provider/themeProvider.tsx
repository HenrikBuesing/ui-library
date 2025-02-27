import React, {createContext, type ReactNode, useContext, useEffect, useState} from 'react';

type Theme = 'dark' | 'light'
type ThemeContextType = {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
}

const storageKey = 'uil-theme';
const ThemeContext = createContext<ThemeContextType>({theme: 'light', setTheme: () => {}});

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  return context ?? {theme: 'light', setTheme: () => {}};
}

export function ThemeProvider(props: Props)  {
  const [theme, setNewTheme] = useState<Theme>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem(storageKey) as Theme;
    if (savedTheme) setNewTheme(savedTheme);
  }, []);

  function setTheme(newTheme: Theme) {
    setNewTheme(newTheme);
    localStorage.setItem(storageKey, newTheme);
  }

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
}

type Props = {
  children: ReactNode;
}