import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function SheetDemo({ children }) {
  return (
    <Sheet className="xl:hidden">
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="backdrop-blur-md bg-white/80 ">
        <SheetHeader>
          <SheetTitle className="font-inter font-bold">Menu</SheetTitle>
        </SheetHeader>
        <Separator className="w-full bg-gray-300"></Separator>
        <div className="pt-5">
          <ul className="font-inter space-y-4">
            <li className="hover:underline">Features</li>
            <Separator className="w-full bg-gray-300"></Separator>
            <li className="hover:underline">Home</li>
            <Separator className="w-full bg-gray-300"></Separator>
            <li className="hover:underline">Explore</li>
            <Separator className="w-full bg-gray-300"></Separator>
            <li className="hover:underline">Contact</li>
            <Separator className="w-full bg-gray-300"></Separator>
            <li className="hover:underline">Profile</li>
            <Separator className="w-full bg-gray-300"></Separator>
            <li className="hover:underline text-red-500">
              <Link href="/">Sign out</Link>
            </li>
            <Separator className="w-full bg-gray-300"></Separator>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
