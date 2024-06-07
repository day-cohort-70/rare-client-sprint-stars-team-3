import { useEffect, useState } from "react";
import { fetchPosts } from "../../services/postService.js";
import { Link } from "react-router-dom";
import "./AllPosts.css"

export const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  //const [postId, setPostId] = useState("")

  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data);
    });
  }, []);

 // useEffect(() => {
 //   posts.map(post => (
 //     (setPostId(post.id))))
 // })

  return (
     <div>
      <div className="title">All Posts</div>
      <div className="posts-grid">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <div className="post-attribute">
              <strong>Title:</strong> {post.title}
            </div>
            <div className="post-attribute">
              <strong>Author:</strong> {post.username}
            </div>
            <div className="post-attribute">
              <strong>Category:</strong> {post.label}
            </div>
            <div className="post-attribute">
              <strong>Publication Date:</strong> {post.publication_date}
            </div>
            <div className="post-attribute">
              <div className="checkbox-container">
                <input type="checkbox" id={`postCheckbox_${post.id}`} />
                <label className="checkbox-label" htmlFor={`postCheckbox_${post.id}`}>Approved</label>
              </div>
            </div>
            <div className="post-details-btn">
              <Link to={{
                pathname: `/post/${post.id}`,
                state: { postId: post.id }
              }}>View Post Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};