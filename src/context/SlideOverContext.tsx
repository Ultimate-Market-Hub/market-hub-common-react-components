import { createContext, useContext, useState, type ReactNode } from 'react';

type SlideOverContextType = {
  openSlideOver: string | null;
  openSlide: (slideName: string) => void;
  closeSlide: () => void;
  isOpen: boolean;
};

const SlideOverContext = createContext<SlideOverContextType | undefined>(
  undefined
);

export const useSlideOver = (): SlideOverContextType => {
  const context = useContext(SlideOverContext);
  if (!context) {
    throw new Error('useSlideOver must be used within a SlideOverProvider');
  }
  return context;
};

type SlideOverProviderProps = {
  children: ReactNode;
};

export const SlideOverProvider = ({ children }: SlideOverProviderProps) => {
  const [openSlideOver, setOpenSlideOver] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openSlide = (slideName: string) => {
    setOpenSlideOver(slideName);
    setIsOpen(true);
  };

  const closeSlide = () => {
    setOpenSlideOver(null);
    setIsOpen(false);
  };

  const contextValue: SlideOverContextType = {
    openSlideOver,
    openSlide,
    closeSlide,
    isOpen,
  };

  return (
    <SlideOverContext.Provider value={contextValue}>
      {children}
    </SlideOverContext.Provider>
  );
};
