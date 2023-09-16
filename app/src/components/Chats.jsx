import { useContext, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div>
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className=" p-2 flex items-center gap-2 text-white cursor-pointer hover:bg-cyan-700"
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img
              src={chat[1].userInfo.photoURL}
              alt={chat[1].userInfo.displayName}
              className=" bg-cyan-50 h-12 w-12 rounded-full object-cover"
            />
            <div>
              <span className=" text-lg font-semibold">
                {chat[1].userInfo.displayName}
              </span>
              <p className="  text-sm text-slate-200">
                {chat[1].lastMessage?.text}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;
