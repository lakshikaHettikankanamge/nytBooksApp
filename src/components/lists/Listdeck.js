import React from "react";
import ListItem from "./ListItem";

const Listdeck = ({ isLoading, items }) => {
  return isLoading ? (
    <h1>loading..</h1>
  ) : (
    <section className=" col-12  ">
      <h1>Book Lists</h1>
      <br />
      {items.map(item => (
        <ListItem key={item.list_name} item={item}></ListItem>
      ))}
    </section>
  );
};

export default Listdeck;
