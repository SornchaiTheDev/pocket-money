import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineShopping } from "react-icons/ai";
import useClickOutSide from "@hooks/useClickOutside";
import InputForm from "./form/InputForm";
import MoneyForm from "./form/MoneyForm";

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
        className="w-full fixed bottom-0 bg-white rounded-t-2xl h-3/4 p-4"
        animate={isAddNewList ? "open" : "closed"}
      >
        <div className="flex flex-col gap-4 h-5/6 justify-between pt-4">
          <div className="flex flex-col gap-6">
            <InputForm placeholder="ชื่อรายการ" />
            <MoneyForm placeholder="ราคา" />
          </div>
          <button className="px-4 py-3 w-full bg-gray-900 hover:bg-gray-800 rounded-full text-white">
            เพิ่มรายการ
          </button>
        </div>
      </motion.div>
    </>
  );
}

export default AddPopup;
