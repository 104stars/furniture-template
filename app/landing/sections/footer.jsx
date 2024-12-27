import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import EmailInput from "@/components/emailinput/emailinput";
export default function FooterSection() {
  return (
    <>
      <section className="flex w-full flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-10 py-8 sm:py-12 px-4 lg:px-8 bg-neutral-800">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center font-inter font-bold max-w-2xl text-gray-50 ">
          Let's create beautiful spaces together
        </h2>
        <p className="text-base font-inter sm:text-lg text-gray-50 max-w-xl text-center">
          Subscribe for weekly interior design tips, behind-the-scenes looks at
          our artisans' workshops, and members-only offers. Your sanctuary
          awaits.
        </p>
        <div className="flex flex-col xl:flex-row gap-4 justify-center items-center  ">
          <EmailInput />
          <Button variant="outline" className="font-inter">
            Sign Me Up
          </Button>
        </div>
      </section>
      <Separator className="w-full bg-neutral-700" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 p-4 sm:p-6 font-inter text-xs text-gray-50 bg-neutral-800">
        <p className="text-center sm:text-left">© 2024 All rights reserved.</p>
        <div className="space-x-2 sm:space-x-4 text-center sm:text-right">
          <Link href="#" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="#" className="hover:underline">
            Privacy
          </Link>
        </div>
      </div>
    </>
  );
}
