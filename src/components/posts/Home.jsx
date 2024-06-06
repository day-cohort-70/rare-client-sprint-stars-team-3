import React, { useEffect, useState } from "react";
import { fetchPosts } from "../../services/postService.js";
import { Link } from "react-router-dom";
import editIcon from '../../assets/edit.png';
import trashIcon from '../../assets/trash.png';
import "./MyPosts.css"

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem('auth_token');


  useEffect(() => {
    fetchPosts(token).then((data) => {
      setPosts(data);
    });
  }, []);


  return (
    <div>
      <div className="title"></div>
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