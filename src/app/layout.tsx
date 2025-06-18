import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { fetchGlobal } from "@/lib/api";
import { ErrorMessage } from "@/components/error-message";

const roboto = Roboto({
  weight: 'variable',
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Front-end Trial | Home",
  description: "Static implementation of a website mockup. A take-home project, part of the recruitment process for a Front-end developer position at mtc.",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  let globalData;
  let hasError = false;

  try {
    globalData = await fetchGlobal();
    if (!globalData) {
      throw new Error("Global data is undefined or null");
    }
  } catch (error) {
    console.error("Error:", error);
    hasError = true;
  }

  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        {hasError ? (
          <ErrorMessage message="Error loading global data" />
        ) : (
          <>
            {globalData && <Navbar globalData={globalData} />}
            {children}
          </>
        )}
      </body>
    </html>
  );
}
