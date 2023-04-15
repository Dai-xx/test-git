import { FC } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { MdHomeFilled } from "react-icons/md";
import { RiDatabase2Line } from "react-icons/ri";

type Props = {};

export const PCmenu: FC<Props> = ({}) => {
  return (
    <>
      <div className="PCcard-shadow h-[393px] w-60 gap-y-8 rounded-[32px] px-[30px] pt-[42px] pb-[30px]">
        <div className="mb-[45px] gap-x-8 pl-2 font-bold text-[#666666]">
          <button className="mb-[42px] flex items-center gap-x-3">
            <MdHomeFilled size={24} />
            <h3>Home</h3>
          </button>
          <button className="mb-[45px] flex items-center gap-x-3">
            <AiOutlineSearch size={24} />
            <h3>Search</h3>
          </button>
          <button className="mb-[45px] flex items-center gap-x-3">
            <IoMdNotifications size={24} />
            <h3>Point</h3>
          </button>
          <button className="flex items-center gap-x-3">
            <BsFillPersonFill size={24} />
            <h3>My Page</h3>
          </button>
        </div>
        <button className=" bg-gray-700 flex h-[46px] w-[180px] items-center gap-x-4 rounded-full pl-[17px]">
          <RiDatabase2Line size={24} />
          <p className="font-bold">Point</p>
        </button>
      </div>
    </>
  );
};
