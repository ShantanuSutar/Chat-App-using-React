import { useState } from "react";
import { GrGallery } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setErr(true);
    }
  };
  return (
    <div className=" bg-cyan-400 w-full h-screen flex items-center justify-center">
      <div className=" bg-slate-50 py-8 px-20 rounded-lg flex flex-col items-center gap-3 ">
        <span className=" text-3xl text-cyan-500 font-bold">Chit Chat</span>
        <span className="text-md text-cyan-500">Login</span>
        <form onSubmit={handleSubmit} className=" flex flex-col gap-3">
          <input
            className=" p-4 w-72 focus:outline-cyan-500 border-none shadow-md"
            type="email"
            placeholder="email"
          />
          <input
            className=" p-4 focus:outline-cyan-500 border-none shadow-md"
            type="password"
            placeholder="password"
          />

          <button className=" bg-cyan-400 text-slate-50 p-3 rounded-md font-semibold text-xl shadow-md hover:bg-cyan-500 border-none cursor-pointer  mt-5">
            Sign In
          </button>
          {err && <span>Something went wrong !</span>}
        </form>
        <p className=" text-cyan-500 text-md mt-2">
          You don't have an account?{" "}
          <Link className=" text-cyan-700 hover:underline" to={"/register"}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
