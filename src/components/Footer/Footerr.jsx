import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import './Footer.css';
import Logo from '../../assets/images/logo.svg';
import { useTranslation } from 'react-i18next';

function Footer() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://api.autozoomrental.com/api/categories')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setCategories(data.data);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
   const {t}  = useTranslation()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_box">
          <div className="footer_part">
            <Link to="/" className="Link"  onClick={scrollTo({top:0})}>
              <img width={100} src={Logo} alt="Logo" />
            </Link>
            <h1 className="footer_title">
              {t("footer1")}
            </h1>
            <p className="footer_text1">
            {t("footer2")}
            </p>
          </div>

          <div className="footer_part1">
            <h3 className="footer_cars">   {t("footer3")}</h3>
            {categories.map((category) => (
              <div key={category.id} className="category">
                <p className="text"><Link to={`/category/${category.id}`}  onClick={scrollTo({top:0})} className="Link">{category.name_en}</Link></p>
              </div>
            ))}
          </div>

          <div className="footer_part">
            <h3 className="footer_blog"><Link to="/blog"  onClick={() => window.scrollTo(0, 0)} className="Link">   {t("footer4")}</Link></h3>
            <h3 className="footer_service"><Link to="/services"  onClick={() => window.scrollTo(0, 0)} className="Link">   {t("footer5")}</Link></h3>
            <div>
              <h3 className="footer_contact"><Link to="/contacts"  onClick={() => window.scrollTo(0, 0)} className="Link">   {t("footer6")}</Link></h3>
              <p className="footer_text">
              {t("footer7")}
              </p>
              <p className="footer_text">
                +971 55 8462124
              </p>
              <p className="footer_text">
              {t("footer8")}
              </p>
            </div>
          </div>

          <div className="footer_part">
            <h3 className="footer_about"><Link to="/about"  onClick={() => window.scrollTo(0, 0)} className="Link">   {t("footer9")}</Link></h3>
            <p className="footer_text2"><Link to="/our-team"  onClick={() => window.scrollTo(0, 0)} className="Link">   {t("footer10")}</Link></p>
            <p className="footer_text2"><Link to="/faq"  onClick={() => window.scrollTo(0, 0)} className="Link">   {t("footer11")}</Link></p>
            <h3 className="footer_follow">   {t("footer12")}</h3>
            <div className="follow_icon">
              <Link to="https://www.instagram.com/autozoomrental"  onClick={scrollTo({top:0})} target="_blank" className="Link"><FaInstagram size={25} /></Link>
              <Link to="https://www.facebook.com/autozoomrental"  onClick={scrollTo({top:0})} target="_blank" className="Link"><FaFacebook size={25} /></Link>
              <Link to="https://www.youtube.com/autozoomrental"  onClick={scrollTo({top:0})} target="_blank" className="Link"><FaYoutube size={25} /></Link>
            </div>
          </div>
        </div>

        <div className="footer_bottom">
          <div className="footer_btn">
            <button className="footer_button">
              <a href="tel:+998938386767" className="Link"  onClick={scrollTo({top:0})}>   {t("footer13")}</a>
            </button>
          </div>

          <div className="footer_line">
            <hr />
            <div className="line_box">
              <p>   {t("footer14")}<br />   {t("footer15")}.</p>
              <p><Link to="/terms" onClick={() => window.scrollTo(0, 0)} className="Link">   {t("footer16")}</Link></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
