import React, { useEffect, useState } from "react";
import LoginSingup from "./LoginSingup";
import User from "./User";
import { auth } from "./config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>{!auth?.currentUser?.email ? <LoginSingup /> : <User />}</div>
          }
        />
        <Route
          path="*"
          element={<h1 className="font-bold text-3xl m-10">404 Not Found!</h1>}
        />
      </Routes>
    </Router>
  );
};

export default App;
