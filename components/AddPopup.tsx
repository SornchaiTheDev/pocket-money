import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import useClickOutSide from "@hooks/useClickOutside";

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
        <h2>เพิ่ม</h2>
      </motion.div>
    </>
  );
}

export default AddPopup;
