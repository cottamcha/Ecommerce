import dynamic from 'next/dynamic';
import Top from './Top'
import styles from './styles.module.scss'
import Main from './Main';

const Banner = dynamic(()=> import('./Banner'))

export default function Header() {
    return (
        <header className={styles.header}>
            <Banner />
            <Top />
            <Main />
        </header>
    )
}