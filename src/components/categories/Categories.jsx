import React from "react";
import { Link } from "react-router-dom";

export const Categories = () => {
    return <>
    <div>Here are some categories</div>
    

    <div class="buttons">
       <Link to={`/category-form`}>
            <button class="button is-link">Create a Category</button>
       </Link>
    </div>

    
    
    
    
    
    </>


}