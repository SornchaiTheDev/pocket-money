import Byday from "./Byday";

function TodayUsed() {
  return (
    <div className="absolute -bottom-10 left-0 w-full flex justify-center">
      <div className="bg-white p-4 rounded-lg w-11/12 shadow-md relative flex justify-between items-center">
        <Byday />
      </div>
    </div>
  );
}

export default TodayUsed;
