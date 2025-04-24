import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import AllBooks from "./Pages/AllBooks";
import AddBook from "./Pages/books/AddBook";
import SingleBooks from "./Pages/books/SingleBooks";

import MainLayout from "./layouts/MainLayout";
import EditBook from "./Pages/books/EditBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path=":id" element={<SingleBooks />} />
          <Route path="edit-book/:id" element={<EditBook />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="add-books" element={<AddBook />} />
          <Route path="all-books">
            <Route index element={<AllBooks />} />
            <Route path=":id" element={<SingleBooks />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
