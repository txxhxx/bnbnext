import React from "react";
import styled from "styled-components";

import { getCollections, getProducts, getStories } from "~/lib/api/test";

const Container = styled.div`
  header {
    width: 100%;
    height: 56px;
    background-color: #000;
  }
`;

const Home = () => {
  React.useEffect(() => {
    getCollections().then((collection) => {
      console.log("Collection: ", collection.data);
    });

    getProducts().then((products) => {
      console.log("Products: ", products.data);
    });

    getStories("feature-believer").then((stories) => {
      console.log("Stories: ", stories.data);
    });
  }, []);

  return (
    <React.Fragment>
      <Container>
        <header>header</header>
      </Container>
    </React.Fragment>
  );
};

export default Home;
