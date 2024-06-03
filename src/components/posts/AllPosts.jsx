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
              <h2>Title: {post.title}</h2>
              <p>Author: {post.username}</p>
              <p>Category: {post.label}</p>
              <p>Publication Date: {post.publication_date}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };