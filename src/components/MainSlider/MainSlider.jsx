import { useTranslation } from 'react-i18next'
import CenterMode from './CenterMode'
import styles from './MainSlider.module.css'

function MainSlider() {
  const {t} = useTranslation()
  return (
    <div className={styles.slider__container}>
      <div className={styles.slider__title}>
        <p className={styles.title}>{t("navbar1")}</p>
        <p className={styles.title}>{t("navbar2")}</p>
        <div className={styles.sub__title_block}>
          <p className={styles.sub__title}>
          {t("navbar3")}
          </p>
        </div>
        <p className={styles.link__text}>{t("navbar4")}</p>
      </div>
      <CenterMode />
    </div>
  )
}

export default MainSlider
