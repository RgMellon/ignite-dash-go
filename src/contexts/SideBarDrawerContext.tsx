import { useDisclosure } from "@chakra-ui/hooks";
import { UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode, useContext, useEffect } from "react";

import { useRouter } from "next/router";

interface SideBarDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SideBarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SideBarDrawerProvider({
  children,
}: SideBarDrawerProviderProps) {
  const disclousure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclousure.onClose();
  }, [router]);

  return (
    <SideBarDrawerContext.Provider value={disclousure}>
      {children}
    </SideBarDrawerContext.Provider>
  );
}

export const useSisebarDrawer = () => useContext(SideBarDrawerContext);
