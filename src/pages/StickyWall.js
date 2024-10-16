import React, { useEffect } from "react";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { TfiMenu } from "react-icons/tfi";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { AiOutlineMenuFold } from "react-icons/ai";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";

// import '../Assets/Styles/Sidemenu.scss';
// import '../Assets/Styles/SigninForm.scss';
// import '../Assets/Styles/Stickies.scss';

import { MdAdd } from "react-icons/md";
import { FaSlidersH } from "react-icons/fa";
import MenuItemBtn from "../components/buttons/MenuItemBtn";
import TagList from "../components/buttons/TagList";
import { useNavigate } from "react-router-dom";
import Lists from "../components/buttons/Lists";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../features/authSlice";
import Sticky from "../components/Sticky";

function StickyWall() {

  const navigate = useNavigate();
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { user, isAuthenitcated } = useSelector((state) => state.auth);

  const getIcon = () => {
    if (screenSize < 601) {
      // Mobile icon
      return <IoClose />;
    } else if (screenSize < 1024) {
      // Tablet icon
      return <AiOutlineMenuFold />;
    } else {
      // Desktop icon
      return <TfiMenu color="rgb(124,124,124)" />;
    }
  };

  const showTopAddNoteIcon = () => {
    if (screenSize < 800) {
      // Mobile icon
      return( 
      <div ><MdAdd size={35}/></div>)
    } else {
      // Desktop icon
      return;
    }
  }

  const styleSignoutButton = () => {
    if (screenSize < 780) {
      // Mobile icon
      return (
        <div className="button-footer-container">
            {/* <div className="setting-container"> */}
              <MenuItemBtn icon={FaSlidersH} title="Settings" size={15}/>
              <hr/>
              <Button className="footer-btn" onClick={()=>signOut()}>Signout</Button>
            {/* </div> */}
          </div>
      )
    } else{
      return(
        <div className="footer-container">
            {/* <div className="setting-container"> */}
              <MenuItemBtn icon={FaSlidersH} title="Settings" size={15}/>
              <MenuItemBtn icon={FaSignOutAlt} title="Sign out" size={15} onClick={()=>signOut()}/>
            {/* </div> */}

          </div>
      )
    }
  }

  const handleResize = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const signOut = () => {
    dispatch(logOut())
    localStorage.removeItem('token'); // Remove the token from local storage
    navigate('/signin'); // Redirect to the sign-in page
  };



  return (
    <>
      <div className={`content-container ${show ? 'shifted' : ''}`}>
        <div className="dashboard-nav-header">
          <div className="header-menu">
            <TfiMenu size={20} className="menu-icon" onClick={() => setShow((s) => !s)} style={{ color: show ? "transparent" : "rgb(124,124,124)" }} />
          </div>
          <div className="header-title-container">
            <span className="header-title ">Sticky Wall</span>
          </div>

          <div className="addIcon">
            {showTopAddNoteIcon()}
            {/* <div className="small-card" onClick={() => setShowModal(true)}><IoAddSharp size={70}/></div>) */}
          </div>
        </div>
        <Sticky />
      </div>

      <div>
        <Offcanvas backdrop={false} placement="start" show={show} onHide={() => setShow(false)} className="offcanvasSettings">
          <Offcanvas.Header>
            <div className="offcanvas-top-header">
              <h5 className="offcanvas-title">Menu</h5>
              <button className="custom-close" onClick={() => setShow(false)}>
                {getIcon()}
              </button>
            </div>
            <form className="search-form d-flex" role="search">
              <div className="input-with-icon">
                <FaSearch size={15} className="search-icon" />
                <input
                  className="form-control form-control-md"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </form>
          </Offcanvas.Header>
          <Offcanvas.Body className="offcanvas-body">
            <div className="task-container">
              <h6>TASKS</h6>
              <MenuItemBtn icon={MdKeyboardDoubleArrowRight} title="Upcoming" count={12} size={20} />
              <MenuItemBtn icon={FaListCheck} title="Today" count={5} to="/today" />
              <MenuItemBtn icon={FaCalendarAlt} title="Calendar" />
              <MenuItemBtn icon={FaNoteSticky} title="Sticky Wall" to="/stickywall" />
            </div>
            <hr />
            <div className="list-container">
              <Lists icon={MdAdd} />
            </div>
            <hr />
            <div className="tags-container">
              <TagList />
            </div>

          </Offcanvas.Body>
          {styleSignoutButton()}
        </Offcanvas>
      </div>
      
    </>
  );
}

export default StickyWall;
