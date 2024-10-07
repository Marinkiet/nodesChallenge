import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import '../../Assets/Styles/Sidemenu.scss';
import MenuItemBtn from "./MenuItemBtn";
import { FaSquare } from "react-icons/fa";
import { MdAdd } from "react-icons/md";

const Lists = () => {
    const [list, setList] = useState([
        { title: "Personal", count: 3, color: "red" },
        { title: "Work", count: 6, color: "cyan" },
        { title: "List 1", count: 3, color: "yellow" }
    ]);
    const [showModal, setShowModal] = useState(false);
    const [newListTitle, setNewListTitle] = useState("");

    const addList = () => {
        if (newListTitle.trim() && !list.some(item => item.title === newListTitle.trim())) {
            setList([...list, { title: newListTitle.trim(), count: 0, color: "grey" }]);
            setNewListTitle("");
            setShowModal(false);
        }
    };

    const handleCreateList = (event) => {
        if (event.key === "Enter") {
            addList();
        }
    };

    return (
        <div className="list-container">
            <div>
                <h6>LISTS</h6>
            </div>
            <div className="list-buttons-container">
                {list.map((listItem, index) => (
                    <MenuItemBtn
                        key={index}
                        icon={FaSquare}
                        color={listItem.color}
                        title={listItem.title}
                        count={listItem.count}
                    />
                ))}
                <MenuItemBtn 
                    icon={MdAdd} 
                    title="Add New List" 
                    onClick={() => setShowModal(true)} 
                />
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New List</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="text"
                        value={newListTitle}
                        onChange={(e) => setNewListTitle(e.target.value)}
                        onKeyDown={handleCreateList}
                        placeholder="Enter list name"
                        className="form-control"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="warning" onClick={addList}>
                        Add List
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Lists;
