import Image from "next/image";
import TodayUsed from "./UsedStat";
import ViewAs from "./ViewAs";

function Header() {
  return (
    <div
      className="w-full px-4 md:px-10 py-10 pb-20 relative"
      style={{
        background:
          "linear-gradient(0deg, rgba(92,226,80,1) 0%, rgba(52,218,37,1) 100%)",
      }}
    >
      <div className="flex w-full justify-between items-center">
        <div>
          <h2 className="text-lg text-white">สวัสดี !</h2>
          <h1 className="text-2xl text-white font-bold mt-2">_cho_kun_</h1>
        </div>
        <div className="w-14 h-14 rounded-full overflow-hidden relative">
          <Image
            placeholder="blur"
            blurDataURL="https://cdn.discordapp.com/avatars/274171730455691264/d44a287d42b5c63f7a3284f126db722a.png"
            src="https://cdn.discordapp.com/avatars/274171730455691264/d44a287d42b5c63f7a3284f126db722a.png"
            layout="fill"
          />
        </div>
      </div>
      <TodayUsed />
    </div>
  );
}

export default Header;
