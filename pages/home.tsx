import { NextPage } from "next";
import MoneyStatus from "@components/MoneyStatus";
import BottomNav from "@components/BottomNav";
import History from "@components/History";

const Index: NextPage = () => {
  return (
    <>
      <title>My Pocket</title>

      <div className="p-4 bg-gray-50 min-h-screen mb-24">
        <MoneyStatus />
        <History />
      </div>
      <BottomNav />
    </>
  );
};

export default Index;
