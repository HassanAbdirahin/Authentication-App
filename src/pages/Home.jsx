import React from "react";

function Home() {
  return (
    <div className="bg-blue-500 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to My Chat App</h2>
        <p className="text-lg">Don't break my thing.</p>
        <button
          className="bg-white text-blue-500 px-4 py-2 mt-8 rounded-full"
          onClick={() => (window.location.pathname = "/login")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
