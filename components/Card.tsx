import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}
const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={`w-full items-center bg-white shadow-lg mb-2 rounded-md ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
