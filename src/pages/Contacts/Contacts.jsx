import "./Contacts.css";
import "./Contacts_resp.css";
import { useTranslation } from "react-i18next";

function Contacts() {
  const { t, i18n } = useTranslation();

  return (
    <div className="Contacts">
      <div className="contacts_head">
        <a href="/" className="contacts_head_link">
          <span>{t("Luxury_Cars_for_Rent_in_Dubai")}</span> / <span>{t("contacts")}</span>
        </a>
        <h1 className="contacts_header">{t("HAVE_ANY_QUESTIONS")}</h1>
        <div className="contacts_header_text">
          <div>{t("We_would_love_to_help")}</div>
          <div>
            {t("Auto_Zoom_Car_Rental_Dubai")}
          </div>
        </div>
      </div>
      <div className="contacts_address">
        <h4 className="contacts_address_header">{t("Head_Office")}</h4>
        <div className="contacts_address_flexed">
          <i className="fa-solid fa-location-dot"></i>
          <span className="contacts_address_info">
            {t("Elite_3_Sports_City_Dubai")}
          </span>
        </div>
        <div className="contacts_address_flexed">
          <i className="fa-solid fa-phone"></i>
          <span className="contacts_address_info">{t("phone_number")}</span>
        </div>
        <div className="contacts_address_flexed">
          <i className="fa-solid fa-envelope-open-text"></i>
          <span className="contacts_address_info">
            office@autozoomrental.com
          </span>
        </div>
      </div>
      <hr className="contacts_hr" />
      <div className="forMap">
        <a
          href="https://yandex.uz/maps/11499/dubai/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "0px",
          }}
        ></a>
        <a
          href="https://yandex.uz/maps/11499/dubai/?ll=55.216868%2C25.043460&utm_medium=mapframe&utm_source=maps&z=16.63"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "14px",
          }}
        ></a>
        <iframe
          src={`https://yandex.uz/map-widget/v1/?ll=55.216868%2C25.043460&z=16.63&lang=${i18n.language}`}
          frameBorder="1"
          allowFullScreen="true"
          style={{ width: "100%", height: "47vh", borderRadius: "23px" }}
        ></iframe>
      </div>
    </div>
  );
}

export default Contacts;
