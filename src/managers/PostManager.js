export const fetchPosts = () => {
    return fetch("http://localhost:8000/posts?_expand=category", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    }).then((res) => res.json());
  };