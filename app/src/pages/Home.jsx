import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="  bg-cyan-400 w-full h-screen flex items-center justify-center">
      <div
        className="border-white border-2 rounded-lg
       w-[65%] h-[80%] flex overflow-hidden"
      >
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
