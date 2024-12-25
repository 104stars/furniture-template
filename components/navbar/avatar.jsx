import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DropdownMenuDemo from "./dropdown";

export default function AvatarDropdown() {
  return (
    <DropdownMenuDemo>
      <Avatar>
        <AvatarImage src="https://pbs.twimg.com/profile_images/1345731173918658566/33fSVbuc_400x400.jpg" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </DropdownMenuDemo>
  );
}

