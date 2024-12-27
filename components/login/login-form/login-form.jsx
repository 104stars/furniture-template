"use client";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import FormContent from "./form-content";

export default function LoginForm() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-8">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-2 font-montserrat font-medium text-center">
        Welcome
      </h1>
      <h2 className="text-lg sm:text-xl lg:text-2xl font-montserrat font-normal mb-6 text-center">
        Sign In to Get Started
      </h2>
      <Card className="w-full max-w-[350px] font-inter backdrop-blur-xl bg-transparent bg-opacity-80 shadow-xl brightness-110">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Login</CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Enter your email and password to login
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormContent />
        </CardContent>
        <CardFooter>
          <Link href="/" className="text-sm text-blue-500 hover:underline">
            Forgot password?
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
