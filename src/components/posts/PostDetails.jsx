import { useState, useEffect } from "react";
import { fetchPostDetails } from "../../services/postService.js";
import { useNavigate, useParams } from "react-router-dom";


function PostDetails() {
    const { postId } = useParams();
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
            <p>Posted by {post.username}</p>
        </div>
    );
}

export default PostDetails;
