'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type TTheme = 'dark' | 'light';

interface IThemeContext {
  theme: TTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext>({
  theme: 'dark',
  toggleTheme: () => {},
});

export function useTheme(): IThemeContext {
  return useContext(ThemeContext);
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<TTheme>('dark');

  useEffect(() => {
    const stored = localStorage.getItem('nimblesl-theme') as TTheme | null;
    const preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    const initial = stored ?? preferred;
    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);
  }, []);

  const toggleTheme = () => {
    const next: TTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('nimblesl-theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
