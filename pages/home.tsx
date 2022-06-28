import { NextPage } from "next";
import BottomNav from "@components/BottomNav";
import { useSession, signOut } from "next-auth/react";
import UsedList from "@components/UsedList";
import Add from "@components/Add";
import AddPopup from "@components/AddPopup";
import Header from "@components/Header";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Index: NextPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <title>My Pocket</title>

      <div className="bg-gray-50 min-h-screen pb-28">
        <Header />
        <div className="mt-16 px-4 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <h2 className="text-lg my-4">รายการวันนี้ (2)</h2>
            <Add onClick={() => setIsOpen(!isOpen)} />
          </div>
          <UsedList />
          <UsedList />
          <UsedList />
          <UsedList />
          <UsedList />
          <UsedList />
          <UsedList />
          <UsedList />
          <UsedList />
        </div>
        <BottomNav />
      </div>

      <AddPopup isAddNewList={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Index;
