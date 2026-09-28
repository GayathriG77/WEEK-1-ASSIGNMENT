import { useState } from "react";
import Header from "./components/Header";
import PostCard from "./components/PostCard";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import posts from "./data/posts.json";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || post.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <Header />

      <div className="search-container">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <Filter
          category={category}
          setCategory={setCategory}
        />
      </div>

      <div className="posts-container">
  {filteredPosts.length > 0 ? (
    filteredPosts.map((post) => (
      <PostCard
        key={post.id}
        post={post}
      />
    ))
  ) : (
    <p className="no-posts">No posts found.</p>
  )}
</div>
    </div>
  );
}

export default App;