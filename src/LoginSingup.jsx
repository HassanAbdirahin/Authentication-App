import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

const LoginSingup = () => {
  const [toggleLogin, setToggleLogin] = useState(true);
  return (
    <div>
      {toggleLogin ? <Login /> : <Signup />}
      <p
        className="text-blue-400 mt-[-40px] hover:cursor-pointer"
        onClick={() => setToggleLogin(!toggleLogin)}
      >
        {toggleLogin ? "create an account" : "i already have an account"}
      </p>
    </div>
  );
};

export default LoginSingup;
