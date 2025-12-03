import Navbar from "./components/Navbar";
import PostForm from "./components/PostForm";
import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts");
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  const addPost = (text) => {
    const newPosts = [...posts, text];
    setPosts(newPosts);
    localStorage.setItem("posts", JSON.stringify(newPosts));
  };

  return (
    <div>
      <Navbar />
      <h1>Campus Mate</h1>
      <PostForm addPost={addPost} />
      
      {posts.map((post, index) => (
        <div key={index} style={styles.postCard}>
          <p>{post}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  postCard: {
    backgroundColor: "#f2f2f2",
    padding: "15px",
    margin: "10px 20px",
    borderRadius: "8px",
  }
};

export default App;
