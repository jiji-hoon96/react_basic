import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Card from "../components/Card";

const ListPage = () => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  const getPosts = () => {
    axios.get("http://localhost:3001/posts").then((res) => {
      setPosts(res.data);
    });
  };
  const deleteBlog = (e, id) => {
    e.stopPropagation();
    axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    });
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="mt-4">
      <div className="d-flex justify-content-between">
        <h1>List Page</h1>
        <Link to="blogs/create">
          <button className="btn btn-success">만들기</button>
        </Link>
      </div>

      {posts.map((post) => {
        return (
          <Card
            key={post.id}
            title={post.title}
            onClick={() => history.push("/blogs/edit")}
          >
            <div onClick={(e) => deleteBlog(e, post.id)}>
              <button className="btn btn-danger btn-sm">Delete</button>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default ListPage;
