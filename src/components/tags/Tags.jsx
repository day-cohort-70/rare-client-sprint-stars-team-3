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
    const [editingTag, setEditingTag] = useState(null); // state for tag being edited
    const [deletingTag, setDeletingTag] = useState(null); // state for tag being edited
    const [showPopup, setShowPopup] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
    const [confirmationPosition, setConfirmationPosition] = useState({ x: 0, y: 0 });

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
    
    const confirmDelete = (tag, event) => {
        setDeletingTag(tag);
        setShowConfirmation(true);
        // get the button's position
        const rect = event.currentTarget.getBoundingClientRect();
        setConfirmationPosition({
            x: rect.right + 10, // 10px to the right
            y: rect.bottom + 10 // 10px below
        });
    }

    const deleteTag = (tag) => {
        console.log(`Delete tag ${tag.id}`);
    }

    const createTag = (tagName) => {
        console.log("Creating tag:", tagName);
        // todo: add creation logic
    };

    const startEditing = (tag, event) => {
        setEditingTag(tag); 
        setShowPopup(true); 
        // get the button's position
        const rect = event.currentTarget.getBoundingClientRect();
        setPopupPosition({
            x: rect.right + 10, // 10px to the right
            y: rect.bottom + 10 // 10px below
        });
    };

    const saveTag = (updatedName) => {
        console.log("Saving tag with new name:", updatedName);
        // todo: add save logic
        setShowPopup(false); 
    };

    const closePopup = () => {
        setShowPopup(false); 
    };

    const closeConfirmation = () => {
        setShowConfirmation(false);
    }

    return (
    <div className="tag-page">
    <div className="tag-flexbox">
    <div className="tags-container">
        {tags.map(tag => (
            
            <div className="tag-container" key={tag.id}>
                <img src={edit} alt="edit icon" style={{height: '12px', marginRight: '8px'}} onClick={(e) => startEditing(tag, e)}/>
                <img src={trash} alt="trash icon" style={{height: '12px', marginRight: '8px'}} onClick={(e) => confirmDelete(tag, e)} />
                <div className="tag">{tag.label}</div>
            </div>
        ))}
        </div>
        <div className="tag-form">
            <h2>Create a new tag:</h2>
            <input type="text" value={newTagName} onChange={handleInputChange}/>
            <button className="btn__tag-create" type="submit" onClick={handleSubmit}>Create</button>
        </div>

        
        </div>
        {showPopup && (
                <div className="popup-overlay"style={{
                    top: `${popupPosition.y}px`,
                    left: `${popupPosition.x}px`,
                    position: 'absolute', 
                    backgroundColor: "#36454F", 
                    color: "white",
                    width: '200px',
                    height: '200px',
                    padding: '15px',
                    justifyContent: "center"
                }}>
                    <div className="popup-content">
                        <h2>Edit Tag</h2>
                        <input type="text" defaultValue={editingTag? editingTag.label : ""} onChange={(e) => setNewTagName(e.target.value)} />
                        <button onClick={() => saveTag(newTagName)}>Save</button>
                        <button onClick={closePopup}>Cancel</button>
                    </div>
                </div>
            )}
        {showConfirmation && (
            <div className="popup-overlay"style={{
                top: `${confirmationPosition.y}px`,
                left: `${confirmationPosition.x}px`,
                position: 'absolute', 
                backgroundColor: "#36454F", 
                color: "white",
                width: '200px',
                height: '200px',
                padding: '15px',
                justifyContent: "center"
            }}>
                <div className="popup-content">
                    <h2>Are you sure you want to delete this tag?</h2>
                    <button onClick={() => deleteTag(deletingTag)}>Confirm</button>
                    <button onClick={closeConfirmation}>Cancel</button>
                </div>
            </div>
        )}
    </div>)
}