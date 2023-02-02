import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const history = useHistory();
  const onSubmit = () => {
    axios
      .post("http://localhost:3001/posts", {
        title,
        body,
      })
      .then(() => {
        history.push("/blogs");
      });
  };
  return (
    <div className="container">
      <h1>Create a blog post</h1>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="form-control"
          value={title}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Body</label>
        <textarea
          onChange={(e) => {
            setBody(e.target.value);
          }}
          className="form-control"
          value={body}
          rows="20"
        />
      </div>
      <button className="btn btn-primary" onClick={onSubmit}>
        Post
      </button>
    </div>
  );
};

export default BlogForm;
