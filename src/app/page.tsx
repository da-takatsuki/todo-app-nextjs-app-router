import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-[92vh] flex flex-col items-center justify-center  bg-slate-200">
        <button className="relative hover:-translate-y-2">
          <Link href={"https://nextjs.org/"} target="_blank">
            <Image
              src="/images/top/nextjs.png"
              width={700}
              height={700}
              alt="Picture of the author"
            />
          </Link>
        </button>
        <div className="text-6xl mt-8 font-mono font-bold">Hello NextJS！</div>
        <div className="flex mt-8">
          <Link
            href={"/about"}
            className="bg-gray-800 border-2 border-gray-800 hover:bg-slate-200 hover:text-gray-800 hover:border-2 hover:border-gray-800  text-white font-bold py-4 px-8 rounded-xl mr-8"
          >
            Get Start
          </Link>
          <Link
            href={"https://nextjs.org/docs"}
            target="_blank"
            className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-bold py-4 px-8 rounded-xl mr-8"
          >
            NextJS Doc
          </Link>
        </div>
      </div>
    </>
  );
}
