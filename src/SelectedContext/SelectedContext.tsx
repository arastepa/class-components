'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Planets } from '../Types/appTypes';

interface SelectedContextType {
  selected: Planets[];
  setSelected: React.Dispatch<React.SetStateAction<Planets[]>>;
}

const SelectedContext = createContext<SelectedContextType | undefined>(
  undefined,
);

export const useSelected = () => {
  const context = useContext(SelectedContext);
  if (!context) {
    throw new Error('useSelected must be used within a SelectedProvider');
  }
  return context;
};

export const SelectedProvider = ({ children }: { children: ReactNode }) => {
  const [selected, setSelected] = useState<Planets[]>([]);
  return (
    <SelectedContext.Provider value={{ selected, setSelected }}>
      {children}
    </SelectedContext.Provider>
  );
};
