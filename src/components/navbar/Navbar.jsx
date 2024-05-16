function Navbar() {
  return ( 
    <div className="sticky bg-white relative top-0 font-mono sm:px-10 lg:px-48 py-5 navbar bg-base-100 items-center">
      <div className="flex-1">
        <a href="/" className="sm:text-2xl md:text-3xl font-bold">CTodos</a>
      </div>
      <div className="flex-none">
        <h3 className="sm:text-xl font-semibold text-xl">Create own todos</h3>
      </div>
    </div>
   );
}

export default Navbar;