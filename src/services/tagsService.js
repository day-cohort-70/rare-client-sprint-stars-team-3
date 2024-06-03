export const getAllTags = () => {
    return fetch('http://localhost:8000/tags').then((res) => res.json());
}