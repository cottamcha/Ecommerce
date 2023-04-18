import { useState, useRef } from 'react'
import { useOutsideClick } from '../../hooks/useOutsideClick'

import { MdSecurity } from 'react-icons/md'
import { BsSuitHeart } from 'react-icons/bs'
import { RiAccountCircleLine, RiArrowDropDownFill } from 'react-icons/ri'

import Link from 'next/link'
import UserMenu from './UserMenu'

import styles from './styles.module.scss'

export default function Top() {
    const [loggedIn, SetLoggedIn] = useState(true)
    const [visible, setVisible] = useState(false)
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setVisible(!visible)
    }

    const hideMenu = () => {
        setVisible(false);
      };
    
    useOutsideClick(menuRef, hideMenu);

  return (
    <div className={styles.top}>
        <div className={styles.top__container}>
            <div></div>
            <ul className={styles.top__list}>
                <li className={styles.li}>
                    <img 
                        src='https://robohash.org/infernomart'
                        alt=""
                    />
                    <span>England / GBP</span>
                </li>
                <li className={styles.li}>
                    <MdSecurity />
                    <span>Buyer Protection</span>
                </li>
                <li className={styles.li}>
                    <span>Customer Service</span>
                </li>
                <li className={styles.li}>
                    <span>Help</span>
                </li>
                <li className={styles.li}>
                    <BsSuitHeart />
                    <Link href='/profile/wishlist'>
                        <span>Wishlist</span>
                    </Link>
                </li>
                <li className={styles.li}
                    onMouseOver={toggleMenu}
                    onMouseLeave={toggleMenu}

                >
                    { loggedIn ? (
                        <div>
                            <div className={styles.flex}>
                            <img 
                                src='https://robohash.org/accountjake'
                                alt=""
                            />
                                <span>Jake</span>
                                <RiArrowDropDownFill />
                            </div>
                        </div>
                    ):(
                        <div>
                            <div className={styles.flex}>
                                <RiAccountCircleLine />
                                <span>Account</span>
                                <RiArrowDropDownFill />
                            </div>
                        </div>   
                    )}
                    {visible && <UserMenu ref={menuRef} loggedIn={loggedIn}/>}
                </li>
            </ul>
        </div>
    </div>
  )
}
