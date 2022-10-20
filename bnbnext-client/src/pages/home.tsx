import React from "react";
import styled from "styled-components";

import Masonry from "@mui/lab/Masonry";

import { Header } from "~/components/Header";
import Collection from "~/components/collection/Collection";

const Container = styled.div`
  margin-top: 96px;
`;

const Story = styled.div`
  background-color: black;
  aspect-ratio: 1 / 1;
  min-width: 66.6%;
`;

const home = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Masonry columns={3} spacing={1}>
          <Collection />
          <Collection />
          <Collection />
          <Collection />
          <Story />
        </Masonry>
      </Container>
    </React.Fragment>
  );
};

export default home;
