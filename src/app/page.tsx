import Link from "next/link";
import { HOMEPAGE_BUTTONS } from "@/constant/constant";

export default function Home() {
  return (
    <div className="home overflow-hidden w-full h-screen mt-10">
      <div className="btns flex gap-5">
        {HOMEPAGE_BUTTONS.map((btn) => (
          <Link key={btn.index} href={btn.redirectTo}>
            <button className="w-[8rem] p-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-bold">
              {btn.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
