import { useRef } from "react";
import { motion } from "framer-motion";
import { AiOutlineShopping } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import InputForm from "./form/InputForm";
import MoneyForm from "./form/MoneyForm";
import Category from "@components/Category";
import TimeForm from "./form/TimeForm";
import Description from "./form/Description";
import { toast } from "react-toastify";

interface AddPopupProps {
  isAddNewList: boolean;
  onClose: () => void;
}

const variants = {
  open: {
    y: 0,
  },
  closed: {
    y: "100%",
  },
};

function AddPopup({ isAddNewList, onClose }: AddPopupProps) {
  const divRef = useRef(null);

  return (
    <>
      <div
        className={`w-full h-full absolute top-0 flex flex-col justify-end ${
          isAddNewList ? "block" : "hidden"
        }`}
        onClick={onClose}
      ></div>
      <motion.div
        ref={divRef}
        initial={false}
        variants={variants}
        className="w-full fixed bottom-0 bg-white rounded-t-2xl p-4 flex flex-col pb-32"
        animate={isAddNewList ? "open" : "closed"}
      >
        <button
          className="inline-flex gap-2 items-center self-end my-2 cursor-pointer"
          onClick={onClose}
        >
          <FaTimes />
          <h2>ปิด</h2>
        </button>
        <div className="flex flex-col gap-6 justify-between pt-4">
          <div className="flex gap-6">
            <InputForm placeholder="ชื่อรายการ" className="w-full" />
            <MoneyForm placeholder="ราคา" />
          </div>
          <TimeForm />
          <Description />

          <Category />

          <button
            className="px-4 py-3 w-full bg-gray-900 hover:bg-gray-800 rounded-full text-white"
            onClick={() => toast.success("เพิ่มรายการสำเร็จ")}
          >
            เพิ่มรายการ
          </button>
        </div>
      </motion.div>
    </>
  );
}

export default AddPopup;
