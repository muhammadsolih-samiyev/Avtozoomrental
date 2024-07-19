import { useEffect, useState } from 'react'
import { useSearchContext } from '../../context/SearchContext'
import './CarsAll.css'
import './CarsAll_resp.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const CarsAll = ({ filteredCars }) => {
  const { searchCar } = useSearchContext()
  const { t } = useTranslation()
  const [displayedCars, setDisplayedCars] = useState(filteredCars)
  const baseImgUrl = 'https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/'

  useEffect(() => {
    setDisplayedCars(
      filteredCars.filter((car) =>
        car.brand.title.toLowerCase().includes(searchCar.toLowerCase())
      )
    )
  }, [filteredCars, searchCar])

  return (
    <div className="cars-all">
      <h1 className="cars-all-header">All Cars</h1>
      <div className="carsAll_container__">
        <div className="Cars_container_main_cars2">
          {displayedCars.length > 0 ? (
            displayedCars.map((car, index) => (
              <div className="Cars_container_main_car2" key={index}>
                <Link
                  to={`/carsparams/${car.id}`}
                  style={{ textDecoration: 'none' }}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <div className="Cars_container_main_car_imgContainer2" key={index}>
                    <img
                      src={`${baseImgUrl}/${car.car_images[0]?.image?.src}`}
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="Cars_container_main_car_info2">
                    <h5 className="Cars_container_main_car_heading2">
                      {`${car.brand.title} ${car.model.name}`}
                    </h5>
                    <p>
                      <span className="Cars_container_main_car_price_in_aed2">
                        AED {car.price_in_aed}
                      </span>
                      <span className="Cars_container_main_car_price_in_usd2">
                        / $ {car.price_in_usd}
                      </span>
                    </p>
                    <p className="Cars_container_main_car_price_in_usd2">
                      {t('per_day')}
                    </p>
                  </div>
                </Link>
                <div className="Cars_container_main_car_info2_buttons2">
                  <Link to={`/cars`}>
                    <div className="Cars_container_main_car_info2_btn_whatsApp2">
                      <button>
                        <i className="fa-brands fa-whatsapp"></i> {t('WhatsApp')}
                      </button>
                    </div>
                  </Link>
                  <Link to={`/cars`}>
                    <div className="Cars_container_main_car_info2_btn_telegram2">
                      <button>
                        <i className="fa-brands fa-telegram"></i> {t('Telegram')}
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No cars found</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default CarsAll
