import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  ShootingStar,
  House,
  Binoculars,
  EnvelopeOpen,
  User,
  SignOut,
} from "@phosphor-icons/react/dist/ssr";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function SheetDemo({ children }) {
  return (
    <Sheet className="xl:hidden">
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="backdrop-blur-md bg-white/80  backdrop-brightness-200 ">
        <SheetHeader>
          <SheetTitle className="font-inter font-bold text-start">
            Menu
          </SheetTitle>
        </SheetHeader>
        <Separator className="w-full bg-gray-300"></Separator>
        <div className="pt-5">
          <ul className="font-inter space-y-4">
            <li className="hover:underline flex flex-row gap-4">
              <ShootingStar size={25}></ShootingStar>
              Features
            </li>

            <Separator className="w-full bg-gray-300"></Separator>

            <li className="hover:underline flex flex-row gap-4">
              <House size={25}></House>
              Home
            </li>

            <Separator className="w-full bg-gray-300"></Separator>

            <li className="hover:underline flex flex-row gap-4">
              <Binoculars size={25}></Binoculars>
              Explore
            </li>

            <Separator className="w-full bg-gray-300"></Separator>

            <li className="hover:underline flex flex-row gap-4">
              <EnvelopeOpen size={25}></EnvelopeOpen>
              Contact
            </li>

            <Separator className="w-full bg-gray-300"></Separator>

            <li className="hover:underline flex flex-row gap-4">
              <User size={25}></User>
              Profile
            </li>

            <Separator className="w-full bg-gray-300"></Separator>

            <li className="hover:underline text-red-500 flex flex-row gap-4">
              <SignOut size={25} color="#ef4444"></SignOut>
              <Link href="/">Sign out</Link>
            </li>

            <Separator className="w-full bg-gray-300"></Separator>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
