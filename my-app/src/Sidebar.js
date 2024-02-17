// src/Sidebar.js

import React from 'react';

const sidebarStyle = {
  height: '100%', // Full height
  width: '250px', // Width of the sidebar
  position: 'fixed', // Fixed Sidebar (stay in place on scroll)
  zIndex: '1', // Stay on top
  top: '0', // Stay at the top
  left: '0',
  backgroundColor: '#111', // Black background color
  overflowX: 'hidden', // Disable horizontal scroll
  paddingTop: '20px', // Place content 20px from the top
  color: 'white', // Text color
};

const Sidebar = () => {
  return (
    <div style={sidebarStyle}>
      <h2>Sidebar</h2>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Sidebar;
