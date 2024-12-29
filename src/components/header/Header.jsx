import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import styles from './Header.module.scss'

const Header = () => {
    return (
        <>
            <div className={styles.account}>
                <div className={styles.header}>
                    <div className={styles.free}>
                        <p>Free shipping for standard order over $100</p>
                    </div>
                    <div className={styles.usd}>
                        <nav>
                            <ul>
                                <li><a href="">Help & FAQs</a></li>
                                <li><a href="">My Account</a></li>
                                <li><a href="">EN</a></li>
                                <li><a href="">USD</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>


            <div className={styles.cozaStore}>
                <div className={styles.container}>
                    <div className={styles.logonavbar}>
                        <div className={styles.logo}>
                            <img src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png" alt="logo" />
                        </div>
                        <div className={styles.navbar}>
                            <nav>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="">Shop</a></li>
                                    <li><a href="">Features <span>HOT</span> </a></li>
                                    <li><a href="">Blog</a></li>
                                    <li><a href="">About</a></li>
                                    <li><a href="/formik">Admin</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className={styles.icons}>
                        <a href=""><CiSearch /></a>
                        <a href="/basket"><FaShoppingCart /> <span>2</span></a>
                        <a href="/wishlist"><CiHeart /> <span>3</span> </a>
                    <div className={styles.hamburger}>
                        <a href=""><RxHamburgerMenu /></a>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header