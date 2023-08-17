import React from "react";
import { useSelector } from "react-redux";

const UserInfo = () => {
  const selectedPost = useSelector((state) => state.posts.selectedPost);

  return (
    <div>
      {selectedPost ? (
        <div>
          <h2>Post:</h2>
          <p>Title: {selectedPost.title}</p>
          <p>Body: {selectedPost.body}</p>
          <h2>User Info:</h2>
          <p>User ID: {selectedPost.userId}</p>
          {/* Здесь вы можете выполнить дополнительный запрос для получения информации о пользователе */}
        </div>
      ) : (
        <p>Select a post to view user info</p>
      )}
    </div>
  );
};

export default UserInfo;
