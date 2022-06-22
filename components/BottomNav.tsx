import { AiOutlineHome, AiOutlineUnorderedList , AiOutlineSetting } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";

function BottomNav() {
  const { pathname } = useRouter();
  const isHome = pathname === "/home";
  const isList = pathname === "/list";
  const isSettings = pathname === "/settings";
  return (
    <div className="fixed bottom-0 bg-white w-full flex justify-around items-center p-3 select-none">
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
      <Link passHref href="/settings">
        <div
          className={`inline-flex flex-col items-center gap-1 w-full p-2 rounded-lg
        ${isSettings && "bg-gray-200"}
        `}
        >
          <AiOutlineSetting size="1.5rem" />
          <p>ตั้งค่า</p>
        </div>
      </Link>
    </div>
  );
}

export default BottomNav;
