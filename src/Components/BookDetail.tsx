import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function AuthorDetail() {
  let { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://1fe1m.sse.codesandbox.io/api/books/${id}`)
      .then((res) => res.json())
      .then(setData);
  }, [id]);

  return (
    <>
      {data.title ? (
        <>
          <h1> {data.title} </h1>
          <h2> Author : {data.author} </h2>
        </>
      ) : (
        <h1>Loading . . . </h1>
      )}
    </>
  );
}
