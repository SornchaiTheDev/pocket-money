import ViewAs from "@components/ViewAs";
import Byday from "./Byday";
import ByWeeks from "./ByWeeks";
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
        <div className="bg-white p-4 rounded-lg w-11/12 shadow-md relative flex justify-between items-center">
          {selected === "day" && <Byday />}
          {selected === "week" && <ByWeeks />}
        </div>
      </div>
    </>
  );
}

export default TodayUsed;
