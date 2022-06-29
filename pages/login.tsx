import LoginCard from "@components/LoginCard";
import { FaDiscord, FaApple, FaGoogle, FaLine } from "react-icons/fa";
import { NextPage } from "next";
import Link from "next/link";

const Login: NextPage = () => {
  return (
    <>
      <title>My Pocket - Login</title>

      <div className="p-4 bg-gray-50 h-screen flex justify-center items-center">
        <div className="flex flex-col max-w-sm px-4 pt-10 pb-4  rounded-2xl">
          <h2 className="text-lg font-normal mb-4">เข้าสู่ระบบ</h2>
          <div className="flex flex-col gap-2 w-full">
            <LoginCard>
              <FaDiscord size="1.25rem" className="mr-4" />
              <h2>เข้าสู่ระบบด้วย Discord</h2>
            </LoginCard>
            <LoginCard>
              <FaApple size="1.25rem" className="mr-4" />
              <h2>เข้าสู่ระบบด้วย Apple</h2>
            </LoginCard>
            <LoginCard>
              <FaGoogle size="1.25rem" className="mr-4" />
              <h2>เข้าสู่ระบบด้วย Google</h2>
            </LoginCard>
            <LoginCard>
              <FaLine size="1.25rem" className="mr-4" />
              <h2>เข้าสู่ระบบด้วย Line</h2>
            </LoginCard>
          </div>
          <h2 className="mt-4">
            ยังไม่มีบัญชี?
            <Link href="/">
              <a className="text-blue-400 underline decoration-dotted ml-2">
                สมัครสมาชิก
              </a>
            </Link>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Login;
