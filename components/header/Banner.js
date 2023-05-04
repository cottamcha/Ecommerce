import Link from 'next/link'
import styles from './styles.module.scss'

function Banner() {
  return (
    <Link href="/browse">
        <div className={styles.ad}></div>
    </Link>
  )
}


export default Banner