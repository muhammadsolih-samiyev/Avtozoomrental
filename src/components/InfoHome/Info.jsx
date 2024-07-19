import { useTranslation } from 'react-i18next'
import './Info.css'
function Info() {
  const {t} =useTranslation()
  return (
    <div className="container">
      <div className="info__block">
        <h2 className="info__title">{t("info1")}</h2>

        <p className="info__text">
          {t("info2")}
        </p>

        <h2 className="info__title">What are the requirements to rent a luxury car in Dubai?</h2>

        <p className="info__text">
         {t("info3")}
        </p>
      </div>
    </div>
  )
}

export default Info
