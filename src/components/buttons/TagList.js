import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import '../../Assets/Styles/Tags.scss';
import '../../Assets/Styles/Variables.scss'
import { MdAdd } from "react-icons/md";

const TagList = () => {
    const [tags, setTags] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newTag, setNewTag] = useState("");

    // Generate random pastel color
    const generatePastelColor = () => {
        const hue = Math.floor(Math.random() * 360); // Random hue
        const saturation = 70 + Math.random() * 10; // Saturation between 70-80%
        const lightness = 85 + Math.random() * 10;  // Lightness between 85-95%
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    };

    const addTag = () => {
        if (newTag.trim() && !tags.some(tag => tag.name === newTag.trim())) {
            // Add tag with a random color
            const newTagObject = { name: newTag.trim(), color: generatePastelColor() };
            setTags([...tags, newTagObject]);
            setNewTag("");
            setShowModal(false);
        }
    };

    const handleCreateTag = (event) => {
        if (event.key === "Enter") {
            addTag();
        }
    };

    return (
        <div className="tags-container">
            <div>
                <h6>TAGS</h6>
            </div>
            <div className="tag-buttons-container">
                {tags.map((tag, index) => (
                    <button
                        key={index}
                        type="button"
                        className="btn tag-btn btn-light"
                        style={{ backgroundColor: tag.color }}
                    >
                        {tag.name}
                    </button>
                ))}
                <button
                    type="button"
                    className="btn tag-btn btn-light"
                    onClick={() => setShowModal(true)}
                >
                    <MdAdd color="grey" size={15}/> Add Tag
                </button>
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Tag</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="text"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onClick={handleCreateTag}
                        placeholder="Enter tag name"
                        className="form-control"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="warning" onClick={addTag}>
                        Add Tag
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default TagList;
