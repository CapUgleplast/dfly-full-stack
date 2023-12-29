import styles from './gallery.module.scss'
import ArtCard from '@/components/Pages/Arts/wallGallery/Blocks/artCard'

export default function Gallery(arts: {arts: []}) {
    return (
        <div className={styles.gallery}>
            {arts?.arts.map((art: any) => (
                <ArtCard key={art.id} value={art}/>
                )
            )}

        </div>
    )
}