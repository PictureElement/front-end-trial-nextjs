"use client";

import Link from "next/link";

export function Navbar({ globalData }) {
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
