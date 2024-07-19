import React from 'react';
import { useTranslation } from 'react-i18next';
import './terms.css';

function Terms() {
  const { t } = useTranslation();

  return (
    <div className="terms">
      <div className="container">
        <div className="terms_page">
          <h1 className="terms_title">{t('TERMS_AND_CONDITIONS')}</h1>
          <p className="terms_text">
            {t('The_Lessor_mentioned_overleaf')}
          </p>

          <h2 className="terms_h2">{t('Delivery_and_Return')}</h2>
          <p className="terms_text">
            {t('The_vehicle_is_delivered')}
          </p>

          <h2 className="terms_h2">{t('Damage_Loss_Theft_etc')}</h2>
          <p className="terms_text">
            {t('In_the_event_of_damages')}
          </p>

          <h2 className="terms_h2">{t('Charges')}</h2>
          <p className="terms_text">
            {t('Renter_shall_pay_any_charges')}
          </p>

          <h2 className="terms_h2">{t('Indemnity')}</h2>
          <p className="terms_text">
            {t('The_Lessor_is_only_responsible')}
          </p>

          <h2 className="terms_h2">{t('Conditions_of_use')}</h2>
          <p className="terms_text">
            {t('Rented_vehicles_are_not_to_be_driven')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Terms;
