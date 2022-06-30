import { useState } from "react";
import { NextPage } from "next";
import { useSession, signOut } from "next-auth/react";
import UsedList from "@components/UsedList";
import Add from "@components/Add";
import AddPopup from "@components/AddPopup";
import Header from "@components/Header";
import Page from "layout/Page";
import BudgetLimit from "@components/BudgetLimit";

const Index: NextPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {/* <BudgetLimit /> */}
      <div className="relative">
        <title>KU Saving</title>
        <Page className="bg-gray-50 dark:bg-gray-900 min-h-screen pb-4">
          <Header />
          <div className="mt-16 px-4 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h2 className="text-lg my-4 dark:text-white">รายการวันนี้ (2)</h2>
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
        </Page>

        <AddPopup isAddNewList={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </>
  );
};

export default Index;
