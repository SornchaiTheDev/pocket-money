import { months } from "@assets/months";
import Card from "@components/Card";
import UsedCard from "@components/UsedCard";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function Index() {
  return (
    <Card className="p-4 col-span-2 md:col-span-1">
      <h2 className="text-lg font-normal">ประวัติย้อนหลัง</h2>
      <div className="w-full flex justify-between items-center bg-white p-4 border-b-2">
        <BsChevronLeft size="1.25rem" className="flex-1 cursor-pointer" />
        <h2>
          {months[new Date().getMonth()].full} {new Date().getFullYear()}
        </h2>
        <BsChevronRight size="1.25rem" className="flex-1 cursor-pointer" />
      </div>
      <div className="flex flex-col gap-4 w-full my-2">
        {Array.from({ length: 30 }, (_, i) => (
          <UsedCard key={i} day={i + 1} month={5} />
        ))}
      </div>
    </Card>
  );
}

export default Index;
