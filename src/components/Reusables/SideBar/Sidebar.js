import React from 'react';
// import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { BsCart4 } from 'react-icons//bs';
import { MdClear } from 'react-icons//md';

import SidebarMenu from 'react-bootstrap-sidebar-menu';

import { ACTIONS } from '../../RouteSwitch';

import './sidebar.css';

function sidebar(props) {
  const dispatch = props.handleState;
  const cart = props.cartData;
  const orderAmount = cart.length;

  return (
    <SidebarMenu xs={0}>
      <div className="sidebar">
        <SidebarMenu.Header>
          <SidebarMenu.Brand>
            <h5 className="brand-header p-3">
              <Link to="/home">Coffee Spot</Link>
            </h5>
          </SidebarMenu.Brand>
        </SidebarMenu.Header>
        <SidebarMenu.Body>
          <SidebarMenu.Nav.Link className="sidebar-link">
            <SidebarMenu.Nav.Title>
              <h6>Instant Coffee (33)</h6>
            </SidebarMenu.Nav.Title>
          </SidebarMenu.Nav.Link>
          <SidebarMenu.Nav.Link className="sidebar-link">
            <SidebarMenu.Nav.Title>
              <h6>Coffee Alternatives (9)</h6>
            </SidebarMenu.Nav.Title>
          </SidebarMenu.Nav.Link>
          <SidebarMenu.Nav.Link className="sidebar-link">
            <SidebarMenu.Nav.Title>
              <h6>Medium Roast (40)</h6>
            </SidebarMenu.Nav.Title>
          </SidebarMenu.Nav.Link>
          <SidebarMenu.Nav.Link className="sidebar-link">
            <SidebarMenu.Nav.Title>
              <h6>Espresso (3)</h6>
            </SidebarMenu.Nav.Title>
          </SidebarMenu.Nav.Link>
          <SidebarMenu.Nav />
          <SidebarMenu.Sub>
            <SidebarMenu.Sub.Toggle className="sidebar-link retractable">
              <SidebarMenu.Nav.Icon />
              <SidebarMenu.Nav.Title>
                <h6 className="d-flex justify-content-space-around align-items-center">
                  Shopping Cart
                  {orderAmount > 0 ? <span id="mark-cart-amount">{orderAmount}</span> : null}
                </h6>
              </SidebarMenu.Nav.Title>
            </SidebarMenu.Sub.Toggle>
            <SidebarMenu.Sub.Collapse>
              <SidebarMenu.Nav>
                <SidebarMenu.Nav.Link className="sub-menu-link">
                  <SidebarMenu.Nav.Icon>
                    <BsCart4 />
                  </SidebarMenu.Nav.Icon>
                  <SidebarMenu.Nav.Title>
                    <h6 className="mx-2">Shopping Cart</h6>
                  </SidebarMenu.Nav.Title>
                </SidebarMenu.Nav.Link>

                <SidebarMenu.Nav.Link
                  className="sub-menu-link"
                  onClick={() => dispatch({ type: ACTIONS.clearAllItems })}>
                  <SidebarMenu.Nav.Icon>
                    <MdClear />
                  </SidebarMenu.Nav.Icon>
                  <SidebarMenu.Nav.Title>
                    <h6 className="mx-2">Clear Cart</h6>
                  </SidebarMenu.Nav.Title>
                </SidebarMenu.Nav.Link>
              </SidebarMenu.Nav>
            </SidebarMenu.Sub.Collapse>
          </SidebarMenu.Sub>
        </SidebarMenu.Body>
      </div>
    </SidebarMenu>
  );
}

export default sidebar;
