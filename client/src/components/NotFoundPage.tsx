import { Link } from "react-router-dom";
import img from "../assets/images/page_not_found.svg";

function NotFoundPage() {
  return (
    <main className="flex flex-col align-middle text-center justify-center items-center">
      <img className="max-w-[800px] w-11/12 block mb-2" src={img} alt="" />
      <h3 className="p-4 text-4xl mb-5">Oh noo! Page not Found!</h3>
      <Link to={"/"} className="underline p-1 text-2lg inline rounded-lg w-1/2">
        Return to landing page
      </Link>
    </main>
  );
}
export default NotFoundPage;
