import { useEffect, useState } from "react"
import "./category.css"
import { createCategory } from "../../services/categoryService.js"
import { Link } from "react-router-dom"

export const CategoryForm = (currentUser)=>{

    const [category, setCategory] = useState('')


    const handleSave = async () => {
        const postData = {
            label:category
        };
        try {
            await createCategory(postData)
        } catch (error) {
            console.log("meal not submitted")
        }


    }




    return(<>
    
    
<div className="category-form-container">
    
    
    <div className="category-box-container">
         <div className="box has-background-info is-size-3"><h1>create a new category below</h1></div>
    </div>
    <div className="category-input-container">
        <input class="input is-link" type="text" placeholder="New Category Here!" value={category} onChange={(event) => setCategory(event.target.value)}/>
    </div>
    <div>
        <Link to={"/categories"}>
          <button onClick={handleSave} className="button is-primary">submit</button>
        </Link>
    </div>

    
    
</div> 
    </>)

}