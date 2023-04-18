import styles from './styles.module.scss'
import { MdSecurity } from 'react-icons/md'
import { BsSuitHeart } from 'react-icons/bs'
import { RiAccountCircleLine, RiArrowDropDownFill } from 'react-icons/ri'
import Link from 'next/link'
import { useState } from 'react'
import UserMenu from './UserMenu'

export default function Top() {
    const [loggedIn, SetLoggedIn] = useState(false)

  return (
    <div className={styles.top}>
        <div className={styles.top__container}>
            <div></div>
            <ul className={styles.top__list}>
                <li>
                    <img 
                        src='https://robohash.org/infernomart'
                        alt=""
                    />
                    <span>England / GBP</span>
                </li>
                <li>
                    <MdSecurity />
                    <span>Buyer Protection</span>
                </li>
                <li>
                    <span>Customer Service</span>
                </li>
                <li>
                    <span>Help</span>
                </li>
                <li>
                    <BsSuitHeart />
                    <Link href='/profile/wishlist'>
                        <span>Wishlist</span>
                    </Link>
                </li>
                <li>
                    { loggedIn ? (
                        <li>
                            <div className={styles.flex}>
                            <img 
                                src='https://robohash.org/accountjake'
                                alt=""
                            />
                                <span>Jake</span>
                                <RiArrowDropDownFill />
                            </div>
                        </li>
                    ):(
                        <li>
                            <div className={styles.flex}>
                                <RiAccountCircleLine />
                                <span>Account</span>
                                <RiArrowDropDownFill />
                            </div>
                        </li>   
                    )}
                    <UserMenu  loggedIn={loggedIn}/>
                </li>
            </ul>
        </div>
    </div>
  )
}
