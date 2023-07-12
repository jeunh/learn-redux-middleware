import React from "react";
import { Route, Routes } from "react-router-dom";
import PostListPage from "./Pages/PostListPage";
import PostPage from "./Pages/PostPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<PostListPage />} />
        <Route path=":id" element={<PostPage />} />
      </Routes>
    </>
  );
}

export default App;
