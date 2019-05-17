import React from "react";
import Book from "./Book";

class Results extends React.Component {
  // state = {
  //   selected: []
  // };

  // handleClick = (id, selected) => {
  //   const selections = [...this.state.selected];
  //   selections[id] = selected;
  //   console.log(id);
  //   console.log(selections);
  //   this.setState({ selected: selections });
  // };
  render() {
    return (
      <div className={`book__results book__results${this.props.className}`}>
        <div className="container">
          <ul className="book__list">
            {this.props.books.map(book => (
              <Book
                key={book.id}
                id={book.id}
                volumeInfo={book.volumeInfo}
                selfLink={book.selfLink}
              />
            ))}
          </ul>
          <div className="pagination">
            <button
              className="pagination__prev"
              disabled={this.props.currentIndex === 39 ? true : false}
              onClick={this.props.handlePrevPage}
            >
              Previous
            </button>
            <button
              className="pagination__next"
              onClick={this.props.handleNextPage}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
