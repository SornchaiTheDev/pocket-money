import ViewAs from "@components/ViewAs";
import Byday from "./Byday";
import ByWeeks from "./ByWeeks";
import ByMonth from "./ByMonth";
import { useState } from "react";
import { ViewAs as ViewAsType } from "types/ViewAs";


function TodayUsed() {
  const [selected, setSelected] = useState<ViewAsType>("day");
  const handleOnSelect = (view: ViewAsType) => {
    setSelected(view);
  };
  return (
    <>
      <ViewAs selected={selected} onClick={handleOnSelect} />
      <div className="absolute -bottom-10 left-0 w-full flex justify-center h-32">
        <div className="bg-white dark:bg-slate-900 p-4 rounded-lg w-11/12 shadow-md relative">
          {selected === "day" && <Byday />}
          {selected === "week" && <ByWeeks />}
          {selected === "month" && <ByMonth />}
        </div>
      </div>
    </>
  );
}

export default TodayUsed;
