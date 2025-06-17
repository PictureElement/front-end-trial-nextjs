import { z } from "zod/v4";
import { globalDataSchema } from "@/lib/schemas";
import Link from "next/link";

type GlobalData = z.infer<typeof globalDataSchema>;
type Props = {
  globalData: GlobalData;
};

export function Navbar({ globalData }: Props) {
  return (
    <nav className="grid grid-cols-5">
      <div className="border">
        1
      </div>
      <div className="border">
        2
      </div>
      <div className="border">
        3
      </div>
      <div className="border">
        4
      </div>
      <div className="border">
        <Link href={globalData.navbar.cta.url} target={globalData.navbar.cta.openLinkInNewTab ? "_blank" : "_self"}>
          {globalData.navbar.cta.label}
        </Link>
      </div>
    </nav>
  );
}
