import { ModeToggle } from "@/components/theme-toggle";
import { PopoverDemo } from "./Popever-genre";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-[1280px] h-[36px] items-center flex    sticky top-0 bg-black justify-between m-auto cursor-pointer mt-5 rounded-sm">
      <Link href={"http://localhost:3000/"}>
        <img src="./Logo.svg" alt="" />
      </Link>

      <PopoverDemo />
      <input
        type="text"
        placeholder="Search"
        className="outline-none border-2 w-[379px] h-[36px] rounded-sm border-zinc-600"
      />
      <ModeToggle />
    </div>
  );
};
export default Header;
