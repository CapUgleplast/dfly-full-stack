import styles from '@/components/Pages/Arts/arts.module.scss'
import Gallery from "@/components/Pages/Arts/wallGallery/Gallery";
import Image from "next/image";


export default function Arts(props: any) {
    const {list} = props
    return (
        <>
            <div className={styles.header}>
                <Image  className={styles.poster}
                            src={'static/artsHeader.webp'}
                            fill={true}
                            alt={''}
                            priority
                />
            </div>
            <div>
                <Gallery arts={list.data}/>
            </div>
        </>
    )
}