import { NavLink } from "react-router-dom";
import sidebarLinks from "../utils/sidebarLinks";

function BigSidebar() {
  console.log(sidebarLinks);

  return (
    <main className="md:ml-[-300px] lg:ml-0 lg:flex bg-slate-600 flex-col h-screen min-w-fit shadow-md transition-all absolute ">
      <h3 className="text-3xl font-bold p-4 bg-gray-500 text-center">
        Random Chat App
      </h3>
      <ul>
        {sidebarLinks.map((sidebar) => {
          const { id, label, icon, path } = sidebar;
          return (
            <div className="w-12/12 h-fit p-2 pl-8 mt-3 hover:opacity-2 text-center text-lg min-w-fit hover:bg-slate-400">
              <NavLink
                end
                to={path}
                key={id}
                className={({ isActive }) =>
                  isActive ? "bg-sky-300 scale-50" : "scale-0"
                }
              >
                <div className="flex flex-row capitalize align-middle items-center gap-1 flex-wrap font-bold">
                  <span className="text-blue-400 w-fit h-fit mr-2 text-3xl">
                    {icon}
                  </span>
                  <p>{label}</p>
                </div>
              </NavLink>
            </div>
          );
        })}
      </ul>
    </main>
  );
}
export default BigSidebar;
