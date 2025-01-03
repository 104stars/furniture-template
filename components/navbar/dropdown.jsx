import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  User,
  Gear,
  ChatCircleDots,
  SignOut,
} from "@phosphor-icons/react/dist/ssr";

import Link from "next/link";

export default function DropdownMenuDemo({ children }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 font-inter">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-200" />
        <DropdownMenuGroup className="">
          <DropdownMenuItem className="hover:underline text-md ">
            <User />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:underline text-md ">
            <Gear />
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:underline text-md ">
            <ChatCircleDots />
            Feedback
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-gray-200" />
          <DropdownMenuItem className="hover:underline text-red-500 text-md ">
            <Link href="/login" className="hover:text-red-900 flex items-center gap-2">
              <SignOut />
              Sign out
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
