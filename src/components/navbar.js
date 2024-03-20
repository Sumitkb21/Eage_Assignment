import React from 'react'
import "../index.css"
const Navbar = () => {
  return (
  <nav className="navbar navbar-expand-lg navbar-light sticky-top" id="navbar">
  <div className="container">
    {/* <a class="navbar-brand" href="#">
          <img src="images/banner1.png" alt="logo" width="65px" class="img-fluid">
      </a> */}
    <button
      className="navbar-toggler ml-auto"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className="collapse navbar-collapse justify-content-end"
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav ">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            About Us
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            SimplyEnglish Web
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link border-right-0" href="#">
            Blogs
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
