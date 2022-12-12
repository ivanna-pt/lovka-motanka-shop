import React, {useEffect, useRef} from "react";
import classes from "./header.module.css";
import logo from "../../assets/images/logo-lovka.png";
import userImage from "../../assets/images/user-icon.png";

import {motion} from "framer-motion";

import {Container, Row} from "reactstrap";
import {NavLink} from "react-router-dom";

const navLinks = [
    {path: 'home', display: 'Home'},
    {path: 'about', display: 'Who We Are'},
    {path: 'shop', display: 'Shop'},
    {path: 'contact', display: 'Contact'},
]

const Header = () => {

    const headerRef = useRef(null);

    const menuRef = useRef(null);

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('sticky__header')
            } else {
                headerRef.current.classList.remove('sticky__header')
            }
        })
    }

    useEffect(() => {
        stickyHeaderFunc()

        return window.removeEventListener('scroll', stickyHeaderFunc)
    })

    const menuToggle = () => menuRef.current.classList.toggle('active__menu')

    return (
        <header className={classes.header} ref={headerRef}>
            <Container>
                <Row>
                    <div className={classes['nav__wrapper']}>
                        <div className={classes.logo}>
                            <img src={logo} alt="logo" className='img-fluid'/>
                        </div>

                        <div className={classes.navigation} ref={menuRef} onClick={menuToggle}>
                            <ul className={classes.menu}>
                                {
                                    navLinks.map((item, index) => (
                                        <li className={classes['nav-item']} key={index}>
                                            <NavLink to={`lovka-motanka-shop/${item.path}`} className={(navClass)=>navClass.isActive ? classes['nav__active'] : ''}>{item.display}</NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className={classes['nav__icons']}>
                            <motion.span whileTap={{scale: 1.2}} className={classes["fav__icon"]}>
                                <i className="ri-heart-fill"></i>
                                <span className={classes.badge}>1</span>
                            </motion.span>
                            <motion.span whileTap={{scale: 1.2}} className={classes["cart__icon"]}>
                                <i className="ri-shopping-cart-fill"></i>
                                <span className={classes.badge}>1</span>
                            </motion.span>
                            <span>
                                <motion.img whileTap={{scale: 1.2}} src={userImage} alt="user icon"/>
                            </span>
                            <div className={classes['mobile__menu']} onClick={menuToggle}>
                            <span >
                                <i className="ri-menu-line"></i>
                            </span>
                            </div>
                        </div>


                    </div>


                </Row>
            </Container>
        </header>
    )
}

export default Header;