import { useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

function UsedList() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className="w-full bg-white p-2 rounded-lg shadow-sm flex flex-col cursor-pointer select-none"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <div className="inline-flex items-center gap-2">
          <div className="p-4 bg-gray-50 rounded-full">
            <AiOutlineShopping size="1.5rem" />
          </div>
          <h2 className="font-medium">ซื้อของ Tops</h2>
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
        className={`px-4 pb-4 mt-4 flex flex-col gap-4 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between items-center">
          <h4 className="text-md">
            <span className="font-bold">{1}.</span> นมข้นหวานตรามะลิ
          </h4>
          <h4>
            28 <span className="text-sm">บาท</span>
          </h4>
        </div>
        <div className="flex justify-between items-center">
          <h4 className="text-md">
            <span className="font-bold">{2}.</span> โค้กไม่มีน้ำตาล
          </h4>
          <h4>
            18 <span className="text-sm">บาท</span>
          </h4>
        </div>
        <div className="flex justify-between items-center">
          <h4 className="text-md">
            <span className="font-bold">{3}.</span> ไม้แขวนเสื้อ
          </h4>
          <h4>
            48 <span className="text-sm">บาท</span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default UsedList;
