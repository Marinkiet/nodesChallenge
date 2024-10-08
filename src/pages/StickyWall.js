import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import '../Assets/Styles/Sidemenu.scss';
function StickyWall() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <div className="card"></div>
        </div>
      </div>
      <div className="row horizontal-scroll stickies">
        <div className="col-sm-6 col-md-12 col-lg-4 col-xl-4 small-card"></div>
        <div className="col-sm-6 col-md-12 col-lg-4 col-xl-4 small-card"></div>
        <div className="col-sm-6 col-md-12 col-lg-4 col-xl-4 small-card"></div>
        <div className="col-sm-6 col-md-12 col-lg-4 col-xl-4 small-card"></div>
        <div className="col-sm-6 col-md-12 col-lg-4 col-xl-4 small-card"></div>
        <div className="col-sm-6 col-md-12 col-lg-4 col-xl-4 small-card"></div>
        <div className="col-sm-6 col-md-12 col-lg-4 col-xl-4 small-card"></div>
        <div className="col-sm-6 col-md-12 col-lg-4 col-xl-4 small-card"></div>
        <div className="col-sm-6 col-md-12 col-lg-4 col-xl-4 small-card"></div>
        <div className="col-sm-6 col-md-12 col-lg-4 col-xl-4 small-card"></div>
      </div>
    </div>
  );
}
export default StickyWall;