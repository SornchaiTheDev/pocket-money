import React from "react";
import Page from "layout/Page";
import Image from "next/image";
import BacktoHome from "@components/BacktoHome";
function Profile() {
  return (
    <Page>
      <div className="w-full bg-lime-500 h-[30vh] relative">
        <div className="absolute -bottom-16 flex justify-center w-full">
          <div className="w-36 h-36 overflow-hidden rounded-full relative border-4 border-white">
            <Image
              placeholder="blur"
              blurDataURL="https://cdn.discordapp.com/avatars/274171730455691264/d44a287d42b5c63f7a3284f126db722a.png"
              src="https://cdn.discordapp.com/avatars/274171730455691264/d44a287d42b5c63f7a3284f126db722a.png"
              layout="fill"
            />
          </div>
        </div>
        <BacktoHome className="px-4" />
      </div>
    </Page>
  );
}

export default Profile;
