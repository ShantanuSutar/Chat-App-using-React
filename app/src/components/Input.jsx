import { GrGallery } from "react-icons/gr";
import { MdOutlineAttachFile } from "react-icons/md";

const Input = () => {
  return (
    <div className=" h-14 p-3 bg-slate-50 flex items-center justify-between">
      <input
        type="text"
        placeholder="Type something ..."
        className=" outline-none w-full border-none text-lg"
      />
      <div className=" flex items-center gap-3 ">
        <MdOutlineAttachFile className=" w-5 h-5 cursor-pointer" />
        <input style={{ display: "none" }} type="file" id="file" />
        <label htmlFor="file" className="">
          <GrGallery className=" cursor-pointer" />
        </label>
        <button className=" border-none py-[7px] px-3 text-white bg-cyan-500 rounded-md hover:bg-cyan-600 ">
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
