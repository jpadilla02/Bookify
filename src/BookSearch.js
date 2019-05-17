import React from "react";
import Search from "./Search";
import Results from "./Results";
import { findBooks } from "./lib/Api";

class BookSearch extends React.Component {
  state = {
    books: [],
    results: false,
    currentIndex: 0
  };

  handleSearch = event => {
    event.preventDefault();
    const input = document.querySelector('input[type="text"]');
    const value = input.value;
    findBooks(value, this.state.currentIndex).then(books =>
      this.setState({
        books: books.items,
        results: true,
        currentIndex: books.items.length - 1
      })
    );
  };

  handleNextPage = () => {
    const input = document.querySelector('input[type="text"]');
    const value = input.value;
    findBooks(value, this.state.currentIndex + 1).then(books =>
      this.setState({
        books: books.items,
        currentIndex: this.state.currentIndex + 40
      })
    );
  };

  handlePrevPage = () => {
    const input = document.querySelector('input[type="text"]');
    const value = input.value;
    findBooks(value, this.state.currentIndex - 40).then(books =>
      this.setState({
        books: books.items,
        currentIndex: this.state.currentIndex - 40
      })
    );
  };

  render() {
    return (
      <div className="app__wrapper">
        <Search
          position={this.state.results ? "relative" : "absolute"}
          handleSearch={this.handleSearch}
        />
        <Results
          className={this.state.results ? "--show" : "--hide"}
          books={this.state.books}
          handleNextPage={this.handleNextPage}
          handlePrevPage={this.handlePrevPage}
          currentIndex={this.state.currentIndex}
        />
      </div>
    );
  }
}

export default BookSearch;
