import styles from './artCard.module.scss'
import Image from 'next/image'
import Link from "next/link";

interface art {
        id: Number,
        title: String,
        material: String,
        width: any,
        height: any,
        year: Number,
        price: String,
        content: String,
        upload: any[]
}

export default function ArtCard(item: {value: art}) {
    return (
        <Link className={styles.card} href={`/arts/${item?.value?.id}`}>
            <Image  className={styles.poster}
                    key={item?.value?.upload[0]?.id}
                    src={item?.value?.upload[0]?.name}
                    width={item?.value?.width * 6}
                    height={item?.value?.height * 6}
                    alt={item?.value?.upload[0]?.name}
            />
            <div className={styles.info}>
                <div className={styles.title}>{item?.value?.title}</div>
                <div className={styles.sub_info}>{`Цена: ${item?.value?.price}`}</div>
                <div className={styles.sub_info}>{`${item?.value?.material}, ${item?.value?.width} на ${item?.value?.height}см, ${item?.value?.year}г.`}</div>
            </div>
        </Link>
    )
}