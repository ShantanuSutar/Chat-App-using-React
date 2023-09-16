import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  console.log(message);

  return (
    <div className=" flex gap-5 owner">
      {/* <div className=" flex flex-col text-slate-500 font-[350] mb-5">
        <img
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          alt="User Photo"
          className=" bg-cyan-50 h-8 w-8 rounded-full object-cover"
        />
        <span>just now</span>
      </div>
      <div className=" max-w-[80%] flex flex-col gap-3 items-start messageContent">
        <p className=" bg-white py-2 px-4 rounded-tr-xl  rounded-b-xl max-w-max">
          Hello
        </p>
        <img
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          alt="User Photo"
          className=" "
        />
      </div> */}
    </div>
  );
};

export default Message;
