"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import SocialSignIn from "../SocialSignIn";
import Logo from "@/components/Layout/Header/Logo"
import Loader from "@/components/Common/Loader";

const Signin = () => {
  const router = useRouter();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    checkboxToggle: false,
  });
  const [loading, setLoading] = useState(false);

  const loginUser = (e: any) => {
    e.preventDefault();

    setLoading(true);
    signIn("credentials", { ...loginData, redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error(callback?.error);
          console.log(callback?.error);
          setLoading(false);
          return;
        }

        if (callback?.ok && !callback?.error) {
          toast.success("Login successful");
          setLoading(false);
          router.push("/");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };

  return (
    <>
      <div className="mb-10 text-center mx-auto inline-block max-w-[160px]">
        <Logo />
      </div>

      <SocialSignIn />

      <span className="z-1 relative my-8 block text-center">
        <span className="-z-1 absolute left-0 top-1/2 block h-px w-full bg-border dark:bg-dark_border"></span>
        <span className="text-body-secondary relative z-10 inline-block bg-white px-3 text-base dark:bg-darklight">
          OR
        </span>
      </span>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-[22px]">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            className="w-full rounded-md border border-border dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            className="w-full rounded-md border border-border dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="mb-9">
          <button
            onClick={loginUser}
            type="submit"
            className="flex w-full cursor-pointer items-center justify-center rounded-md border border-primary bg-primary px-5 py-3 text-base text-white transition duration-300 ease-in-out hover:bg-blue-600"
          >
            Sign In {loading && <Loader />}
          </button>
        </div>
      </form>

      <Link
        href="/forgot-password"
        className="mb-2 inline-block text-base text-dark hover:text-primary dark:text-white dark:hover:text-primary"
      >
        Forget Password?
      </Link>
      <p className="text-body-secondary text-base">
        Not a member yet?{" "}
        <Link href="/" className="text-primary hover:underline">
          Sign Up
        </Link>
      </p>
    </>
  );
};

export default Signin;