export const fetchPosts = () => {
    return fetch("http://localhost:8000/posts?_expand=category", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    }).then((res) => res.json());
  };

export const getAllPosts = async () => {
    return fetch("http://localhost:8000/posts").then((res) =>
        res.json()
    );
};

export const fetchPostDetails = async (postId) => {
    try {
        const response = await fetch(`http://localhost:8000/posts/${postId}?_expand=user`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
        throw error; // Rethrow the error to handle it in the calling component
    }
}
}

export const fetchUserPosts = async (id) => {
  return await fetch(`http://localhost:8000/userposts/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  }).then((res) => res.json());
};
