import React, { useEffect, useState } from "react";
import { getDocs, collection, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";
import { auth } from "../config/firebase";
import Chat from "./Chat";

const Messages = () => {
  const [messageList, setMessageList] = useState([]);
  const [updateCounter, setUpdateCounter] = useState(0);

  const messageCollectionRef = collection(db, "chat");

  useEffect(() => {
    const getMessages = async () => {
      const data = await getDocs(messageCollectionRef);
      setMessageList(data.docs.map((doc) => doc.data()));
    };

    const unsubscribe = onSnapshot(messageCollectionRef, () => {
      // Increment the counter whenever a new message is added
      setUpdateCounter((prevCounter) => prevCounter + 1);
    });

    getMessages();

    return () => {
      // Cleanup the subscription when the component unmounts
      unsubscribe();
    };
  }, [updateCounter, messageCollectionRef]);

  return (
    <div>
      <div className="flex flex-col-reverse m-auto mb-52">
        {messageList.map((userMessage, i) => {
          const { message, author } = userMessage;
          const isCurrentUser = auth?.currentUser?.uid === author?.id;

          return (
            <div className="flex items-center gap-4 m-4">
              <div
                key={i}
                className={
                  isCurrentUser
                    ? "flex items-center justify-between bg-blue-500 text-white h-8 flex items-center w-72 ms-96 px-2 py-4 my-5 rounded-2xl"
                    : "flex items-center justify-between bg-gray-500 text-white h-8 flex items-center w-72 px-2 py-4 my-5 rounded-2xl"
                }
              >
                <p>{message}</p>
              </div>
              <img
                className="w-14 h-14 rounded-full"
                src={author.img}
                alt="user-img"
              />
            </div>
          );
        })}
      </div>
      <Chat />
    </div>
  );
};

export default Messages;
