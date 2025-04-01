"use client";

import { createContext, JSX, useEffect } from "react";
import { TokenBundleDTO } from "../types/index.dto";
import { useRouter } from "next/navigation";
import useStorage from "../hooks/useStorage";
import { AUTH_TOKENS_KEY } from "../common/const";
import moment from "moment";

export const initialAuthorization: TokenBundleDTO = {
  token: "",
  refresh: "",
  expire: new Date(),
};

interface AuthorizationContextProps {
  authorization: TokenBundleDTO;
  setAuthorization: Function;
  isAuthenticated: () => boolean;
}

interface AuthorizationProps {
  children: React.ReactNode;
}

export const AuthorizationProviderContext =
  createContext<AuthorizationContextProps>({
    authorization: initialAuthorization,
    setAuthorization: () => null,
    isAuthenticated: () => false,
  });

/**
 * Authorization provider component.
 *
 * @param props - The props for the AuthorizationProvider component.
 * @returns The JSX element representing the AuthorizationProvider.
 */
export function AuthorizationProvider(props: AuthorizationProps): JSX.Element {
  const router = useRouter();

  // Get initial authorization state from local storage
  const [authorization, setAuthorization] = useStorage<TokenBundleDTO>(
    AUTH_TOKENS_KEY,
    initialAuthorization,
  );

  /**
   * Check if the user is authenticated.
   *
   * @returns A boolean indicating whether the user is authenticated.
   */
  const isAuthenticated = (): boolean => {
    if (typeof window !== "undefined" && window.localStorage) {
      // Get the authorization data from local storage
      let json = window.localStorage.getItem(AUTH_TOKENS_KEY);
      const auth = json ? (JSON.parse(json) as TokenBundleDTO) : null;
      if (auth) {
        // Check if the authorization token is empty or expired
        const expired = moment(auth.expire).isBefore(moment());
        if (auth.token === "" || !expired) {
          return true;
        }
      }
    }
    return false;
  };

  return (
    // Provide the authorization context to the children components
    <AuthorizationProviderContext.Provider
      value={{ authorization, setAuthorization, isAuthenticated }}>
      {props.children}
    </AuthorizationProviderContext.Provider>
  );
}
