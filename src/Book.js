import React from "react";
import { Link } from "@reach/router";

class Book extends React.Component {
  render() {
    return (
      <li className="book__list--item">
        <Link to={`/book/${this.props.id}`}>
          <div className="book__single">
            <img
              src={
                this.props.volumeInfo.imageLinks
                  ? this.props.volumeInfo.imageLinks.thumbnail
                  : "https://www.zumlume.com/assets/frontend/images/default-book.png"
              }
              alt=""
            />
          </div>
        </Link>
      </li>
    );
  }
}

export default Book;
