import { Outlet } from "react-router-dom";
import { BigSidebar, SmallSidebar, NavBar } from "./";

function SharedLayout() {
  return (
    <body className="bg-primary w-screen h-screen">
      <section>
        <BigSidebar />
        <SmallSidebar />
      </section>

      <main>
        <nav>
          <NavBar />
        </nav>
        <Outlet />
      </main>
    </body>
  );
}
export default SharedLayout;
