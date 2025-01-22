import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="w-[1280px] h-[36px] items-center flex    sticky top-0 bg-black justify-between m-auto cursor-pointer mt-5 rounded-sm">
      <img src="./Logo.svg" alt="" />
      <button className="w-[97px] h-[36px]">Genre</button>
      <input
        type="text"
        placeholder="Search"
        className="outline-white border-2 w-[379px] h-[36px]"
      />
      <ModeToggle />
      {/* <Button
        // onChange={ModeToggle}
        variant={"outline"}
        size={"icon"}
        className="dark h-[36px]"
      ></Button> */}
      {/* <img src="./Modes.svg" alt="" /> */}
    </div>
  );
};
export default Header;
