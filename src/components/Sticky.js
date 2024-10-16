import React, { useState, useEffect } from "react";
import { IoAddSharp } from "react-icons/io5";
import { Modal, Button } from "react-bootstrap";
import '../Assets/Styles/Sidemenu.scss';
import axios from "axios";

function Sticky() {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [screenSize, setScreenSize] = useState(window.innerWidth);


  //Fetch notes 
  useEffect(() => {
    const fetchItems = async () => {
      const token = localStorage.getItem('token'); // Get the JWT token
      if (token) {
        try {
          // Make sure to call the correct endpoint '/api/notes'
          const response = await axios.get('http://localhost:5001/api/', {
            headers: { Authorization: `Bearer ${token}` },
          });

          // Map response data (the notes)
          const fetchedItems = response.data.map((note) => ({
            id: note._id,
            title: note.title,
            description: note.description,
            color: generatePastelColor(), // Assuming this is defined elsewhere
          }));

          setItems(fetchedItems); // Set the state with the fetched notes
        } catch (error) {
          console.error('Error fetching notes:', error); // Log any errors
        }
      }
    };
    fetchItems();
  }, []);


  // generate random color
  const generatePastelColor = () => {
    const hue = Math.floor(Math.random() * 360); // Random hue
    const saturation = 70 + Math.random() * 10; // Saturation between 70-80%
    const lightness = 85 + Math.random() * 10;  // Lightness between 85-95%
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  //  add a new note item
  const addNewItem = async () => {
    if (newTitle.trim() && newDescription.trim()) {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.post(
          'http://localhost:5001/api',  // Ensure the route matches the backend
          { title: newTitle.trim(), description: newDescription.trim() },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        
        const newItem = {
          id: response.data._id,
          title: response.data.title,
          description: response.data.description,
          color: generatePastelColor(),
        };
        setItems([...items, newItem]);
        setNewTitle("");
        setNewDescription("");
        setShowModal(false); // Close the modal
      } catch (error) {
        console.error('Error creating note:', error);
      }
    }
  }
//hide last note button on tablet and phone
const showLastNoteButton = () => {
  if (screenSize < 780) {
    return <></>;

  } else {
    return (
      <div className="small-card" onClick={() => setShowModal(true)}><IoAddSharp size={70} /></div>)
  }
}

const showInitialStickyNote = () => {
  if (screenSize < 700) {
    return (<div className="row">
      <div className="col-sm-12 col-md-12">
        {items.length > 0 && (
          <div className="top-card-container">
            <div><span className="top-card-header-title">{items[0].title}</span></div>
            <div className="top-card-content"><span>{items[0].description}</span></div>
          </div>
        )}
      </div>
    </div>
    )
  } else {
    return <></>;
  }
}

const showStickyFromOne = () => {
  if (screenSize < 730) {
    return (
      <div className="row horizontal-scroll stickies">
        {items.slice(1).map((item) => (
          <div
            key={item.id}
            className="col-sm-6 col-md-12 col-lg-4 col-xl-4 small-card"
            style={{ backgroundColor: item.color }}
          >
            <div className="card-title"><span>{item.title}</span></div>
            <div className="card-content"><span>{item.description}</span></div>
          </div>
        ))}

        {showLastNoteButton()}
      </div>
    )
  } else if (screenSize > 700) {
    return (
      <div className="row horizontal-scroll stickies">
        {items.map((item) => (
          <div
            key={item.id}
            className="col-sm-6 col-md-12 col-lg-4 col-xl-4 small-card"
            style={{ backgroundColor: item.color }}
          >
            <div className="card-title"><span>{item.title}</span></div>
            <div className="card-content"><span>{item.description}</span></div>
          </div>
        ))}

        {showLastNoteButton()}
      </div>
    )
  }
}
const handleAddItem = (event) => {
  if (event.key === "Enter") {
    addNewItem();
  }
};

return (
  <div className="container-fluid">
    {showInitialStickyNote()}
    {showStickyFromOne()}



    {/* Modal for adding a new note */}
    <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Enter note title"
            className="form-control mb-3"
          />
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="Enter note content"
            className="form-control"
            rows="3"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="warning" onClick={addNewItem}>
            Add Note
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Sticky;
