import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import "./static/fonts/font.css";
import "./static/normalize.css";
import { StyledEngineProvider } from "@mui/joy/styles";
import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
} from "@apollo/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Favorit', "sans-serif"
  }
`;

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

root.render(
  <>
    <GlobalStyles />
    <StyledEngineProvider injectFirst>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </StyledEngineProvider>
  </>
);

reportWebVitals();
