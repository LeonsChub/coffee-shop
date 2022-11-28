import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './sidebar.css';

function sidebar() {
  return (
    <Nav
      className="col-md-12 d-none d-md-block sidebar"
      activeKey="/home"
      onSelect={(selectedKey) => {
        alert(`selected ${selectedKey}`);
      }}>
      <div className="sidebar-sticky"></div>
      <Nav.Item>
        <Link className="text-white">Link 1</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className="text-white">Link 2</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className="text-white">Link 3</Link>
      </Nav.Item>
    </Nav>
  );
}

export default sidebar;
