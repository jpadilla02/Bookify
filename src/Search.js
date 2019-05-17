import React from "react";

class Search extends React.Component {
  render() {
    return (
      <section
        className={`book__search book__search--${this.props.position ||
          this.props.className}`}
      >
        <h2>Book Search</h2>
        <div className="book__searchWrapper">
          <form onSubmit={event => this.props.handleSearch(event)}>
            <input type="text" />
            <input type="submit" />
          </form>
        </div>
      </section>
    );
  }
}

export default Search;
