// #region Global Imports
import * as React from "react";
import { NextPage } from "next";

import { Container } from "@Styled/Home";
import { HomeContainer } from "@Components";

import { IHomePage } from "@Interfaces";

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = () => {
  return (
    <Container>
      <HomeContainer />
    </Container>
  );
};

export default Home;
