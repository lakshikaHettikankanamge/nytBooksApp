import React from "react";
//import Spinner from '../ui/Spinner'

const ListItem = ({ item }) => {
  return (
    <div>
      <div className=" col-12 ">
        <h3>{item.list_name}</h3>

        <div className="col-4">
          <strong>last published date</strong> {item.newest_published_date}
        </div>
        <div className="col-4">
          <strong>newly published</strong> {item.newest_published_date}
        </div>
        <br />
      </div>
    </div>
  );
};

export default ListItem;
