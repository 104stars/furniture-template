"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import FormContent from "./form-content";

export default function LoginForm() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-6xl mb-2 font-montserrat font-medium">Welcome</h1>
      <h2 className="font-montserrat text-xl font-normal mb-6">
        Sign In to Get Started
      </h2>
      <Card className="w-[350px] font-inter backdrop-blur-xl bg-transparent shadow-xl brightness-110	">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
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
