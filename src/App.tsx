import React from "react";
import { Route, Routes } from "react-router";
import BookList from "./Pages/BookList";
import BookContent from "./Pages/BookContent";
import AuthorDetail from "./Components/AuthorDetail";
import BookDetail from "./Components/BookDetail";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<BookContent />}>
          <Route path="" element={<BookDetail />} />
          <Route path="/author" element={<AuthorDetail />} />
        </Route>
      </Routes>
    </div>
  );
}
