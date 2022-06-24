import { NextPage } from "next";
import BottomNav from "@components/BottomNav";
import UsedCard from "@components/UsedCard";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { months } from "../assets/months";
const Index: NextPage = () => {
  return (
    <>
      <title>My Pocket</title>
      <div className="bg-gray-50 min-h-screen flex flex-col items-center gap-4">
        <div className="w-full flex justify-between items-center bg-white p-4 shadow-sm">
          <BsChevronLeft size="1.25rem" className="flex-1 cursor-pointer" />
          <h2>
            {months[new Date().getMonth()].full} {new Date().getFullYear()}
          </h2>
          <BsChevronRight size="1.25rem" className="flex-1 cursor-pointer" />
        </div>
        <div className="flex flex-col gap-4 w-full my-10 mb-28 px-4">
          {Array.from({ length: 30 }, (_, i) => (
            <UsedCard key={i} day={i + 1} month={5} />
          ))}
        </div>
      </div>

      <BottomNav />
    </>
  );
};

export default Index;
