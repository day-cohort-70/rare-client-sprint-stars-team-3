

export const createCategory =(newCategory)=>{
    return fetch(`http://localhost:8000/categories`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify(newCategory),
    })


}