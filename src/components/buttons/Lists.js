import React, { useState } from "react";
import '../../Assets/Styles/Sidemenu.scss';
import MenuItemBtn from "./MenuItemBtn";
import { BiSolidSquareRounded } from "react-icons/bi";
import { MdAdd } from "react-icons/md";

const colorPalette = ["rgb(255, 107, 107)", "rgb(218, 119, 242)", "rgb(151, 117, 250)", "rgb(92, 124, 250)", "rgb(102, 217, 232)", "rgb(140, 233, 154)",
"rgb(255, 212, 59)", "rgb(255, 146, 43)"];

const Lists = () => {
    const [list, setList] = useState([
        { title: "Personal", count: 3, color: "rgb(255, 107, 107)" },
        { title: "Work", count: 6, color: "rgb(151, 117, 250)" },
        { title: "List 1", count: 3, color: "rgb(140, 233, 154" }
    ]);
    const [showAddNewItem, setShowAddNewItem] = useState(false);
    const [newListTitle, setNewListTitle] = useState("");
    const [selectedColor, setSelectedColor] = useState("cyan"); // Default color

    const addList = () => {
        if (newListTitle.trim() && !list.some(item => item.title === newListTitle.trim())) {
            setList([...list, { title: newListTitle.trim(), count: 0, color: selectedColor }]); // Use selected color
            setNewListTitle("");
            setShowAddNewItem(false); // Hide the add item input after adding
            setSelectedColor("cyan"); // Reset to default color
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
                        icon={BiSolidSquareRounded}
                        color={listItem.color}
                        title={listItem.title}
                        count={listItem.count}
                        size={18}
                    />
                ))}
                <MenuItemBtn
                    icon={MdAdd}
                    size={20}
                    title="Add New List"
                    onClick={() => setShowAddNewItem(prev => !prev)} // Toggle visibility
                />
            </div>

            {/* Conditional rendering for the add-new-list-items-wrapper */}
            {showAddNewItem && (
                <div className="add-new-list-items-wrapper">
                    <div className="add-new-list-items-container">
                        <div className="add-new-list-item-input-container">
                            <form className="search-form d-flex" role="text" onClick={handleCreateList}>
                                <div className="input-with-icon">
                                    <BiSolidSquareRounded  size={20} className="search-icon" style={{ color: selectedColor }} /> {/* Use selected color */}
                                    <input
                                        className="form-control form-control-md"
                                        type="text"
                                        placeholder="List Name"
                                        aria-label="List Name"
                                        value={newListTitle}
                                        onChange={(e) => setNewListTitle(e.target.value)}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="add-new-list-item-input-color-palet">
                            {colorPalette.map((color, index) => (
                                <BiSolidSquareRounded
                                    key={index}
                                    size={25}
                                    className="square"
                                    style={{
                                        color: color,
                                        cursor: "pointer",
                                        border: selectedColor === color ? '1px solid lightgrey' : 'none',
                                        borderRadius: '4px',
                                        padding: '2px'
                                    }}
                                    onClick={() => setSelectedColor(color)} // Set selected color on click
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Lists;
