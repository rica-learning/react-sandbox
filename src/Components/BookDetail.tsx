import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Book } from "../Pages/BookList";

export default function AuthorDetail() {
  let { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://1fe1m.sse.codesandbox.io/api/books/${id}`)
      .then((res) => res.json())
      .then(setData);
  }, [id]);

  let book = data as Book;

  return (
    <>
      {book.title ? (
        <>
          <h1> {book.title} </h1>
          <h2> Author : {book.author} </h2>
        </>
      ) : (
        <h1>Loading . . . </h1>
      )}
    </>
  );
}
