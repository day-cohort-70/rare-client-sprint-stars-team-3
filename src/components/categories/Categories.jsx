import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { getAllCategories } from "../../services/categoryService.js";



export const Categories = () => {
    
    
    const [allCategories, setAllcategories]= useState([])
    
    

    useEffect(() => {
        getAllCategories().then((array) => {
          // Sort the categories alphabetically
          const sortedCategories = array.sort((a, b) => {
            const nameA = a.label?.toUpperCase(); // ignore upper and lowercase
            const nameB = b.label?.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            // name must be equal
            return 0;
          });
          // Set the sorted categories to the state
          setAllcategories(sortedCategories);
        });
      }, []);


    
    
    
    
    
    
    return <>

    <div className="categories-container">
    <div className="box">Here are some categories</div>


    <div className="categories-list-container">
        {allCategories.map(category =>{
           return(
           <li key={category.id}>
            <h2>{category.label}</h2>
            
            <Link key={category.id} to={`/categories/${category.id}`}>
                <button>edit</button>
            </Link>
            
            <button>delete</button>
            </li>) 
            
            
        })}
    </div>
    

    <div class="buttons">
       <Link to={`/category-form`}>
            <button class="button is-link">Create a Category</button>
       </Link>
    </div>

    
    
    
    </div>
    
    </>


}