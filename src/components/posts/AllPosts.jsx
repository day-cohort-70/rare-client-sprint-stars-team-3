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
      <div className="posts">
        <h1>All Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.username}</p>
              <p>{post.label}</p>
              <p>{post.publication_date}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };