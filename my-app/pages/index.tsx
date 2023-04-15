import Image from "next/image";
import { Inter } from "next/font/google";
import { PCmenu } from "@/features/PCmenu";
import { PCLayout } from "@/features/PCLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <PCLayout title="nft" w="500" pt="10" pb="10">
      <div className="text-black max-w-[400px] mx-auto">utsunomiya</div>
    </PCLayout>
  );
}
