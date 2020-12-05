import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Top from "./components/ui/Top";
import Listdeck from "./components/lists/Listdeck";
import ListData from "./components/ui/ListData";
import BookByListDate from "./components/books/BookByListDate";

const App = () => {
  const [items, setItems] = useState([]);
  const [items2, setItems2] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(true);
  const [queryDate, setQueryD] = useState("current");
  const [queryName, setQueryN] = useState("hardcover-fiction");

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=vaJJPvO3H3nrPFJO4BOB1IWIDM74Y1rG`
      );

      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, []);

  /* useEffect(() => {
    const fetchItems = async () => {
      setIsLoading2(true);
      const result = await axios(
        `https://api.nytimes.com/svc/books/v3/lists/${queryDate}/${queryName}.json?api-key=vaJJPvO3H3nrPFJO4BOB1IWIDM74Y1rG`
      );

      //console.log(result.data);
      setItems2(result.data);
      setIsLoading2(false);
    };

    fetchItems();
  }, [{ queryDate, queryName }]); */

  return (
    <div className="container">
      <Top />
      <Listdeck isLoading={isLoading} items={items.results} />

      {/* <ListData getQueryD={q => setQueryD(q)} getQueryN={q => setQueryN(q)} />
      <BookByListDate isLoading2={isLoading2} items2={items2} /> */}
    </div>
  );
};

export default App;
