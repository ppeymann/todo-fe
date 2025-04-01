"use client";
import { useContext, useEffect } from "react";

import dynamic from "next/dynamic";
import { AuthorizationProviderContext } from "../../context/AuthorizationProvider";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

function ProtectedLayout(props: Props) {
  const path: string = usePathname();
  const router = useRouter();
  const authContext = useContext(AuthorizationProviderContext);

  useEffect(() => {
    if (authContext.isAuthenticated() && ["/login"].includes(path)) {
      router.push("/");
    }

    if (!authContext.isAuthenticated() && ["/login"].includes(path) === false) {
      router.push("/login");
    }
  }, []);

  return <>{props.children}</>;
}

export default dynamic(() => Promise.resolve(ProtectedLayout), { ssr: false });
