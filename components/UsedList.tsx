import { useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import Icons from "@components/Category/Icons";

function UsedList() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className="w-full bg-white p-2 py-4 rounded-lg shadow-md flex flex-col cursor-pointer select-none"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <div className="inline-flex items-center gap-2">
          <div className="p-4 bg-gray-50 rounded-full">
            <Icons category="other" />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold text-gray-900">ซื้อของ Tops</h2>
            <h3 className="text-sm text-gray-500">เมื่อ 5 นาทีที่แล้ว</h3>
          </div>
        </div>
        <div className="inline-flex items-center gap-2">
          <h2 className="font-bold">
            100 <span className="font-normal text-black">บาท</span>
          </h2>
          <BsChevronDown
            size="1.2rem"
            className={`transition-all ${isOpen ? "rotate-180" : "rotate-0"}`}
          />
        </div>
      </div>

      <div
        className={`px-2 mt-6 flex flex-col gap-2 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <h2 className="text-gray-500 text-sm">รายละเอียด</h2>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit error
          dignissimos temporibus doloribus vitae obcaecati maiores, corrupti
          possimus dicta, necessitatibus voluptatibus soluta fugiat quas vel
          excepturi et iusto id nisi.
        </p> */}
        <p>ไม่มีรายละเอียดเพิ่มเติม</p>
      </div>
    </div>
  );
}

export default UsedList;
