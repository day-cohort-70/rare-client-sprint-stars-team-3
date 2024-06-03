import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { getAllCategories } from "../../managers/CategoryManager.js";



export const Categories = () => {
    
    
    const [allCategories, setAllcategories]= useState([])
    
    

  useEffect(()=>{
    getAllCategories().then(array=>{
        setAllcategories(array)
    })
    console.log("categories are set in state")
  })


    
    
    
    
    
    
    return <>
    <div>Here are some categories</div>
    

    <div class="buttons">
       <Link to={`/category-form`}>
            <button class="button is-link">Create a Category</button>
       </Link>
    </div>

    
    
    
    
    
    </>


}