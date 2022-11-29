import React from 'react';
// import { Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import {DiAndroid} from 'react-icons//di'
import SidebarMenu from 'react-bootstrap-sidebar-menu';

import './sidebar.css';

function sidebar() {
  return <SidebarMenu xs={0}>
    <div className="sidebar">
      <SidebarMenu.Header>
        <SidebarMenu.Brand>
          <h5 className='brand-header p-3'>Coffee Spot</h5>
        </SidebarMenu.Brand>
      </SidebarMenu.Header>
      <SidebarMenu.Body>
        <SidebarMenu.Nav.Link className='sidebar-link'>
          <SidebarMenu.Nav.Title>
            <h6>Instant Coffee (33)</h6>
          </SidebarMenu.Nav.Title>
        </SidebarMenu.Nav.Link>
        <SidebarMenu.Nav.Link className='sidebar-link'>
          <SidebarMenu.Nav.Title>
            <h6>Coffee Alternatives (9)</h6>
          </SidebarMenu.Nav.Title>
        </SidebarMenu.Nav.Link>
        <SidebarMenu.Nav.Link className='sidebar-link'>
          <SidebarMenu.Nav.Title>
            <h6>Medium Roast (40)</h6>
          </SidebarMenu.Nav.Title>
        </SidebarMenu.Nav.Link>
        <SidebarMenu.Nav.Link className='sidebar-link'>
          <SidebarMenu.Nav.Title>
            <h6>Espresso (3)</h6>
          </SidebarMenu.Nav.Title>
        </SidebarMenu.Nav.Link>
        <SidebarMenu.Nav/>
        <SidebarMenu.Sub className='sidebar-link retractable'>
          <SidebarMenu.Sub.Toggle>
            <SidebarMenu.Nav.Icon />
            <SidebarMenu.Nav.Title>
              <h6>lil menu</h6>
            </SidebarMenu.Nav.Title>
          </SidebarMenu.Sub.Toggle>
          <SidebarMenu.Sub.Collapse>
            <SidebarMenu.Nav>
              <SidebarMenu.Nav.Link>
                <SidebarMenu.Nav.Icon>
                  <p>png</p>
                </SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Title>
                  <h6>hellllooooo</h6>
                </SidebarMenu.Nav.Title>
              </SidebarMenu.Nav.Link>
            </SidebarMenu.Nav>
          </SidebarMenu.Sub.Collapse>
        </SidebarMenu.Sub>
      </SidebarMenu.Body>
    </div>
  </SidebarMenu>;
}

export default sidebar;
