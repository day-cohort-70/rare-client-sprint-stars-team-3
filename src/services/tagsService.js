export const getAllTags = () => {
    return fetch('http://localhost:8000/tags').then((res) => res.json());
}

export const insertTag = async (tag) => {
    return await fetch(`http://localhost:8000/tags`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(tag),
                })
                .then(response => response)
}

export const deleteTag = (tagId) => {
    const deleteOptions = {
        method: "DELETE"
    }
    return fetch(`http://localhost:8000/tags/${tagId}`, deleteOptions).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text(); 
    })
}

export const editTag = async (tag) => {
    return await fetch(`http://localhost:8000/tags/${tag.id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(tag),
                })
                .then(response => response)
}