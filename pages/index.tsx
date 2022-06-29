import LoginCard from "@components/LoginCard";
import { FaDiscord, FaApple, FaGoogle, FaLine } from "react-icons/fa";
import { NextPage } from "next";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";

const Index: NextPage = () => {
  return (
    <>
      <title>My Pocket - Register</title>

      <div className="p-4 bg-gray-50 h-screen flex justify-center items-center">
        <div className="flex flex-col max-w-sm px-4 pt-10 pb-4  rounded-2xl">
          <div className="w-full">
            <h1 className="text-xl font-semibold">My Pocket</h1>
            <p>จัดการรายรับ-รายจ่ายของคุณแบบง่ายๆ</p>
          </div>
          <h2 className="text-lg font-normal mb-4">สมัครสมาชิก</h2>
          <div className="flex flex-col gap-2 w-full">
            <LoginCard onClick={() => signIn("discord")}>
              <FaDiscord size="1.25rem" className="mr-4" />
              <h2>ดำเนินการต่อด้วย Discord</h2>
            </LoginCard>
            <LoginCard onClick={() => {}}>
              <FaApple size="1.25rem" className="mr-4" />
              <h2>ดำเนินการต่อด้วย Apple</h2>
            </LoginCard>
            <LoginCard onClick={() => signIn("google")}>
              <FaGoogle size="1.25rem" className="mr-4" />
              <h2>ดำเนินการต่อด้วย Google</h2>
            </LoginCard>
            <LoginCard onClick={() => {}}>
              <FaLine size="1.25rem" className="mr-4" />
              <h2>ดำเนินการต่อด้วย Line</h2>
            </LoginCard>
          </div>
          <h2 className="mt-4">
            มีบัญชีอยู่แล้ว?
            <Link href="/login">
              <a className="text-blue-400 underline decoration-dotted ml-2">
                เข้าสู่ระบบ
              </a>
            </Link>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Index;
