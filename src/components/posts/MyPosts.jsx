import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import editIcon from '../../assets/edit.png';
import trashIcon from '../../assets/trash.png';
import "./MyPosts.css"
import { fetchUserPosts } from "../../services/postService.js";

export const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem('auth_token');


  useEffect(() => {
    fetchUserPosts(token).then((data) => {
      setPosts(data);
    });
  }, []);


  return (
    <div>
      <div className="title">My Posts</div>
      <ul >
      {posts.map((post) => (
    <div className="post-container" key={post.id}>
        
        <div className="post-info">
            <div className="top-section">
                <div className="post-title">{post.title}</div>
                <div className="post-date">{post.publication_date}</div>
            </div>
            <img src={post.image_url} alt={`Post ${post.id}`} className="post-image" />
            <div className="bottom-section">
                <div className="post-username">{post.username}</div>
                <div className="reactions">
                    <span># reaction count</span>
                    <img src={editIcon} alt="Edit" className="icon" />
                    <img src={trashIcon} alt="Delete" className="icon" />
                </div>
            </div>
        </div>
    </div>
))}
      </ul>
    </div>
  );
};