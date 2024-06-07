import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { getAllCategories, getCategoryById, UpdateCategorybyId } from "../../services/categoryService.js";





export const UpdateCategory =()=>{

    const {categoryId} =useParams();
    const[category, setCategory]=useState({})
    const [label,setLabel] = useState('')

const getAndSetCategory =()=>{
    // Assuming categoryId is already a valid identifier for getCategoryById
        getCategoryById(categoryId).then((data)=>{
            setCategory(data)
        })
    }


const getAndSetLabel = ()=>{
setLabel(category.label)
}

useEffect(()=>{
     getAndSetCategory()
     
 },[])


 useEffect(()=>{
    getAndSetLabel()
 },[category])


const handleSubmit=()=>{

    const postData = {

        id: parseInt(categoryId),
        label:label
    }

    UpdateCategorybyId(postData)
}


    

    
    
    
    
    
    return <>
    <h1>Update Category</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="categoryLabel">Category Label:</label>
                <input
                placeholder={label}
                    type="text"
                    id="categoryLabel"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    required
                />
                <button type="submit">Update</button>
            </form>
    </>
}
