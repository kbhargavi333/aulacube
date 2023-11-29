import React from 'react'
import './Navigation.css'
import { RiListCheck3 } from "react-icons/ri";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { MdFormatListBulletedAdd } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { GoHome } from "react-icons/go";
export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
    <Navbar.Collapse id="navbarScroll">
    <Nav>
      <div className="nav"> 
        <p className="title"><HiOutlineClipboardDocumentList />&nbsp;<b>Todo</b><b className="list">List</b></p>
        <NavLink  eventKey="1" as={Link} to="/about" className='navabout'><GoHome />&nbsp;About</NavLink>
        <NavLink  eventKey="2" as={Link} to="/displayTask" className='navtext'><RiListCheck3 />&nbsp;Task List</NavLink>
        <NavLink  eventKey="3" as={Link} to="/" className='navtext'><MdFormatListBulletedAdd />&nbsp;Add Task</NavLink>
        <NavLink  eventKey="4" as={Link} to="/editTask" className='navtext'><BiEdit />&nbsp;Edit Task</NavLink>
      </div>
    </Nav>
    </Navbar.Collapse>    
    </Navbar>
  )
}
