import React, { useState } from 'react';
import './faq.css';
import { t } from 'i18next';

function Faq() {
  const [isOpen1, setIsOpen1] = useState(false); 
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false); 
  const [isOpen4, setIsOpen4] = useState(false); 
  const [isOpen5, setIsOpen5] = useState(false); 

  const toggleDropdown1 = () => setIsOpen1(!isOpen1);
  const toggleDropdown2 = () => setIsOpen2(!isOpen2);
  const toggleDropdown3 = () => setIsOpen3(!isOpen3);
  const toggleDropdown4 = () => setIsOpen4(!isOpen4);
  const toggleDropdown5 = () => setIsOpen5(!isOpen5);

  return (
    <div className="faq">
      <div className="container">
        <h3 className="faq_h3">{t("faq1")}</h3>
        <h1 className="faq_title">{t("faq2")}</h1>

        <div className="dropdown" onClick={toggleDropdown1}>
          <div className={`arrow ${isOpen1 ? 'open' : ''}`}>➤</div>
          <h2 className="heading">{t("faq3")}</h2>
        </div>
        {isOpen1 ? (
          <div className="content">
            <p>{t("faq4")}</p>
            <hr />
          </div>
        ) : (
          <hr className="faq_hr" />
        )}

        <div className="dropdown" onClick={toggleDropdown2}>
          <div className={`arrow ${isOpen2 ? 'open' : ''}`}>➤</div>
          <h2 className="heading">{t("faq5")}</h2>
        </div>
        {isOpen2 ? (
          <div className="content">
            <p>{t("faq6")}</p>
            <hr />
          </div>
        ) : (
          <hr className="faq_hr" />
        )}

        <div className="dropdown" onClick={toggleDropdown3}>
          <div className={`arrow ${isOpen3 ? 'open' : ''}`}>➤</div>
          <h2 className="heading">{t("faq7")}</h2>
        </div>
        {isOpen3 ? (
          <div className="content">
            <p>{t("faq8")}</p>
            <hr />
          </div>
        ) : (
          <hr className="faq_hr" />
        )}

        <div className="dropdown" onClick={toggleDropdown4}>
          <div className={`arrow ${isOpen4 ? 'open' : ''}`}>➤</div>
          <h2 className="heading">{t("faq9")}</h2>
        </div>
        {isOpen4 ? (
          <div className="content">
            <p>{t("faq10")}</p>
            <hr />
          </div>
        ) : (
          <hr className="faq_hr" />
        )}

        <div className="dropdown" onClick={toggleDropdown5}>
          <div className={`arrow ${isOpen5 ? 'open' : ''}`}>➤</div>
          <h2 className="heading">{t("fa11")}</h2>
        </div>
        {isOpen5 ? (
          <div className="content">
            <p>{t("faq12")}</p>
            <hr />
          </div>
        ) : (
          <hr className="faq_hr" />
        )}
      </div>
    </div>
  );
}

export default Faq;
