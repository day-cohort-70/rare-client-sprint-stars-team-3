import React from "react";
import { useEffect, useState } from "react";
import { getAllTags } from "../../services/tagsService";
import trash from '../../assets/trash.png'
import edit from '../../assets/edit.png'
import './Tags.css'
import { Link } from "react-router-dom";

export const Tags = ({token}) => {
    const [tags, setTags] = useState([]);
    const [newTagName, setNewTagName] = useState("");

    useEffect(() => {
        getAllTags().then(tags => {
            //if tags is not empty, sort alphabetically and set in state
            if (tags.length) {
                const sortedTags = tags.sort((a, b) => {
                    if (typeof a.label === 'string' && typeof b.label === 'string') {
                      return a.label.localeCompare(b.label);
                    }
                    return 0; 
                  });
                setTags(sortedTags);
            }
            else {
                setTags(tags);
            }
        });
    }, []);

    useEffect(() => {

    }, [])
    
    const handleInputChange = (event) => {
        setNewTagName(event.target.value);
    }

    const handleSubmit = (event) => {
        console.log(newTagName);
    }
    
    return (
    <div className="tag-page">
    <div className="tags-container">
        {tags.map(tag => (
            
            <div className="tag-container" key={tag.id}>
                <img src={edit} alt="edit icon" style={{height: '12px', marginRight: '8px'}}/>
                <img src={trash} alt="trash icon" style={{height: '12px', marginRight: '8px'}}/>
                <div className="tag">{tag.label}</div>
            </div>
        ))}
        </div>
        <div className="tag-form">
            <h2>Create a new tag:</h2>
            <input type="text" value={newTagName} onChange={handleInputChange}/>
            <button type="submit" onClick={handleSubmit}>Create</button>
        </div>
    
    </div>)
}