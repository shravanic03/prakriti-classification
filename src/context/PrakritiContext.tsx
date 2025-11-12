import React, { createContext, useContext, useState, ReactNode } from 'react';
import { PrakritiResult } from '@/types/prakriti';

interface PrakritiContextType {
  result: PrakritiResult | null;
  setResult: (result: PrakritiResult | null) => void;
}

const PrakritiContext = createContext<PrakritiContextType | undefined>(undefined);

export const PrakritiProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [result, setResult] = useState<PrakritiResult | null>(null);

  return (
    <PrakritiContext.Provider value={{ result, setResult }}>
      {children}
    </PrakritiContext.Provider>
  );
};

export const usePrakriti = () => {
  const context = useContext(PrakritiContext);
  if (context === undefined) {
    throw new Error('usePrakriti must be used within a PrakritiProvider');
  }
  return context;
};
