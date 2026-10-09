"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { subclasses } from "@/data/subclasses";

interface SubclassContextValue {
  activeKey: string;
  setActiveKey: (key: string) => void;
}

const SubclassContext = createContext<SubclassContextValue | undefined>(undefined);

export function SubclassProvider({ children }: { children: ReactNode }) {
  const [activeKey, setActiveKey] = useState(subclasses[0].key);
  return (
    <SubclassContext.Provider value={{ activeKey, setActiveKey }}>
      {children}
    </SubclassContext.Provider>
  );
}

export function useSubclass() {
  const ctx = useContext(SubclassContext);
  if (!ctx) {
    throw new Error("useSubclass must be used within a SubclassProvider");
  }
  return ctx;
}
