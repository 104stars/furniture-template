import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input"

export default function EmailInput() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 font-inter">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
          <Mail color="white" className="w-4 h-4" />
        </div>
        <Input  placeholder="Enter your email address" className="w-full pl-8 rounded-md bg-inherit text-white border-gray-300" />
      </div>
    </div>
  )
}