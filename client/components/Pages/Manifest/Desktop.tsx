import styles from '@/components/Pages/Manifest/manifest.module.scss'


export default function Manifest(props: any) {
    const {title, description} = props

    return (
        <div className={styles.body}>
            <h1>Манифест</h1>
            <h2>{title}</h2>
            <div className={styles.text}>{description}</div>
        </div>
    )
}