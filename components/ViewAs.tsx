import { ViewAs as ViewAsType } from "types/ViewAs";
interface ViewAsProps {
  selected: ViewAsType;
  onClick: (view: ViewAsType) => void;
}

function ViewAs({ onClick, selected }: ViewAsProps) {
  return (
    <div className="flex justify-start gap-2 mt-6 mb-2">
      <button
        className={`px-4 py-1 border-2 ${
          selected === "day" && "bg-white text-black"
        }  rounded-full text-white hover:bg-white focus:bg-white hover:text-black focus:text-black border-white`}
        onClick={() => onClick("day")}
      >
        วันนี้
      </button>
      <button
        className={`px-4 py-1 border-2 ${
          selected === "week" && "bg-white text-black"
        }  rounded-full text-white hover:bg-white focus:bg-white hover:text-black focus:text-black border-white`}
        onClick={() => onClick("week")}
      >
        สัปดาห์นี้
      </button>
      <button
        className={`px-4 py-1 border-2 ${
          selected === "month" && "bg-white text-black"
        }  rounded-full text-white hover:bg-white focus:bg-white hover:text-black focus:text-black border-white`}
        onClick={() => onClick("month")}
      >
        เดือนนี้
      </button>
    </div>
  );
}

export default ViewAs;
