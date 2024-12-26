import { List } from "@phosphor-icons/react/dist/ssr";
import SheetDemo  from "./sheet";

export default function Burger() {
  return (
    <SheetDemo>
      <List size={36} className="xl:hidden cursor-pointer"/>
    </SheetDemo>
  );
}
