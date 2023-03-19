import React from "react";
import PostsList from "../components/PostsList/PostsList";
import Header from "../components/Header/Header";

export default function HomePage() {
  return (
    <div className="page-container">
      <Header />
      <PostsList />
    </div>
  );
}
