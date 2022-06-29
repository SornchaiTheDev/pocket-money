import { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
  className?: string;
}

function Page({ children, className }: PageProps) {
  return (
    <div
      className={`bg-gray-50 min-h-screen mb-24  h-screen ${className}`}
    >
      {children}
    </div>
  );
}

export default Page;
