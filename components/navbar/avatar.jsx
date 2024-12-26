import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DropdownMenuDemo from "./dropdown";

export default function AvatarDropdown() {
  return (
    <DropdownMenuDemo>
      <Avatar className="cursor-pointer">
        <AvatarImage src="https://pbs.twimg.com/media/GdZZJ6paoAAo5bU?format=jpg&name=large" alt="@shadcn" />
        <AvatarFallback>XD</AvatarFallback>
      </Avatar>
    </DropdownMenuDemo>
  );
}

