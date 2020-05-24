import React from "react";

import Header from "./header";
import HomeBanner from "./HomeBanner";
import Layout from "../components/layout";

const Home = (props) => {
  return (
    <Layout>
      <Header />
      <HomeBanner />
    </Layout>
  );
};

export default Home;
