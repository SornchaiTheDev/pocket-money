import LoginCard from "@components/LoginCard";
import { FaDiscord, FaApple, FaGoogle, FaLine } from "react-icons/fa";
import { NextPage } from "next";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import InputForm from "@components/form/InputForm";

const Index: NextPage = () => {
  return (
    <>
      <title>My Pocket - Register</title>

      <div className="p-4 bg-gray-50 h-screen flex justify-center items-center">
        <div className="flex flex-col max-w-sm p-4  rounded-2xl bg-white shadow-sm py-6">
          <div className="w-full mb-6">
            <h1 className="text-3xl text-center font-semibold mb-2 text-lime-500 mt-4">
              KU Saving
            </h1>
            <p className="text-center">จัดการรายรับ-รายจ่ายของนิสิตเกษตรแบบง่ายๆแค่ปลายนิ้ว</p>
          </div>

          <div className="my-4 flex flex-col gap-6">
            <InputForm
              size="text-md"
              title="บัญชีผู้ใช้เครือข่ายนนทรี"
              placeholder="เช่น b63xxxxxxxx หรือ regxxx"
            />
            <InputForm
              size="text-md"
              type="password"
              title="รหัสผ่าน"
              placeholder="รหัสผ่านบัญชีผู้ใช้เครือข่ายนนทรี"
            />
            <button className="bg-gray-900 rounded-full px-4 py-3 text-white transition-all duration-300 hover:bg-lime-500">
              เข้าสู่ระบบ{" "}
            </button>
          </div>

          <div className="flex justify-between items-center gap-4 my-4">
            <span className="w-full border-t-2"></span>
            <h6>หรือ</h6>
            <span className="w-full border-t-2"></span>
          </div>
          <LoginCard>
            <FaGoogle size="1.25rem" className="mr-4" />
            <h2>เข้าสู่ระบบด้วย Google KU</h2>
          </LoginCard>
        </div>
      </div>
    </>
  );
};

export default Index;
