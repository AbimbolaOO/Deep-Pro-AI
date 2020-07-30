import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Culture from "./components/Culture";
import Contacts from "./components/Contact";

import "./App.css";

function App() {
  return (
    <div className="grid-layout content-font">
      <Header />
      <Switch>
        <Route exact path="/">
          <Services />
        </Route>
        <Route path="/culture">
          <Culture />
        </Route>
        <Route path="/contact">
          <Contacts />
        </Route>
      </Switch>
      <Footer />
      <div className="copy-right">DeepProAI &#169; 2020</div>
    </div>
  );
}

export default App;
