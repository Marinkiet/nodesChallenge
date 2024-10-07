import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import '../../Assets/Styles/Sidemenu.scss';

const TagList = () => {
    const [tags, setTags] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newTag, setNewTag] = useState("");

    const addTag = () => {
        if (newTag.trim() && !tags.includes(newTag.trim())) {
            setTags([...tags, newTag.trim()]);
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
                    <button key={index} type="button" className="btn tag-btn btn-light">
                        {tag}
                    </button>
                ))}
                <button
                    type="button"
                    className="btn tag-btn btn-light"
                    onClick={() => setShowModal(true)}
                >
                    + Add Tag
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
