import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { GlobalProvider } from "@/lib/providers/global-provider";

import "../lib/styles/globals.css";
import { FC, PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Holafly Test",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "bg-slate-200")}>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
};

export default RootLayout;
