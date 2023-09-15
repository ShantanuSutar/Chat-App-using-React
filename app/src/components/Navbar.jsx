import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="  flex items-center bg-cyan-700 h-16 p-[10px] justify-between text-cyan-50">
      <span className=" font-semibold text-lg">Chit Chat</span>
      <div className="flex items-center gap-2">
        <img
          src={currentUser.photoURL}
          alt={currentUser.displayName + "photo"}
          className=" bg-cyan-50 h-6 w-6 rounded-full object-cover"
        />
        <span>{currentUser.displayName}</span>
        <button
          className=" bg-cyan-600 text-cyan-50 text-sm border-none p-1 rounded-sm cursor-pointer hover:bg-cyan-500"
          onClick={() => signOut(auth)}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
