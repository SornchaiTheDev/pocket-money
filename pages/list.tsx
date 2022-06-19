import { NextPage } from "next";
import BottomNav from "@components/BottomNav";
import UsedCard from "@components/UsedCard";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Index: NextPage = () => {
  return (
    <>
      <title>My Pocket</title>
      <div className="p-4 bg-gray-50 min-h-screen flex flex-col items-center gap-4">
        {/* <Calendar calendarType="US"/> */}
        <div className="w-full flex justify-between items-center my-4">
          <BsChevronLeft size="1.25rem" className="flex-1" />
          <h2>มิถุนายน 2022</h2>
          <BsChevronRight size="1.25rem" className="flex-1" />
        </div>
        <div className="flex flex-col gap-4 w-full my-10 mb-28">
          <UsedCard />
          <UsedCard />
          <UsedCard />
          <UsedCard />
          <UsedCard />
          <UsedCard />
          <UsedCard />
          <UsedCard />
          <UsedCard />
          <UsedCard />
          <UsedCard />
          <UsedCard />
        </div>
      </div>

      <BottomNav />
    </>
  );
};

export default Index;
