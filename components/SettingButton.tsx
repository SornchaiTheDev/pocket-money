import { TbSettings } from "react-icons/tb";
import { useRouter } from "next/router";

function SettingButton() {
  const router = useRouter();
  const handleOnRouteToSetting = () => {
    router.push("/settings");
  };
  return (
    <button
      className="bg-white p-2 rounded-full"
      onClick={handleOnRouteToSetting}
    >
      <TbSettings size="1.25rem" />
    </button>
  );
}

export default SettingButton;
