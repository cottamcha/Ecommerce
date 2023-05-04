import Link from 'next/link'
import styles from './styles.module.scss'
import { FaSearch } from 'react-icons/fa'
import { BiCart } from 'react-icons/bi'
import { useSelector } from 'react-redux'


export default function Main() {
    const {cart} =useSelector((state)=> ({...state}))

  return (
    <div className={styles.main}>
        <div className={styles.main__container}>
            <Link href='/' legacyBehavior>
                <a className={styles.logo}>
                    <img src='../../../logo.png' alt='logo' />
                </a>
            </Link>
            <div className={styles.search}>
                <input type='text' placeholder='Search...'/>
                <div className={styles.search__icon}>
                    <FaSearch />
                </div>
            </div>
            <Link href='/cart' legacyBehavior>
                <a className={styles.cart}>
                    <BiCart />
                    <span>{cart.length}</span>
                </a>
            </Link>
        </div>
    </div>
  )
}
