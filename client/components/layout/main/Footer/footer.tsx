import styles from './footer.module.scss'
import Link from "next/link";

export default function Footer() {
    return (
        <div className={styles.main}>
            <div className={styles.logo}>LOGO</div>
            <div className={styles.links}>
                <Link href="/manifest">Манифест</Link>
                <Link href="/arts">Картины</Link>
                <Link href="/about">Об авторе</Link>
                <Link href="/contacts">Контакты</Link>
            </div>
            <div className={styles.copy}>D'lfy@2023</div>
        </div>
    )
}