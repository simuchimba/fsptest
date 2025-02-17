"use client";

import NavBar from "@/components/NavBar";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import React, { useEffect, useState, useCallback } from "react";

export default function ProtectedContainer({ children }) {
  const pathname = usePathname();

  const getActive = useCallback(() => {
    switch (pathname) {
      case "/dashboard":
        return 0;
      case "/tracker":
        return 1;
      case "/journal":
        return 2;
      case "/social":
        return 3;
      default:
        return -1;
    }
  }, [pathname]);

  const [active, setActive] = useState(getActive());

  useEffect(() => {
    setActive(getActive());
  }, [getActive]);

  return (
    <SessionProvider>
      <div className="flex flex-col w-full relative p-2 pb-20">
        {children} <NavBar active={active} setActive={setActive} />
      </div>
    </SessionProvider>
  );
}
