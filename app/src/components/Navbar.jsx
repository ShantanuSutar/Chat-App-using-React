const Navbar = () => {
  return (
    <div className="  flex items-center bg-cyan-700 h-16 p-[10px] justify-between text-cyan-50">
      <span className=" font-semibold text-lg">Chit Chat</span>
      <div className="flex items-center gap-2">
        <img
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          alt="User Photo"
          className=" bg-cyan-50 h-6 w-6 rounded-full object-cover"
        />
        <span>Sam</span>
        <button className=" bg-cyan-600 text-cyan-50 text-sm border-none p-1 rounded-sm cursor-pointer hover:bg-cyan-500">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
