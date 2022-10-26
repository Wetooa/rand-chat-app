import { SidebarLinksProps } from "../interface";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiFillVideoCamera, AiFillHome } from "react-icons/ai";

const sidebarLinks: SidebarLinksProps[] = [
  {
    id: 0,
    label: "Landing",
    path: "/",
    icon: <AiFillHome />,
  },
  {
    id: 1,
    label: "Chat Now",
    path: "/random-chat",
    icon: <BsFillChatDotsFill />,
  },
  {
    id: 2,
    label: "Video Chat Now",
    path: "/random-video",
    icon: <AiFillVideoCamera />,
  },
];

export default sidebarLinks;
