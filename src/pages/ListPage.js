import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const ListPage = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = () => {
    axios.get("http://localhost:3001/posts").then((res) => {
      setPosts(res.data);
    });
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      <h1>List Page</h1>
      {posts.map((post) => {
        return <div key={post.id}>{post.title}</div>;
      })}
    </div>
  );
};

export default ListPage;
