/* eslint-disable no-unused-vars */
import "./Services.css";
import "./Services_resp.css";

//Images
import service1 from "../../assets/images/service1.jpg";
import service2 from "../../assets/images/service2.jpg";

//Shevron-right
import shevronRight from "../../assets/images/shevron.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Services() {
  const {t} = useTranslation()
  return (
    <div className="Services">
      <div className="services_head">
        <Link to={"/"} className="services_head_link">
          <span>{t("servicesCard1")}</span> <span>/ {t("service")}</span>
        </Link>
        <h1 className="services_header">{t("service")}</h1>
      </div>
      <div className="services_main">
        <div className="services_sub_main_1">
          <img src={service1} className="serviceImg" alt="" />
          <div className="services_sub_main_space">
            <h4 className="services_sub_main_info">
           {t("servicesCard2")}
            </h4>
            <p className="services_sub_main_text">
            {t("servicesCard3")}
            </p>
            <div className="servicesLink">
              <Link
                to={"/services/sport_car_rent"}
                onClick={() => window.scrollTo({ top: 0 })}
                className="services_sub_main_link"
              >
                {t("servicesCard4")}{" "}
              </Link>
              <Link
                to={"/services/sport_car_rent"}
                onClick={() => window.scrollTo({ top: 0 })}
              >
                <img
                  src={shevronRight}
                  className="shevronRight services_sub_main_link"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="services_sub_main_2">
          <img src={service2} className="serviceImg" alt="" />
          <div className="services_sub_main_space">
            <h4 className="services_sub_main_info">
              {t("servicesCard5")}
            </h4>
            <p className="services_sub_main_text">
              {t("servicesCard6")}
            </p>
            <div className="servicesLink">
              <Link
                to={"/services/photoshoot-with-luxury-car-in-dubai"}
                onClick={() => window.scrollTo({ top: 0 })}
                className="services_sub_main_link"
              >
                {t("servicesCard4")}{" "}
              </Link>
              <Link
                to={"/services/photoshoot-with-luxury-car-in-dubai"}
                onClick={() => window.scrollTo({ top: 0 })}
              >
                <img
                  src={shevronRight}
                  className="shevronRight services_sub_main_link"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
