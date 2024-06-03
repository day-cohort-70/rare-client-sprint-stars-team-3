import React, { useEffect, useState } from "react";
import { fetchPosts } from "../../managers/PostManager.js";
import "./AllPosts.css"

export const AllPosts = () => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      fetchPosts().then((data) => {
        setPosts(data);
      });
    }, []);
  
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
            </li>
          ))}
        </ul>
      </div>
    );
  };