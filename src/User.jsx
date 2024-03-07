import React, { useState } from "react";
import { auth } from "./config/firebase";
import { signOut } from "firebase/auth";

const User = () => {
  const [userEmail, setUserEmail] = useState("");
  const logout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl m-5">
          Welcome User: {auth?.currentUser.email}
        </h1>
        <button className="text-red-600 underline" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default User;
