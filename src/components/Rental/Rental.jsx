import './Rental.css'
import chevron from '../../assets/images/shevron.svg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Rental() {
  const {t} = useTranslation()
  return (
    <div className="container">
      <div className="rental__block">
        <div className="rental__left">
          <img src="https://www.autozoomrental.com/static/media/lambobest.6a1001239e1fdabdd27c.webp" className="rental__left_img" alt={t("ALT_TEXT_IMAGE")} />
        </div>
        <div className="rental__right">
          <h2 className="rental__right_title">{t("SUPERCAR_RENTAL_DUBAI")}</h2>
          <p className="rental__right_text">{t("HIRE_LATEST_SUPERCAR")}</p>
          <Link to="/cars" className="link">
            <p className='link__text'>{t("SEE_ALL")}</p>
            <img src={chevron} width={30} height={30} alt={t("ALT_TEXT_CHEVRON")} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Rental
