import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import AvatarComponent from "./avatar";
import DropdownMenuDemo from "./dropdown";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

export default function Navbar() {
  return (
    <div className=" w-full border flex items-center justify-between p-3 pr-10">
      <h1 className="flex text-2xl font-montserrat font-bold text-gray-900 dark:text-gray-100">
        MyApp
      </h1>
      <div className="flex gap-7 items-center font-inter">
        <Link href="/" className="border border-transparent hover:bg-gray-200 p-1 px-3 rounded-full">Home</Link>
        <Link href="#" className="border border-transparent hover:bg-gray-200 p-1 px-3 rounded-full">Features</Link>
        <Link href="#" className="border border-transparent hover:bg-gray-200 p-1 px-3 rounded-full">Contact</Link>
        <DropdownMenuDemo>
        <DropdownMenuTrigger>
          <AvatarComponent  />
        </DropdownMenuTrigger>
        </DropdownMenuDemo>
      </div>
    </div>
  );
}
