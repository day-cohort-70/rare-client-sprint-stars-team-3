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
      <ul >
        {posts.map((post) => (
          <li className="posts" key={post.id}>
            <span><strong>Title:</strong> {post.title}</span>
            <p><strong>Author:</strong> {post.username}</p>
            <p><strong>Category:</strong> {post.label}</p>
            <p><strong>Publication Date:</strong> {post.publication_date}</p>
            <div className="post-details-btn">
              <Link to={{
                pathname: `/post/${post.id}`,
                state: { postId: post.id }
              }}>View Post Details</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};