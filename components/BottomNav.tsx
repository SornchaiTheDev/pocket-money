import { AiOutlineHome, AiOutlineUnorderedList } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";

function BottomNav() {
  const { pathname } = useRouter();
  const isHome = pathname === "/home";
  const isList = pathname === "/list";
  return (
    <div className="fixed bottom-0 bg-white w-full flex justify-around items-center p-3">
      <Link passHref href="/home">
        <div
          className={`inline-flex flex-col items-center gap-1 w-full p-2 rounded-lg
        ${isHome && "bg-gray-200"}
        `}
        >
          <AiOutlineHome size="1.5rem" />
          <p>หน้าหลัก</p>
        </div>
      </Link>
      <Link passHref href="/list">
        <div
          className={`inline-flex flex-col items-center gap-1 w-full p-2 rounded-lg
        ${isList && "bg-gray-200"}
        `}
        >
          <AiOutlineUnorderedList size="1.5rem" />
          <p>รายการ</p>
        </div>
      </Link>
    </div>
  );
}

export default BottomNav;
