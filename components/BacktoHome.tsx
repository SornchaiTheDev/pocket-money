import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";

interface BacktoHomeProps {
  className?: string;
}
function BacktoHome({ className }: BacktoHomeProps) {
  return (
    <Link href="/home" passHref>
      <div
        className={`inline-flex justify-center items-center gap-2 py-6 cursor-pointer select-none ${className}`}
      >
        <BsArrowLeft />
        <h2 className="font-semibold">กลับหน้าหลัก</h2>
      </div>
    </Link>
  );
}

export default BacktoHome;
