import React from "react";
import { findBook } from "./lib/Api";

class SingleBook extends React.Component {
  state = {
    book: "",
    loaded: false,
    reveal: false
  };

  changeImageSize = url => {
    const imageUrl = url.replace("zoom=5", "zoom=3");
    return imageUrl;
  };

  componentDidMount() {
    findBook(this.props.id).then(book => {
      this.setState({ book });
      setTimeout(() => {
        this.setState({ loaded: true });
      }, 1000);

      setTimeout(() => {
        this.setState({ reveal: true });
      }, 1020);
    });
  }
  render() {
    const {
      title,
      authors,
      averageRating,
      imageLinks,
      description,
      publisher,
      publishedDate,
      industryIdentifiers,
      infoLink
    } = this.state.loaded ? this.state.book.volumeInfo : "";
    return (
      <React.Fragment>
        {this.state.loaded ? (
          <section
            className={
              "single__book " +
              (this.state.reveal ? "single__book--loaded" : " ")
            }
          >
            <div className="container">
              <div className="single__book--img">
                <img
                  src={this.changeImageSize(imageLinks.smallThumbnail)}
                  alt=""
                />
              </div>
              <div className="single__book--details">
                <h2>{title}</h2>
                <p>{description}</p>
                <ul>
                  <li>
                    <h6>Author/s:</h6>
                    <p>{authors}</p>
                  </li>
                  <li>
                    <h6>Publisher:</h6>
                    <p>{publisher}</p>
                  </li>
                  <li>
                    <h6>Published Date:</h6>
                    <p>{publishedDate}</p>
                  </li>
                  <li>
                    <h6>Average Rating:</h6>
                    <p>{averageRating}</p>
                  </li>
                  <li>
                    <h6>ISBN/s:</h6>
                    {industryIdentifiers.map(identifier => (
                      <p key={identifier.identifier}>{identifier.identifier}</p>
                    ))}
                  </li>
                </ul>
                <a href={infoLink} className="single__book--link">
                  More Information
                </a>
              </div>
            </div>
          </section>
        ) : (
          <div className="single__book--loading">
            <ul>
              <li />
              <li />
              <li />
            </ul>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default SingleBook;
