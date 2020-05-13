import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { toast } from "react-toastify";

class Landing extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push("/");
    toast.success("Logged out successfully");
  }

  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/AdminLogin" className="nav-link">
            Admin Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link">
            Customer Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/AboutUs" className="nav-link">
            About Us
          </NavLink>
        </li>
      </ul>
    );

    const customerLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/profile" className="nav-link">
            Customer Portal
          </NavLink>
        </li>
        <li className="nav-item">
          <a href="/Order" className="nav-link">
            Place Order
          </a>
        </li>
        <li className="nav-item">
          <a href="/CustomerOrders" className="nav-link">
            Transaction History
          </a>
        </li>
        <li className="nav-item">
          <NavLink to="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </NavLink>
        </li>
      </ul>
    );

    const adminLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/adminportal" className="nav-link">
            Admin Portal
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/adminregister" className="nav-link">
            Add New Admin
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admindeactivate" className="nav-link">
            Deactivate an Admin
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/getallcustomers" className="nav-link">
            Customers Information
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </NavLink>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
          </ul>
          {localStorage.usertoken
            ? localStorage.isAdminLogin
              ? adminLink
              : customerLink
            : loginRegLink}
        </div>
      </nav>
    );
  }
}

export default withRouter(Landing);
