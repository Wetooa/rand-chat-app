import { Outlet } from "react-router-dom";
import { BigSidebar, SmallSidebar, NavBar } from "./";

function SharedLayout() {
  return (
    <body className="bg-primary w-screen h-screen flex">
      <section className="w-fit z-10">
        <BigSidebar />
        <SmallSidebar />
      </section>

      <main className="w-screen lg:ml-[195px] transition-all">
        <nav>
          <NavBar />
        </nav>
        <Outlet />
      </main>
    </body>
  );
}
export default SharedLayout;
