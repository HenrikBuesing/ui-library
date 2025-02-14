import React, {createContext, type ReactNode, useContext, useEffect, useState} from 'react';

type Theme = 'dark' | 'light'
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
}

const storageKey = 'uil-theme';
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  return context || {theme: 'light', toggleTheme: () => {}};
}

export function ThemeProvider(children: ReactNode)  {
  const [theme, setTheme] = useState<Theme>('light');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const savedTheme = localStorage.getItem(storageKey) as Theme;
    if (savedTheme) setTheme(savedTheme);
  }, []);

  if (!isMounted) return <>{children}</>;
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem(storageKey, newTheme);
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}