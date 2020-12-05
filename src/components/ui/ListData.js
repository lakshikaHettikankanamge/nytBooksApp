import React, { useState } from "react";
import { Input } from "reactstrap";
import axios from "axios";

const ListData = ({ getQueryD, getQueryN }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const onChangeDate = q => {
    setDate(q);
    // getQueryDate(q);
  };

  const onChangeName = q => {
    setName(q);
    //getQueryName(q);
  };

  const onSubmit = e => {
    e.preventDefault();
    getQueryD(date);
    console.log(date);
    getQueryN(name);
  };

  return (
    <div className="container">
      <section className="px-3 py-3 mt-5">
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className=" col-15 col-sm-10 col-md-8 col-lg-4 mb-4 mb-lg-0">
              <input
                type="date"
                className="col-4 left "
                //placeholder='YYYY-MM-DD or "current" date'
                value={date}
                onChange={e => onChangeDate(e.target.value)}
              />
            </div>
            <Input
              type="text"
              className="form-control col-4"
              placeholder="list name"
              value={name}
              onChange={e => onChangeName(e.target.value)}
            />

            <input
              type="submit"
              value="Go"
              className="btn btn-info btn-block mt-2 pb-3 pt-2 width-60%"
              style={{ fontFamily: "Oxanium" }}
            />
            {/* </Link> */}
            {/* <select
          onChange={e => onChangeName(e.target.value)}
          defaultValue={"hardcover-fiction"}
        >
          <option value="hardcover-fiction">hardcover-fiction</option>
          <option value="Apple">Apple</option>
          <option value="Xiaomi">Xiaomi</option>
          <option value="Nokia">Nokia</option>
          <option value="Huawei">Huawei</option>
        </select> */}
          </div>
        </form>
      </section>
    </div>
  );
};

export default ListData;
