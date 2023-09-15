import { BsFillCameraVideoFill, BsPersonFillAdd } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import { useContext } from "react";
const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className=" flex-[2]">
      <div className=" h-16 bg-cyan-500 flex items-center justify-between p-3 text-slate-200">
        <span className=" text-lg">{data.user?.displayName}</span>
        <div className=" flex gap-3">
          <BsFillCameraVideoFill className=" h-6 w-5 cursor-pointer" />
          <BsPersonFillAdd className=" h-6 w-5 cursor-pointer" />
          <FiMoreHorizontal className=" h-6 w-5 cursor-pointer" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
