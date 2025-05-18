import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Layout() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-10 w-125 h-200 border border-stone-300 shadow-xl p-4 rounded-xl relative">
        <Outlet />
      </div>
      <NavBar />
    </div>
  );
}
