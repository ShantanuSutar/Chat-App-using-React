import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`flex gap-5 ${
        message.senderId === currentUser.uid && "owner"
      }`}
    >
      <div className=" flex flex-col text-slate-500 font-[350] mb-5">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt="User Photo"
          className=" bg-cyan-50 h-8 w-8 rounded-full object-cover"
        />
        <span>just now</span>
      </div>
      <div className=" max-w-[80%] flex flex-col gap-3 items-start messageContent">
        <p className=" bg-white py-2 px-4 rounded-tr-xl  rounded-b-xl max-w-max">
          {message.text}
        </p>
        {message.img && (
          <img
            src={message.img}
            alt="User Photo"
            className="  max-h-[320px] max-w-[320px]"
          />
        )}
      </div>
    </div>
  );
};

export default Message;
