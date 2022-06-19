import { NextPage } from "next";
import BottomNav from "@components/BottomNav";

const Index: NextPage = () => {
  return (
    <>
      <title>My Pocket</title>

      <div className="p-4 bg-gray-50 h-screen">
        <h2>List</h2>
      </div>
      <BottomNav />
    </>
  );
};

export default Index;
