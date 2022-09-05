import React from 'react'
import MenuItem from './MenuItem';

const MenuItems = [
  'Home',
  'About',
  'Services',
  'Contact Us'
];

const Header = () => {
  return (
    <header>
      <h1>Learning React</h1>
      <ul>
        {MenuItems.map(item =>  <MenuItem key={item} menuItem={item} />)}
      </ul>

      <h2>Rendering Elements</h2>

     </header>
  )
}

export default Header