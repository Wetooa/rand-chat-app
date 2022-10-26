import { NavLink } from "react-router-dom";
import sidebarLinks from "../utils/sidebarLinks";

function SmallSidebar() {
  return (
    <main className="flex flex-col bg-slate-600 h-screen w-fit transition-all ">
      <h3 className="text-3xl font-bold p-4 bg-gray-500 text-center ">RCA</h3>
      <ul>
        {sidebarLinks.map((sidebar) => {
          const { id, label, icon, path } = sidebar;
          return (
            <NavLink
              end
              to={path}
              key={id}
              className={({ isActive }) => (isActive ? "bg-blue-200" : "")}
            >
              <div className="flex flex-col items-center text-3xl bg-slate-400 w-12/12 h-auto p-5 m-3 rounded-full hover:bg-slate-500">
                {icon}
              </div>
            </NavLink>
          );
        })}
      </ul>
    </main>
  );
}
export default SmallSidebar;
