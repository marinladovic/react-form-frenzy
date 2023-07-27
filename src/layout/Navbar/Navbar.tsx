import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-16 px-4 bg-slate-800 text-xl text-white flex items-center justify-start space-x-6">
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive ? "text-semibold text-indigo-400" : "";
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/users"
        className={({ isActive }) => {
          return isActive ? "text-semibold text-indigo-400" : "";
        }}
      >
        Users
      </NavLink>
      <NavLink
        to="/posts"
        className={({ isActive }) => {
          return isActive ? "text-semibold text-indigo-400" : "";
        }}
      >
        Posts
      </NavLink>
    </div>
  );
};

export default Navbar;
