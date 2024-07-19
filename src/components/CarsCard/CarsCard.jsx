/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import './CarsCard.css';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CarsCard = () => {
  const {t} = useTranslation()
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getCars();
  }, []);

  const urlImg = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/";

  const getCars = () => {
    fetch('https://autoapi.dezinfeksiyatashkent.uz/api/cars')
      .then((res) => res.json())
      .then((data) => {
        console.log(data?.data);
        setCars(data?.data || []);
      })
      .catch((error) => {
        console.error('Error fetching cars:', error);
      });
  };

  // Group cars by category
  const groupedCars = cars.reduce((acc, car) => {
    const category = car?.category?.name_en;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(car);
    return acc;
  }, {});

  return (
    <div className='Add'>
      <div className="container">
        {Object.keys(groupedCars).map((category, index) => (
          <div key={index}>
            <div className='add-top'>
              <h1 className='add-title'>{category}</h1>
              <Link onClick={() =>  window.scrollTo({ top: 0 }) } to={`/cars/${groupedCars[category][0]?.id}`} className='add-sublink'>
              {t('SEE_ALL')} <i className="left-icon fa-solid fa-chevron-right"></i>
              </Link>
            </div>
            <Swiper
              className="cards"
              slidesPerView={3}  // Default 3 slides
              spaceBetween={30} // Space between slides
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              breakpoints={{
                1200: {
                  slidesPerView: 3,  // 1200px and up
                },
                1156: {
                  slidesPerView: 3,  // 1156px to 1199px
                },
                780: {
                  slidesPerView: 2,  // 700px to 1155px
                },
                320: {
                  slidesPerView: 1,  // 320px to 699px
                },
              }}
            >
              {groupedCars[category].map((car, carIndex) => (
                <SwiperSlide key={carIndex}>
                  <Link to={`/carsparams/${car.id}`} onClick={() => window.scrollTo({top:0})}>
                    <div className='card'>
                      {car?.car_images[0]?.image?.src && (
                        <img className='card-image' src={`${urlImg}${car?.car_images[0]?.image?.src}`} alt={car?.name} />
                      )}
                      <h2>{car?.brand?.title}</h2>
                      <div className='hr' />
                      <div>
                        <span className='model_name'>{car?.model?.name}</span>
                        <span className='model_name'>{car?.price_in_usd}</span>
                        {car?.price_in_usd && <span className='car-price'>{` / $ ${car?.price_in_usd}`}</span>}
                      </div>
                      <p className='car-title'>{t("carsCard")}</p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarsCard;
