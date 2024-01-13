import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";

import { Navbar } from "@/lib/components/navbar";

export const metadata: Metadata = {
  title: "Holafly Test | Home",
};

const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default HomeLayout;
