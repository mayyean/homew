import React from "react";
import PostList from "./components/PostList";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <div className="App">
      <h1>Async Posts App</h1>
      <div className="content">
        <PostList />
        <UserInfo />
      </div>
    </div>
  );
}

export default App;
