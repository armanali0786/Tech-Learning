import React from 'react'
import '../assets/css/navbar.scss';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/e-learnig.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './Button';
import { FaSearch } from "react-icons/fa";
import { Search } from 'lucide-react';

export default function Navbar() {
  return (
    <>
      <header class="header bg-light" id="header">
        <nav class="navbar container ">
          <section class="navbar__left">
            <Link href="/" class="brand">
              <img src={Logo} alt="logo" />
            </Link>
          </section>
          <section class="navbar__center">
            <div class="menu" id="menu">
              <div class="menu__header">
                <span class="menu__arrow"><i class="bx bx-chevron-left"></i></span>
                <span class="menu__title"></span>
              </div>

              <ul class="menu__inner">
                <header className="flex items-center h-14 w-full px-4 md:px-6">
                  <div className="flex w-full max-w-sm items-center">
                    <input className="pl-3 flex-1 w-full max-w-none md:max-w-xs border-2 text-black border-gray-400 focus:outline-none rounded-md pt-0.5" placeholder="Search" type="search" />
                    <button size="icon" type="submit">
                      <a href="/search">
                        <FaSearch className="text-black" />
                      </a>
                    </button>
                  </div>
                </header>
                <li class="menu__item"><Link to="/" class="menu__link">Home</Link> </li>
                {/* <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button class="dropdown-item" type="button">Action</button>
                    <button class="dropdown-item" type="button">Another action</button>
                    <button class="dropdown-item" type="button">Something else here</button>
                  </div>
                </div> */}
                {/* <li class="menu__item menu__dropdown">
                <a href="#" class="menu__link">
                  Products
                  <i class="bx bx-chevron-right"></i>
                </a>
            <div class="submenu megamenu__text">
              <div class="submenu__inner">
                <h4 class="submenu__title">Women</h4>
                <ul class="submenu__list">
                  <li><a href="#">Shirts & Blouses</a></li>
                  <li><a href="#">Pants</a></li>
                  <li><a href="#">Blazers & Vests</a></li>
                  <li><a href="#">Cardigans & Sweaters</a></li>
                </ul>
              </div>
              <div class="submenu__inner">
                <h4 class="submenu__title">Men</h4>
                <ul class="submenu__list">
                  <li><a href="#">T-shirts & Tanks</a></li>
                  <li><a href="#">Pants</a></li>
                  <li><a href="#">Hoodies & Sweatshirts</a></li>
                  <li><a href="#">Blazers & Suits</a></li>
                </ul>
              </div>
              <div class="submenu__inner">
                <h4 class="submenu__title">Kids</h4>
                <ul class="submenu__list">
                  <li><a href="#">Clothing</a></li>
                  <li><a href="#">Outerwear</a></li>
                  <li><a href="#">Activewear</a></li>
                  <li><a href="#">Accessories</a></li>
                </ul>

              </div>
              <div class="submenu__inner">
                <h4 class="submenu__title">Sport</h4>
                <ul class="submenu__list">
                  <li><a href="#">Clothing</a></li>
                  <li><a href="#">Swimwear</a></li>
                  <li><a href="#">Outerwear</a></li>
                  <li><a href="#">Accessories & Equipment</a></li>
                </ul>
              </div>
            </div>
                </li> */}
                {/* <li class="menu__item menu__dropdown">
            <a href="#" class="menu__link">
              More
              <i class="bx bx-chevron-right"></i>
            </a>
            <div class="submenu megamenu__image">
              <div class="submenu__inner">
                <a href="#">
                  <img src="https://plus.unsplash.com/premium_photo-1677013011737-ba61149ba70c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="submenu-image" alt=""/>
                  <span class="submenu__title">Home</span>
                </a>
              </div>
              <div class="submenu__inner">
                <a href="#">
                  <img src="https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=1612&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="submenu-image" alt=""/>
                  <span class="submenu__title">Beauty</span>
                </a>
              </div>
              <div class="submenu__inner">
                <a href="#">
                  <img src="https://plus.unsplash.com/premium_photo-1676550886096-bfc64aae1e2a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="submenu-image" alt=""/>
                  <span class="submenu__title">Holiday</span>
                </a>
              </div>
              <div class="submenu__inner">
                <a href="#">
                  <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="submenu-image" alt=""/>
                  <span class="submenu__title">Sale</span>
                </a>
              </div>
            </div>
          </li> */}
                {/* <li class="menu__item menu__dropdown">
            <a href="#" class="menu__link">
              Account
              <i class="bx bx-chevron-right"></i>
            </a>
            <div class="submenu megamenu__normal">
              <ul class="submenu__list">
                <li><a href="#">Login</a></li>
                <li><a href="#">Register</a></li>
                <li><a href="#">Track Order</a></li>
                <li><a href="#">Help</a></li>
              </ul>
            </div>
          </li> */}

                <li class="menu__item">
                  <Link to="/course-list" class="menu__link">Tech Courses</Link>
                </li>
                {/* <li class="menu__item">
                <Link to="/notes" class="menu__link">Notes</Link>
              </li> */}
                <li class="menu__item">
                  <Link to="/poll" class="menu__link">Student Poll</Link>
                </li>
                <li class="menu__item">
                  <Link to="/sign-up" class="menu__link">Sign up</Link>
                </li>
                <li class="menu__item">
                  <Link to="/login" class="menu__link">Login</Link>
                </li>
              </ul>
            </div>
          </section>
          {/* <section class="navbar__right">
      <button class="switch" id="switch">
        <span class="switch__light"><i class="bx bx-sun"></i></span>
        <span class="switch__dark"><i class="bx bx-moon"></i></span>
      </button>
    </section> */}
        </nav>
      </header>
    </>
  )
}
