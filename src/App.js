import React from "react";
import BookSearch from "./BookSearch";
import SingleBook from "./SingleBook";
import { Router } from "@reach/router";
import Header from "./Header";
import "./scss/app.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <BookSearch path="/" />
          <SingleBook path="/book/:id" />
        </Router>
      </div>
    );
  }
}

export default App;
