import styles from '@/components/Pages/Contacts/contacts.module.scss'
import Image from "next/image";


export default function Contacts(props: any) {
    const {value} = props
    return (
        <div className={styles.main}>
            <div className={styles.background}>
                <Image  className={styles.poster}
                            src={'static/ContactsBG.webp'}
                            fill={true}
                            alt={''}
                            priority
                />
            </div>

            <div className={styles.info}>
                <h1 className={styles.title}>Контакты</h1>
                <div className={styles.social}>
                    {
                        value.map((val: string, idx: number) => (
                            <div key={idx}>{val}
                                <button className={styles.icon}>
                                    asd
                                </button>
                            </div>
                            )
                        )
                    }
                </div>
                <button className={styles.heart}>asf</button>
            </div>
        </div>
    )
}