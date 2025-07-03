import { createContext, useContext, useState } from 'react';

type ScrollContextType = {
  scrollTop: number;
  setScrollTop: (scrollTop: number) => void;
};

const ScrollContext = createContext<ScrollContextType | null>(null);

const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [scrollTop, setScrollTop] = useState<number>(0);

  return (
    <ScrollContext.Provider value={{ scrollTop, setScrollTop }}>{children}</ScrollContext.Provider>
  );
};

export default ScrollProvider;

export const useScroll = () => {
  const context = useContext(ScrollContext);

  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }

  return context;
};
