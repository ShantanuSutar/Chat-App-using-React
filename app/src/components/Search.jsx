import { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = async () => {
    const usersRef = collection(db, "users");

    const q = query(usersRef, where("displayName", "==", username));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  return (
    <div className="border-b">
      <div className=" p-2 ">
        <input
          type="text"
          className=" bg-transparent border-none text-white placeholder:text-slate-200 outline-none"
          placeholder="Search..."
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      {err && <span className=" text-white p-2">User not found!</span>}
      {user && (
        <div className=" p-2 flex items-center gap-2 text-white cursor-pointer hover:bg-cyan-700">
          <img
            src={user.photoURL}
            alt={user.displayName}
            className=" bg-cyan-50 h-12 w-12 rounded-full object-cover"
          />
          <div>
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
