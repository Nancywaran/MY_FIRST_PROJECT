import React from "react";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.title}>Campus Mate</h2>
    </nav>
  );
}

const styles = {
  nav: {
    padding: "15px",
    backgroundColor: "#1a1a1a",
    color: "white",
  },
  title: {
    margin: 0,
  },
};

export default Navbar;
