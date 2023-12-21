import React from 'react';
import "./smallNavbar.css";

function SmallNavbar() {
  return (
    <div id="smallnav" style={{marginTop:84}} className='absolute mx-auto'>
  <div className="menu-wrapper " role="navigation">
    <ul className="nav container w-full" role="menubar">
      <li role="menuitem">
        <a href="#">Disposables</a>
        <div className="mega-menu" aria-hidden="true" role="menu">
          <div className="nav-column">
            <h3>Heading 1</h3>
            <ul>
              <li role="menuitem"><a href="#">Item 1</a></li>
              <li role="menuitem"><a href="#">Item 2</a></li>
              <li role="menuitem"><a href="#">Item 3</a></li>
              <li role="menuitem"><a href="#">Item 4</a></li>
              <li role="menuitem"><a href="#">Item 5</a></li>
              <li role="menuitem"><a href="#">Item 6</a></li>
              <li role="menuitem"><a href="#">Item 7</a></li>
            </ul>
          </div>
          <div className="nav-column">
            <h3>Heading 2</h3>
            <ul>
              <li role="menuitem"><a href="#">Item 1</a></li>
              <li role="menuitem"><a href="#">Item 2</a></li>
              <li role="menuitem"><a href="#">Item 3</a></li>
            </ul>
            <h3>Heading 3</h3>
            <ul>
              <li role="menuitem"><a href="#">Item 1</a></li>
              <li role="menuitem"><a href="#">Item 2</a></li>
            </ul>
          </div>
          <div className="nav-column">
            <h3>Heading 4</h3>
            <ul>
              <li role="menuitem"><a href="#">Item 1</a></li>
              <li role="menuitem"><a href="#">Item 2</a></li>
              <li role="menuitem"><a href="#">Item 3</a></li>
              <li role="menuitem"><a href="#">Item 4</a></li>
              <li role="menuitem"><a href="#">Item 5</a></li>
            </ul>
          </div>
          <div className="nav-column">
            <h3 className="highlight">Highlighted Heading</h3>
            <ul>
              <li role="menuitem"><a href="#">Item 1</a></li>
              <li role="menuitem"><a href="#">Item 2</a></li>
            </ul>
            <h3 className="highlight">Highlighted Heading</h3>
            <ul>
              <li role="menuitem"><a href="#">Item 1</a></li>
              <li role="menuitem"><a href="#">Item 2</a></li>
            </ul>
          </div>
        </div>
      </li>
      <li role="menuitem"><a href="#">Eliquids</a></li>
      <li role="menuitem"><a href="#">Coil</a></li>
      <li role="menuitem"><a href="#">Tanks</a></li>
      <li role="menuitem"><a href="#">Pods</a></li>
      
    </ul>
  </div>
</div>

  )
}

export default SmallNavbar
