import React from "react";
import Books from "./Books";

const BookByListDate = ({ isLoading2, items2 }) => {
  return isLoading2 ? (
    <h1 style={{ color: "white" }}>loading..</h1>
  ) : (
    <section className=" col-12  ">
      {items2.results.books.map(item => (
        <Books key={item.title} item={item}></Books>
      ))}
    </section>
  );
};

export default BookByListDate;
