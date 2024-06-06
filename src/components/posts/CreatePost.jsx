import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../../services/postService';


export const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [publicationDate, setPublicationDate] = useState(new Date().toISOString());
  const [headerImageURL, setHeaderImageURL] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const postData = {
      title,
      content,
      category,
      publicationDate,
      headerImageURL,
    };

    createPost(postData).then(newPost => {
    console.log('New post created:', newPost);
    navigate(`/posts/${newPost.id}`);
      
    })
  };

  return (
    <div>
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
          Content:
          <textarea
            value={content}
            onChange={(event) => setContent(event.target.value)} 
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={(event) => setCategory(event.target.value)} 
          />
        </label>
        <label>
          Publication Date:
          <input
            type="date"
            value={publicationDate}
            onChange={(event) => setPublicationDate(event.target.value)} 
          />
        </label>
        <label>
          Header Image URL (Optional):
          <input
            type="text"
            value={headerImageURL}
            onChange={(event) => setHeaderImageURL(event.target.value)} 
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};