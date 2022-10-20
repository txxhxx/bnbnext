import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  aspect-ratio: 1 / 1;
  /* min-width: 33.3%; */

  div {
    width: 100%;
    height: 100%;
    background-color: #f4f4f4;
  }
`;

const Collection = () => {
  return (
    <Container>
      <div></div>
    </Container>
  );
};

export default Collection;
