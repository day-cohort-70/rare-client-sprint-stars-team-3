import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../services/postService";
import { getAllCategories } from "../../services/categoryService.js";
import "./CreatePost.css"

export const CreatePost = ({ token }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [image_url, setHeaderImageURL] = useState("");
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  useEffect(() => {
    setPublicationDate(new Date().toISOString());
  }, []);

  
  const handleSubmit = async (event) => {
      event.preventDefault();
      const userId = token;
      
    const postData = {
      user_id: userId,
      category_id: category,
      title,
      publicationDate: publicationDate,
      image_url,
      content,
      approved: 1,
    };

    createPost(postData).then((newPost) => {
      console.log("New post created:", newPost);
      navigate(`/posts/${newPost.id}`);
      setCategory("default");
    });
  };

  return (
    <div className="newpost">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
    <label>
      Header Image URL (Optional):
      <input
        type="text"
        value={image_url}
        onChange={(event) => setHeaderImageURL(event.target.value)}
      />
    </label>
        <label>
          Content:
          <textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </label>
        <label>
          Category:
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="default">Select</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.label}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">Save</button>
      </form>
    </div>
  );
};
