import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FaHamburger, FaTheaterMasks, FaUmbrellaBeach } from "react-icons/fa";
import { Category } from "types/Category";

interface IconsProps {
  category: Category;
}

function Icons({ category }: IconsProps) {
  if (category === "shopping") return <AiOutlineShopping size="1.15rem" />;
  if (category === "food") return <FaHamburger size="1.15rem" />;
  if (category === "entertainment") return <FaTheaterMasks size="1.15rem" />;
  if (category === "travel") return <FaUmbrellaBeach size="1.15rem" />;
  if (category === "other") return <BsThreeDots size="1.15rem" />;

  return <h1>NO_ICON</h1>;
}

export default Icons;
