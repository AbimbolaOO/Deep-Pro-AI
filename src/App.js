import React from "react";
import { Switch, Route } from "react-router-dom";

import { Header, Footer, Services, Culture, Contact } from "./components/";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1220px;
  margin: 0 auto;
  padding: 10px;
`;

function App() {
  return (
    <Main>
      <Header />
      <Switch>
        <Route exact path="/">
          <Services />
        </Route>
        <Route path="/culture">
          <Culture />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Main>
  );
}

export default App;
