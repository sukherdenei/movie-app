const Header = () => {
  return (
    <div className="w-[1280px] h-[36px] flex justify-between m-auto pr-16 pl-16 cursor-pointer m-5">
      <img src="./Logo.svg" alt="" />
      <button className="w-[97px] h-[36px]">Genre</button>
      <input
        type="text"
        placeholder="Search"
        className="outline-white border-2 w-[379px] h-[36px]"
      />

      <img src="./Modes.svg" alt="" />
    </div>
  );
};
export default Header;
