import React, { useState } from "react";
import { auth } from "./config/firebase";
import { signOut } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Messages from "./pages/Messages";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  const logout = async () => {
    await signOut(auth);
    try {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Router>
      <nav className="flex items-center justify-center gap-10 py-5 text-white bg-black">
        <Link to="/">Home</Link>
        {isAuth && <Link to="/chat">Chat</Link>}
        {!isAuth ? (
          <Link to="/login">Login</Link>
        ) : (
          <button onClick={logout} className="text-red-400 underline font-bold">
            Logout
          </button>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Messages setIsAuth={setIsAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
};

export default App;
