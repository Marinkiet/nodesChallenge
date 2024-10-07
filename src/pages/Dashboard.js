import React from "react";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { AiOutlineMenuFold } from "react-icons/ai";
import { MdNavigateNext } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { BsCalendarDate } from "react-icons/bs";
import { FaNoteSticky } from "react-icons/fa6";
import '../Assets/Styles/Sidemenu.scss';
import '../Assets/Styles/SigninForm.scss'
import { FaSquare } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { FaSlidersH } from "react-icons/fa";
import MenuItemBtn from "../components/buttons/MenuItemBtn";
import TagList from "../components/buttons/TagList";
import { useNavigate } from "react-router-dom";
import Lists from "../components/buttons/Lists";

function Dashboard() {
  const navigate = useNavigate();
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [show, setShow] = useState(false);

  const getIcon = () => {
    if (screenSize < 601) {
      return <IoClose />; // Mobile icon
    } else if (screenSize < 1024) {
      return <AiOutlineMenuFold />; // Tablet icon
    } else {
      return <IoMenu />; // Desktop icon
    }
  }

  return (
    <>
      <div className="dasboard-nav-header">
        <IoMenu onClick={() => setShow((s) => !s)} />
        <h3>today</h3>

      </div>
      <div>
        <Offcanvas placement="start" show={show} onHide={() => setShow(false)} className="offcanvasSettings">
          <Offcanvas.Header>
            <div className="offcanvas-top-header">
              <h5 class="offcanvas-title">Menu</h5>
              <button className="custom-close" onClick={() => setShow(false)}>
                {getIcon()}
              </button>
            </div>

            <form className="search-form d-flex" role="search">
              <div className="input-with-icon">
                <IoSearch className="search-icon" />
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
              <div>
                <h6>TASKS</h6>
              </div>
              <MenuItemBtn icon={MdNavigateNext} title="Upcoming" count={12} />
              <MenuItemBtn icon={FaListCheck} title="Today" count={5} />
              <MenuItemBtn icon={BsCalendarDate} title="Calendar" />
              <MenuItemBtn icon={FaNoteSticky} title="Sticky Wall" to="/stickywall"/>
            </div>
            <hr></hr>
            <div className="list-container">
              <Lists icon={MdAdd}/>
            </div>
            <hr></hr>
            <div className="tags-container">
                <TagList />
            </div>
            <hr></hr>
            <div className="settings-container">
            <MenuItemBtn icon={FaSlidersH} title="Settings" />
      
            </div>
            <div className="signout-btn">
              {/* tags section */}
              <div className="signout-container">
                <button type="button" className="btn btn-warning signin-button">Sign out</button>
              </div>
            </div>

          </Offcanvas.Body>
        </Offcanvas>
      </div>

    </>
  )
}

export default Dashboard;
