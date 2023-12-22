import React from 'react';
import "./smallNavbar.css";

function SmallNavbar() {
  return (
    <div id="smallnav" style={{marginTop:84}} className='absolute '>
  <div className="menu-wrapper " role="navigation">
    <ul className="nav gap-3" style={{width:1348}} role="menubar">
      <li role="menuitem" className=''>
        <a href="#">Disposables</a>
        <div className="mega-menu  left-[0px]" aria-hidden="true" role="menu">
          <div className="nav-column mb-3">
            <h3 className='fw-bold'>Brands</h3>
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
            <h3 className='fw-bold'>Types</h3>
            <ul>
              <li role="menuitem"><a href="#">Item 1</a></li>
              <li role="menuitem"><a href="#">Item 2</a></li>
              <li role="menuitem"><a href="#">Item 3</a></li>
            </ul>
          
          </div>
          <div className="nav-column">
            <h3 className='fw-bold'>Flavour</h3>
            <ul>
              <li role="menuitem"><a href="#">Item 1</a></li>
              <li role="menuitem"><a href="#">Item 2</a></li>
              <li role="menuitem"><a href="#">Item 3</a></li>
              <li role="menuitem"><a href="#">Item 4</a></li>
              <li role="menuitem"><a href="#">Item 5</a></li>
            </ul>
          </div>
          <div className="flex col gap-2 mt-4 float-right  p-3">
          <img  style={{height:200}} src="https://www.vapeshop.co.uk/cdn/shop/collections/Lost_Mary_logo.jpg?v=1663940867&width=984"  width="400px"/>
          <img  style={{height:200}}  src="https://www.vapeshop.co.uk/cdn/shop/files/nav-disposables-4-for-14-2312.jpg?v=1703169812&width=900"  width="400px" />
         
          </div>
        </div>
      </li>
      <li role="menuitem"><a href="#">Eliquids</a>
      <div className="mega-menu  left-[0px]" aria-hidden="true" role="menu">
          <div className="nav-column">
            <h3 className='fw-bold'>Brands</h3>
            <ul>
              <li role="menuitem"><a href="#">Item 1</a></li>
              <li role="menuitem"><a href="#">Item 2</a></li>
             
            </ul>
          </div>
          <div className="nav-column">
            <h3 className='fw-bold'>Types</h3>
            <ul>
              <li role="menuitem"><a href="#">Item 1</a></li>
              <li role="menuitem"><a href="#">Item 2</a></li>
              <li role="menuitem"><a href="#">Item 3</a></li>
            </ul>
          
          </div>
          <div className="nav-column">
            <h3 className='fw-bold'>Flavour</h3>
            <ul>
              <li role="menuitem"><a href="#">Item 1</a></li>
              <li role="menuitem"><a href="#">Item 2</a></li>
              
            </ul>
          </div>
          <div  className="flex col gap-2 mt-4 float-right  p-3">
            <img  style={{height:200}}  src='https://www.vapeshop.co.uk/cdn/shop/files/nav-10ml-5-for-12-2312.jpg?v=1703169910&width=900' />
          <img  style={{height:200}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqQ81EKa3sRTMnd6_L_EX02ahfvrIKaJIhYwYxTePj2J3pjGhZeG81nR1ihwR0MuJY_K8&usqp=CAU" width="300px" />
          
          </div>
      </div>
      
      </li>
      <li role="menuitem"><a href="#">Coil</a>
      <div className="mega-menu  left-[0px]" aria-hidden="true" role="menu">
          <div className="nav-column">
            <h3 className='fw-bold'>Brands</h3>
            <ul>
              <li role="menuitem"><a href="#">Item 1</a></li>
              <li role="menuitem"><a href="#">Item 2</a></li>
             
            </ul>
          </div>
          <div className="nav-column">
            <h3 className='fw-bold'>Types</h3>
            <ul>
              <li role="menuitem"><a href="#">Item 1</a></li>
              <li role="menuitem"><a href="#">Item 2</a></li>
              <li role="menuitem"><a href="#">Item 3</a></li>
            </ul>
          
          </div>
          <div className="nav-column">
            <h3 className='fw-bold'>Flavour</h3>
            <ul>
              <li role="menuitem"><a href="#">Item 1</a></li>
              <li role="menuitem"><a href="#">Item 2</a></li>
              
            </ul>
          </div>
          <div  className="flex col gap-2 mt-4 float-right  p-3">
            <img  style={{height:200}}  src='https://www.vapeshop.co.uk/cdn/shop/files/aspire_nav_image.jpg?v=1666107820&width=900' />
          <img  style={{height:200}}  src="https://vapourium.nz/cdn/shop/articles/Vape_Coils.jpg?v=1601337184" width="300px" />
          
          </div>
      </div>
      </li>

      <li role="menuitem"><a href="#">Tanks</a>
      <div className="mega-menu  left-[0px]" aria-hidden="true" role="menu">
          <div className="nav-column">
            <h3 className='fw-bold'>Brands</h3>
            <ul>
              <li role="menuitem"><a href="#">Item 1</a></li>
              <li role="menuitem"><a href="#">Item 2</a></li>
             
            </ul>
          </div>
          <div className="nav-column">
            <h3 className='fw-bold'>Types</h3>
            <ul>
              <li role="menuitem"><a href="#">Item 1</a></li>
              <li role="menuitem"><a href="#">Item 2</a></li>
              <li role="menuitem"><a href="#">Item 3</a></li>
            </ul>
          
          </div>
          <div className="nav-column">
            <h3 className='fw-bold'>Flavour</h3>
            <ul>
              <li role="menuitem"><a href="#">Item 1</a></li>
              <li role="menuitem"><a href="#">Item 2</a></li>
              
            </ul>
          </div>
          <div  className="flex col gap-2 mt-4 float-right  p-3">
            <img  style={{height:200}}  src='https://www.vapeshop.co.uk/cdn/shop/collections/mouth-to-lung-mtl-tanks.jpg?v=1663932410&width=984' />
          <img  style={{height:200}}  src="https://cdn.vapeclub.co.uk/img/products/210_wotofo-nexmesh-pro-tank_1.jpg" width="300px" />
          
          </div>
      </div>
      
      </li>
      <li role="menuitem"><a href="#">Pods</a>
      <div className="mega-menu  left-[0px]" aria-hidden="true" role="menu">
          <div className="nav-column">
            <h3 className='fw-bold'>Brands</h3>
            <ul>
              <li role="menuitem"><a href="#">Item 1</a></li>
              <li role="menuitem"><a href="#">Item 2</a></li>
             
            </ul>
          </div>
          <div className="nav-column">
            <h3 className='fw-bold'>Types</h3>
            <ul>
              <li role="menuitem"><a href="#">Item 1</a></li>
              <li role="menuitem"><a href="#">Item 2</a></li>
              <li role="menuitem"><a href="#">Item 3</a></li>
            </ul>
          
          </div>
          <div className="nav-column">
            <h3 className='fw-bold'>Flavour</h3>
            <ul>
              <li role="menuitem"><a href="#">Item 1</a></li>
              <li role="menuitem"><a href="#">Item 2</a></li>
              
            </ul>
          </div>
          <div  className="flex col gap-2 mt-4 float-right  p-3">
            <img  style={{height:200}}  src='https://www.misteliquid.co.uk/blog/wp-content/uploads/2022/08/Best_PodVapes.jpg' />
          <img  style={{height:200}}  src="https://www.vapeshop.co.uk/cdn/shop/collections/smok.jpg?v=1695126444&width=984" width="300px" />
          
          </div>
      </div>
      </li>
      
    </ul>
  </div>
</div>

  )
}

export default SmallNavbar
