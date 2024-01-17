import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, desc, imageUrl, newsUrl, source, author, date } = this.props;
    return (
      <div>
        <div className="card d-flex" style={{ width: "18rem" }}>
         {/* <div className="  justify-content-end"> */}
         <span className="position-absolute top-0 badge rounded-pill bg-danger" style={{zIndex: "1"}}>
            {source}
          </span>
         {/* </div> */}
          <div className="card-img-div" style={{ height: "200px" }}>
            <img
              src={imageUrl}
              style={{ height: "100%" }}
              className="card-img-top"
              alt="..."
            />
          </div>
          <div
            className={`card-body bg-${this.props.mode} text-${this.props.textColor}`}
          >
            <h5 className="card-title" style={{ height: "75px" }}>
              {title}
            </h5>
            <p className="card-text" style={{ height: "75px" }}>
              {desc}
            </p>
            <p className="card-text">
              <small className={`${this.props.textColor}`}>
                By {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className={`btn btn-warning text-${this.props.textColor}`}
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
