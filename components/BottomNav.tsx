import {
  AiOutlineHome,
  AiOutlineHistory,
  AiOutlineSetting,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";

function BottomNav() {
  const { pathname } = useRouter();
  const isHome = pathname === "/home";
  const isList = pathname === "/list";
  const isManage = pathname === "/manage";
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
          <p className="text-sm">หน้าหลัก</p>
        </div>
      </Link>
      <Link passHref href="/manage">
        <div
          className={`inline-flex flex-col items-center gap-1 w-full p-2 rounded-lg
        ${isManage && "bg-gray-200"}
        `}
        >
          <AiOutlinePlusCircle size="1.5rem" />
          <p className="text-sm">เพิ่มรายการ</p>
        </div>
      </Link>
      {/* <Link passHref href="/list">
        <div
          className={`inline-flex flex-col items-center gap-1 w-full p-2 rounded-lg
        ${isList && "bg-gray-200"}
        `}
        >
          <AiOutlineHistory size="1.5rem" />
          <p className="text-sm">ประวัติย้อนหลัง</p>
        </div>
      </Link> */}
      <Link passHref href="/settings">
        <div
          className={`inline-flex flex-col items-center gap-1 w-full p-2 rounded-lg
        ${isSettings && "bg-gray-200"}
        `}
        >
          <AiOutlineSetting size="1.5rem" />
          <p className="text-sm">ตั้งค่า</p>
        </div>
      </Link>
    </div>
  );
}

export default BottomNav;
