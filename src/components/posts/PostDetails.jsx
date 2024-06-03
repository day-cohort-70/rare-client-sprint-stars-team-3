import { useState, useEffect } from "react";
import { fetchPostDetails } from "../services/postService.jsx";
import { useNavigate, useParams } from "react-router-dom";


function PostDetails({ postId }) {
    const [post, setPost] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await fetchPostDetails(postId);
        setPost(data);
      };
  
      fetchData();
    }, [postId]);
  
    if (!post) {
      return <div>Loading...</div>;
    }
  
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.image_url}</p>
            <p>{post.content}</p>
            <p>Date Published: {post.publication_date}</p>
            <p>Posted by {post.first_name} {post.last_name}</p>
        </div>
    );
}

export default PostDetails;
