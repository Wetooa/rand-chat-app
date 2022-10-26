import { Link } from "react-router-dom";

function NavBar() {
  return (
    <main className="bg-slate-300 sticky h-20 flex flex-row align-middle">
      <div className="flex h-full w-full items-center ml-8 justify-between mr-8">
        <h2 className="text-2lg font-semibold">THIS IS THE NAVBAR</h2>

        <ul className="flex gap-4">
          <Link to="/">test</Link>
          <Link to="/">test</Link>
          <Link to="/">test</Link>
        </ul>
      </div>
    </main>
  );
}
export default NavBar;
