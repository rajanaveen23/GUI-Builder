import React from 'react';
import { Dropdown } from 'react-bootstrap';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import './RightSideBar.scss';

export default function SideBar() {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <MenuRoundedIcon />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
