import { GrGallery } from "react-icons/gr";
const Register = () => {
  return (
    <div className=" bg-cyan-400 w-full h-screen flex items-center justify-center">
      <div className=" bg-slate-50 py-8 px-20 rounded-lg flex flex-col items-center gap-3 ">
        <span className=" text-3xl text-cyan-500 font-bold">Chit Chat</span>
        <span className="text-md text-cyan-500">Register</span>
        <form action="" className=" flex flex-col gap-3">
          <input
            className="p-4 w-72 border-none shadow-md  focus:outline-cyan-500"
            type="text"
            placeholder="display name"
          />
          <input
            className=" p-4 focus:outline-cyan-500 border-none shadow-md"
            type="email"
            placeholder="email"
          />
          <input
            className=" p-4 focus:outline-cyan-500 border-none shadow-md"
            type="password"
            placeholder="password"
          />
          <input
            style={{ display: "none" }}
            className=" p-4 focus:outline-cyan-500 border-none shadow-md"
            type="file"
            id="file"
          />
          <label
            htmlFor="file"
            className=" flex gap-4 text-slate-400 focus:outline-cyan-500 my-1 mx-3 hover:cursor-pointer hover:text-slate-600"
          >
            <GrGallery className=" text-2xl text-cyan-500" />
            <span className=" ">Add an avatar</span>
          </label>
          <button className=" bg-cyan-400 text-slate-50 p-3 rounded-md font-semibold text-xl shadow-md hover:bg-cyan-500 border-none cursor-pointer ">
            Sign Up
          </button>
        </form>
        <p className=" text-cyan-500 text-md mt-2">
          You do have an account? Login
        </p>
      </div>
    </div>
  );
};

export default Register;
