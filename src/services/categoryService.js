

export const createCategory =(newCategory)=>{
    return fetch(`http://localhost:8000/categories`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify(newCategory),
    })


}

export const getAllCategories =()=>{
 return fetch(`http://localhost:8000/categories`).then((res) => res.json())


}

export const getCategoryById =(CatgoryId)=>{
   return fetch(`http://localhost:8000/categories/${CatgoryId}`).then((res) => res.json())

}

export const UpdateCategorybyId = (changedCategory)=>{
    return fetch(`http://localhost:8000/categories/${changedCategory.id}`,
        {
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(changedCategory)
        }
    ).then(response => {
        if (!response.ok) {
            throw new Error('Failed to update category');
        }
        return response.json(); 
    })
    .catch(error => {
        console.error('Error updating category:', error);
    });

}