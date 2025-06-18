import { z } from "zod/v4";
import { globalDataSchema } from "@/lib/schemas";
import { BtnOutlined } from "./btn-outlined";

type GlobalData = z.infer<typeof globalDataSchema>;
type Props = {
  globalData: GlobalData;
};

export function Navbar({ globalData }: Props) {
  return (
    <nav className="grid grid-cols-5 bg-black">
      <div className="border border-white text-white flex items-center justify-center">
        1
      </div>
      <div className="border border-white text-white flex items-center justify-center">
        2
      </div>
      <div className="border border-white text-white flex items-center justify-center">
        3
      </div>
      <div className="border border-white text-white flex items-center justify-center">
        4
      </div>
      <div className="border border-white text-white flex items-center justify-center">
        <BtnOutlined
          label={globalData.navbar.cta.label}
          url={globalData.navbar.cta.url}
          openLinkInNewTab={globalData.navbar.cta.openLinkInNewTab}
          showIcon={globalData.navbar.cta.showIcon}
          lucideIconName={globalData.navbar.cta.lucideIconName}
        />
      </div>
    </nav>
  );
}
