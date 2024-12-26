import AvatarComponent from "./avatar";
import { Cube } from "@phosphor-icons/react/dist/ssr";
import Burger from "./burger";

export default function Navbar() {
  return (
    <header className="flex sticky top-0 z-40 w-full border-b justify-between items-center p-2 px-10 md:px-10 backdrop-blur-md bg-gray-100 bg-opacity-70 ">
      <Cube size={40} className="cursor-pointer pt-1"></Cube>
      <ul className="hidden xl:flex items-center gap-12 font-inter">
        <li className="p-3 hover:underline cursor-pointer">Home</li>
        <li className="p-3 hover:underline cursor-pointer">Features</li>
        <li className="p-3 hover:underline cursor-pointer">Explore</li>
        <li className="p-3 hover:underline cursor-pointer">Contact</li>
        <AvatarComponent />
      </ul>
      <Burger />
    </header>
  );
}
