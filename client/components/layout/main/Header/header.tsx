import styles from './header.module.scss'
import Image from "next/image";
import Logo from '@/public/logo.svg'

export default function Header(props: {theme?: string}) {
    const theme = props?.theme || ''
    return (
        <div className={styles.main}>
            <div className={styles.buttons}>
                <button/>
                <button/>
            </div>
            <Image
                src={Logo}
                alt="logoDfly"
                className={`${styles.logo} ${styles[theme]}`}
                width={120}
                height={120}
                priority
            />
            <div className={styles.buttons}>
                <button/>
                <button/>
                <button/>
                <button/>
            </div>
        </div>
    )
}