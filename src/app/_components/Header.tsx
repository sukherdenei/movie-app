import { ModeToggle } from "@/components/theme-toggle";
import { PopoverDemo } from "./Popever-genre";
import Link from "next/link";
import Image from "next/image";
import Input from "./Input";
import { Card } from "@/components/ui/card";

const Header = () => {
  return (
    <Card className="w-full sticky top-0 z-10">
      <div className="w-[1260px] h-[59px] items-center flex  sticky top-0 justify-between m-auto cursor-pointer rounded-sm z-50">
        <Link href={"http://localhost:3000/"}>
          <Image
            width={100}
            height={100}
            src="/Logo.svg"
            alt=""
            className="w-[100px] h-[100px]"
          />
        </Link>
        <PopoverDemo />
        <Input />
        <ModeToggle />
      </div>
    </Card>
  );
};
export default Header;
