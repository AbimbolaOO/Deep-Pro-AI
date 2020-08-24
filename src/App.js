import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import { Header, Footer, Services } from "./components/";
const Culture = lazy(() => import("./components/Culture"));
const Contact = lazy(() => import("./components/Contact"));

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
        <Suspense fallback={<div>Looding...</div>}>
          <Route path="/culture" component={Culture} />
          <Route path="/contact" component={Contact} />
        </Suspense>
      </Switch>
      <Footer />
    </Main>
  );
}

export default App;
