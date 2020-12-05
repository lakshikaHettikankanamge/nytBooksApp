import React from "react";

const Books = item => {
  return (
    <div>
      <div
        className="card mx-auto mt-3"
        style={{ width: "13rem", height: "23rem" }}
      >
        <img
          className="card-img-top img-fluid img-thumbnail px-1 "
          src={item.book_image}
          alt=""
          style={{ width: "13rem", height: "16rem" }}
        ></img>

        <div className="card-body">
          <h6
            className="card-title pt-1"
            style={{ fontWeight: "bold" }}
          >{`${item.title} `}</h6>
          <p className="card-text">{item.author}</p>
        </div>
      </div>
    </div>
  );
};

export default Books;
