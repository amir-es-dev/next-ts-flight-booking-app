import MainLayout from "@/layout/MainLayout";
import HomeTemplate from "@/temp/HomeTemplate";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <MainLayout>
        <HomeTemplate />
      </MainLayout>
    </>
  );
};

export default Home;
