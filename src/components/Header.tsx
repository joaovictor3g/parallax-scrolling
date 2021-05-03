import Link from 'next/link';
import styles from '../styles/components/Header.module.scss';

export function Header() {
    return (
        <header className={styles.header}>
            <Link href="#">
                <a className={styles.logo}>Logo</a>
            </Link>

            <ul>
                <li>
                    <Link href="#">
                        <a className={styles.active}>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>Work</a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </header>
    );
}