import styles from './index.module.scss'
import bgWebp from '@/assets/images/beton2.webp'
import bg from '@/assets/images/beton2.jpg'
export const MainScreen: React.FC = () => {
    return (
        <picture className={styles.screen}>
            <source srcSet={bgWebp} type={`image/webp`}/>
            <img src={bg} alt="bg"/>
        </picture>
    )
}