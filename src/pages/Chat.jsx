import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import Messages from "./Messages";

const Chat = ({ isAuth }) => {
  const [message, setMessage] = useState("");

  const messageCollectionRef = collection(db, "chat");

  const sendMessage = async () => {
    await addDoc(messageCollectionRef, {
      message,
      author: {
        name: auth?.currentUser?.displayName,
        id: auth?.currentUser?.uid,
        img: auth?.currentUser?.photoURL,
      },
    });
    document.querySelector("input").value = "";
  };

  return (
    <div>
      <div className="w-full m-auto flex items-center justify-center fixed bottom-1">
        <input
          type="text"
          className="border-2 border-gray-400 h-[60px] w-[370px] md:w-[600px]"
          onChange={(e) => setMessage(e.target.value)}
          defaultValue={message}
          placeholder="Your message..."
        />
        <button
          className="bg-blue-500 text-2xl p-4 border-2 border-blue-100 "
          onClick={sendMessage}
        >
          🕊
        </button>
      </div>
    </div>
  );
};

export default Chat;
