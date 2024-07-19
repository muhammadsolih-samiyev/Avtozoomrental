import "./About.css";
import "./About_resp.css";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <div className="About">
      <div className="about_header">
        <a href="/" className="about_page_link">
          {t("Luxury_Cars_for_Rent_in_Dubai")} / <span>{t("aboutUs2")}</span>
        </a>
        <h1 className="about_title">{t("About_Us")}</h1>
      </div>
      <div>
        <h1 className="about_header_info">
          {t("Welcome_to_Auto_Zoom")}
        </h1>
        <p className="about_bigText">
          {t("In_a_world_where_every_trip")}
        </p>
      </div>
      <div>
        <h1 className="about_header_info">{t("Why_Auto_Zoom")}</h1>
      </div>
      <div>
        <p className="about_bigText">
          <span className="about_info">{t("Elegant_Car_Fleet")}</span> {t("We_provide_you")}
        </p>
      </div>
      <div>
        <p className="about_bigText">
          <span className="about_info">{t("Worry_Free_Rental")}</span> {t("Our_goal_is_to_make")}
        </p>
      </div>
      <div>
        <p className="about_bigText">
          <span className="about_info">{t("Transparency_and_Trust")}</span> {t("We_value_every_customer")}
        </p>
      </div>
      <div>
        <p className="about_bigText">
          <span className="about_info">{t("Service_at_Your_Level")}</span> {t("Our_friendly_and_professional_team")}
        </p>
      </div>
      <div className="about_sub_div">
        <p className="about_bigText">
          <span className="about_info2">{t("Our_Mission")}</span> {t("Auto_Zoom_Car_Rental")}
        </p>
      </div>
      <div>
        <p className="about_bigText">
          <span className="about_info2">{t("Contact_Us")}</span> {t("Trust_the_professionals")}
        </p>
      </div>
      <hr />
    </div>
  );
}

export default About;
