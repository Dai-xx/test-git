import Image from "next/image";
import { FC } from "react";
import { PCmenu } from "../PCmenu";
import { PCmainCard } from "../PCmainCard";

type Props = {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  h?: string;
  w: string;
  pt: string;
  pb: string;
};

export const PCLayout: FC<Props> = ({
  children,
  title,
  subtitle,
  h,
  w,
  pt,
  pb,
}) => {
  return (
    <>
      <div className="mb-[69px] bg-white">
        <header className="ml-[69px] mt-[94px]  mb-[26px] flex items-center">
          <div className="relative mr-[103px] h-[35px] w-48">
            <Image
              src="/login/logo.png"
              fill
              style={{ objectFit: "cover" }}
              alt=""
            />
          </div>
          <h1 className=" mr-5 text-4xl font-black text-[#666]">{title}</h1>
          <p className="text-xl font-black text-[#B2B2B2]">{subtitle}</p>
        </header>
        <div className="flex gap-x-12 ml-[69px]">
          <PCmenu />
          <PCmainCard w={w} h={h} pt={pt} pb={pb}>
            {children}
          </PCmainCard>
        </div>
      </div>
    </>
  );
};
