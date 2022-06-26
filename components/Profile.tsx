import React from "react";
import Card from "./Card";
import Image from "next/image";
import { useSession } from "next-auth/react";
function Profile() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <Card className="p-4 flex justify-between col-span-2">
      <div>
        <h2 className="text-xl">สวัสดี !</h2>
        <h1 className="text-3xl font-medium">ศรชัย สมสกุล</h1>
      </div>
      <div
        className="w-12 h-12 rounded-full overflow-hidden relative"
        style={{ border: "1px solid grey" }}
      >
        <Image
          placeholder="blur"
          blurDataURL="https://cdn.discordapp.com/avatars/274171730455691264/d44a287d42b5c63f7a3284f126db722a.png"
          src="https://cdn.discordapp.com/avatars/274171730455691264/d44a287d42b5c63f7a3284f126db722a.png"
          layout="fill"
        />
      </div>
    </Card>
  );
}

export default Profile;
