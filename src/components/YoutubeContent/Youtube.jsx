import './Youtube.css'
import {Link} from 'react-router-dom'
import chevron from '../../assets/images/shevron.svg'
import { useTranslation } from 'react-i18next'
const   Youtube = () => {
  const {t} = useTranslation()
  return (
    <div className="container">
      <div className="youtube__block">
        <div className="youtube__left">
        <iframe className='youtube_left_video' src="https://www.youtube.com/embed/6Bcg46rxqAE?si=fQdBJ4s8XXGNSkzf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="youtube__right">
          <h1 className="youtube__right_title">{t("youTube1")}</h1>
          <p className="youtube__right_text">{t("youTube2")}</p>
          <Link to="/cars" className="link">
            <p className='link__text'>{t("youTube3")}</p>
            <img src={chevron} width={30} height={30} alt="Chevron" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Youtube