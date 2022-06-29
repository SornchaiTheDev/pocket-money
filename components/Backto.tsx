import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";

interface BacktoHomeProps {
  className?: string;
  title: string;
  href: string;
}
function BacktoHome({ className, title, href }: BacktoHomeProps) {
  return (
    <Link href={href} passHref>
      <div
        className={`inline-flex justify-center items-center gap-2 py-6 cursor-pointer select-none ${className}`}
      >
        <BsArrowLeft />
        <h2 className="font-semibold">{title}</h2>
      </div>
    </Link>
  );
}

export default BacktoHome;
