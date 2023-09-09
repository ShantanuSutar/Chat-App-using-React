const Search = () => {
  return (
    <div className="border-b">
      <div className=" p-2 ">
        <input
          type="text"
          className=" bg-transparent border-none text-white placeholder:text-slate-200 outline-none"
          placeholder="Search..."
        />
      </div>
      <div className=" p-2 flex items-center gap-2 text-white cursor-pointer hover:bg-cyan-700">
        <img
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          alt="User Photo"
          className=" bg-cyan-50 h-12 w-12 rounded-full object-cover"
        />
        <div>
          <span>Ram</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
