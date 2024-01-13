import { NextPage } from "next";

import { HomeContainer } from "@/lib/containers/home-container";

const HomePage: NextPage = () => {
  return (
    <section className="p-8">
      <HomeContainer />
    </section>
  );
};

export default HomePage;
