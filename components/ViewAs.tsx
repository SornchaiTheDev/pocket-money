import React from "react";

function ViewAs() {
  return (
    <div className="flex justify-start gap-2 mt-6 mb-2">
      <button className="px-4 py-1 border-2 bg-white  rounded-full text-black hover:bg-white focus:bg-white hover:text-black focus:text-black">
        วันนี้
      </button>
      <button className="px-4 py-1 border-2 border-white rounded-full text-white hover:bg-white focus:bg-white hover:text-black focus:text-black">
        สัปดาห์นี้
      </button>
      <button className="px-4 py-1 border-2 border-white rounded-full text-white hover:bg-white focus:bg-white hover:text-black focus:text-black">
        เดือนนี้
      </button>
    </div>
  );
}

export default ViewAs;
