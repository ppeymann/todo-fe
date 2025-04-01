"use client";
import ProtectedLayout from "@/components/ProtectedLayout";
import React, { useContext, useState } from "react";
import { initSignUpInput, SignUpInput } from "../../../types/account.dto";
import { apiSignIn, apiSignUp } from "../../../api/account";
import { ApiBaseResponse } from "../../../api";
import { TokenBundleDTO } from "../../../types/index.dto";
import { AuthorizationProviderContext } from "../../../context/AuthorizationProvider";
import Modal from "@/components/modals/Modal";
import { useRouter } from "next/navigation";

const Login = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [input, setInput] = useState<SignUpInput>(initSignUpInput);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // AuthorizationContext
  const authContext = useContext(AuthorizationProviderContext);
  const router = useRouter();

  // this handler is for sign in or sign up
  const LoginHandler = (): void => {
    if (isLogin) {
      apiSignIn({
        user_name: input.user_name,
        password: input.password,
      })
        .then((value: ApiBaseResponse<TokenBundleDTO>) => {
          console.log("value", value.errors);

          if (value.errors === null) {
            authContext.setAuthorization(value.result);
            router.replace("/");

            return;
          }
          setShowModal(true);
          setErrorMessage(value.errors[0]);
        })
        .catch((err) => {
          console.log(err);
        });
      return;
    }
    apiSignUp(input)
      .then((value: ApiBaseResponse<TokenBundleDTO>) => {
        if (value.errors === null) {
          authContext.setAuthorization(value.result);
          router.replace("/");

          return;
        }
        setShowModal(true);
        setErrorMessage(value.errors[0]);
      })
      .catch((err) => {
        console.log(err);
      });
    return;
  };

  return (
    <ProtectedLayout>
      <section className="w-full h-screen bg-blue-500 flex justify-center items-center">
        <div
          className={`w-full h-3/4 flex flex-col items-center bg-slate-200 md:w-2/5 ${
            isLogin ? "md:h-2/3" : "md:h-3/4"
          } rounded-xl py-10 relative`}>
          <h2 className="text-center pt-2 text-2xl font-sans">
            {isLogin ? "Login In To Your Account" : "Sign Up"}
          </h2>
          <div className="w-full px-2 xl:px-20 lg:px-10 mt-10">
            <label htmlFor="username" className="text-lg flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                />
              </svg>
              Username
            </label>
            <input
              className="bg-slate-300 w-full px-2 py-3 rounded-md outline-none border-2 border-slate-400"
              id="username"
              placeholder="@Username"
              onChange={(e) => {
                setInput({
                  ...input,
                  user_name: e.target.value,
                });
              }}
            />
          </div>
          <div className="w-full px-2 xl:px-20 lg:px-10 mt-5">
            <label htmlFor="password" className="text-lg flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              Password
            </label>
            <input
              className="bg-slate-300 w-full px-2 py-3 rounded-md outline-none border-2 border-slate-400"
              id="password"
              placeholder="Enter Your Password"
              type="password"
              onChange={(e) => {
                setInput({
                  ...input,
                  password: e.target.value,
                });
              }}
            />
          </div>
          {!isLogin && (
            <>
              <div className="w-full px-2 xl:px-20 lg:px-10 mt-5">
                <label htmlFor="first" className="text-lg flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  First Name
                </label>
                <input
                  className="bg-slate-300 w-full px-2 py-3 rounded-md outline-none border-2 border-slate-400"
                  id="first"
                  placeholder="John"
                  type="text"
                  onChange={(e) => {
                    setInput({
                      ...input,
                      first_name: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="w-full px-2 xl:px-20 lg:px-10 mt-5">
                <label htmlFor="last" className="text-lg flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  Last Name
                </label>
                <input
                  className="bg-slate-300 w-full px-2 py-3 rounded-md outline-none border-2 border-slate-400"
                  id="last"
                  placeholder="Smith"
                  type="text"
                  onChange={(e) => {
                    setInput({
                      ...input,
                      last_name: e.target.value,
                    });
                  }}
                />
              </div>
            </>
          )}
          <button
            onClick={LoginHandler}
            className="mt-10 w-40 bg-slate-800 py-2 rounded-xl text-white cursor-pointer hover:bg-slate-900 transition-colors">
            {isLogin ? "Sign In" : "Sign Up"}
          </button>

          <div className="w-full pt-10 flex space-x-5 justify-center">
            <button
              className="cursor-pointer"
              onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Create an account" : "Have an account"}
            </button>
            {isLogin && (
              <button className="cursor-pointer">Forget Password?</button>
            )}
          </div>
        </div>
      </section>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title={
          <>
            <h4 className="">Error</h4>
          </>
        }
        body={<>{errorMessage}</>}
      />
    </ProtectedLayout>
  );
};

export default Login;
