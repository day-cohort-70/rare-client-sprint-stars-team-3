import { useState, useEffect } from "react";
import { fetchPostDetails } from "../../services/postService.js";
import { useNavigate, useParams } from "react-router-dom";
import editIcon from '../../assets/edit.png';
import trashIcon from '../../assets/trash.png';
import './PostDetails.css'
export const PostDetails = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await fetchPostDetails(postId);
        setPost(data);
      };
  
      fetchData();
    }, [postId]);
    
    const showComments = (id) => {
      console.log(`Showing comments for post ${id}`);
    }

    if (!post) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="container">
        <div className="post-container__details">
            <div className="post-title">
              <div className="post-title__icons">
                {/* TODO: Add links and functions to icon buttons */}
                    <img src={editIcon} alt="Edit" className="icon" />
                    <img src={trashIcon} alt="Delete" className="icon" />
              </div>
              <div className="post-title__title">
                <h2>{post.title}</h2>
              </div>
              <div className="post-title__category">
                <h2>{`Category ID: ${post.category_id}`}</h2>
              </div>
            </div>
          <div className="post-image__container">
            <img src={post.image_url} alt={`Post ${post.id}`} className="post-image" />
          </div>
          <div className="post-footer">
            <div className="post-footer__author">
              <p>By {post.username}</p>
            </div>
            <div className="post-footer__btn-comments">
              <button className="btn-comments" onClick={showComments(post.id)}>Show Comments</button>
            </div>
            <div className="post-footer__reactions-container">
              {/* TODO: Add reactions */}
              <div className="post-footer__reactions">2 &#128513; 4 &#128077;</div>
            </div>
          </div>
            <p>{post.content}</p>
            <p>Date Published: {post.publication_date}</p>
            
        </div>
        <div className="tags-container">

        </div>
      </div>
    );
}

