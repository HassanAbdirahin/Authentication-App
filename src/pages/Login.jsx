import React, { useState } from "react";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  let navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/chat");
    } catch (error) {
      console.log("Error: " + error.message);
    }
  };

  console.log(auth?.currentUser?.displayName);

  return (
    <div className="flex flex-col justify-center items-center gap-5 my-28">
      <p className="text-xl">Sign in With Google</p>

      <button
        className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg  hover:border-slate-400 text-black hover:text-gray-900  hover:shadow transition duration-150"
        onClick={signInWithGoogle}
      >
        <img
          className="w-6 h-6"
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          loading="lazy"
          alt="google logo"
        />
        <span>Login with Google</span>
      </button>
    </div>
  );
};

export default Login;
