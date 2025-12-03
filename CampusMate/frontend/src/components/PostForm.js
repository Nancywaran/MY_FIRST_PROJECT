import React, { useState } from "react";

function PostForm({ addPost }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") return;

    addPost(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <textarea
        style={styles.textarea}
        placeholder="Write an announcement or event..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit" style={styles.button}>Post</button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "20px",
  },
  textarea: {
    padding: "10px",
    fontSize: "16px",
    marginBottom: "10px",
    height: "80px",
  },
  button: {
    padding: "10px",
    fontSize: "18px",
    backgroundColor: "#1a1a1a",
    color: "white",
    border: "none",
    cursor: "pointer",
  }
};

export default PostForm;
