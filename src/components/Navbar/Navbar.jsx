/* eslint-disable no-unused-vars */
import styles from './Navbar.module.css'
import en from '../../assets/images/en.png'
import closeSvg from '../../assets/close.svg'
import ru from '../../assets/images/ru.png'
import { CiSearch } from 'react-icons/ci'
import { FaBarsStaggered } from 'react-icons/fa6'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchContext } from '../../context/SearchContext'

function Navbar() {
  const { t, i18n } = useTranslation()
  const languages = localStorage.getItem('i18nextLng') || 'uz'

  const handleChange = (lang) => {
    i18n.changeLanguage(lang)
  }

  const base_URL = 'https://autoapi.dezinfeksiyatashkent.uz/api'
  const base_URL2 =
    'https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/'
  const [datas, setDatas] = useState([])
  const [isBrandHover, setIsBrandHover] = useState(false)


  //
  const [navbarBlock, setNavbarBlock] = useState(false);
  // const {datasCar, searchCar, handleSearchCar} = useSearchContext()
  const { searchCar, handleSearchCar } = useSearchContext();

  // console.log(datasCar, searchCar)

  const getFetch = async (url) => {
    const response = await fetch(url, {
      method: 'GET',
    })
    return await response.json()
  }

  useEffect(() => {
    getFetch(`${base_URL}/brands`).then((data) => {
      setDatas(data?.data)
    })
  }, [])

  return (
    <>
      <div className="nav" id="nav">
        <div className={styles.container}>
          <div className={styles.nav__head}>
            <div className={styles.nav__left}>
              <div className={styles.nav__lang}>
                <img
                  onClick={() => handleChange('en')}
                  className={styles.nav__lang__img}
                  width={20}
                  src={en}
                  alt="En"
                />
                <img
                  onClick={() => handleChange('ru')}
                  className={styles.nav__lang__img}
                  width={20}
                  src={ru}
                  alt="Ru"
                />
              </div>
              <div className={styles.nav__search}>
                <CiSearch className={styles.nav__search__icon} />
                <input
                  className={styles.nav__search__input}
                  type="text"
                  placeholder="Search..."
                  value={searchCar}
                  onChange={handleSearchCar}
                  onKeyDown={handleSearchCar}
                />
              </div>
              <div>
                <Link to="/">
                  <img width={100} src={logo} alt="" />
                </Link>
              </div>
            </div>
            <div className={styles.nav__right}>
              <ul className={styles.nav__right__ul}>
                <li className={styles.nav__right__ul_li}>
                  <Link className={styles.nav__right__ul_li_a} to="/cars">
                    {t('cars')}
                  </Link>
                </li>
                <li
                  className={styles.nav__right__ul_li}
                  onMouseEnter={() => setIsBrandHover(true)}
                  onMouseLeave={() => setIsBrandHover(false)}
                >
                  <Link className={styles.nav__right__ul_li_a}>
                    {t('brand')}
                  </Link>
                  {isBrandHover && (
                    <div className={styles.nav__brand_hover}>
                      <div className={styles.nav__brand}>
                        {datas.map((data) => (
                          <Link to={`/brand/${data.id}`} key={data.id}>
                            <div className={styles.nav__brand_inline}>
                              <img
                                className={styles.nav__brand_img}
                                src={`${base_URL2}${data.image_src}`}
                                alt="Brand"
                              />
                              <p className={styles.nav__brand_text}>
                                {data.title}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
                <li className={styles.nav__right__ul_li}>
                  <Link className={styles.nav__right__ul_li_a} to="/services">
                    {t('service')}
                  </Link>
                </li>
                <li className={styles.nav__right__ul_li}>
                  <Link className={styles.nav__right__ul_li_a} to="/about">
                    {t('about')}
                  </Link>
                </li>
                <li className={styles.nav__right__ul_li}>
                  <Link className={styles.nav__right__ul_li_a} to="/contacts">
                    {t('contacts')}
                  </Link>
                </li>
                <li className={styles.nav__right__ul_li}>
                  <Link className={styles.nav__right__ul_li_a} to="/blog">
                    {t('blog')}
                  </Link>
                </li>
              </ul>
              <p className={styles.nav__right_number}>+971 (55) 846 21 24</p>
            </div>
          </div>

          <div className={styles.nav__head_mobile}>
            <div className={styles.nav__lang}>
              <img
                onClick={() => handleChange('en')}
                className={styles.nav__lang__img}
                width={20}
                src={en}
                alt="En"
              />
              <img
                onClick={() => handleChange('ru')}
                className={styles.nav__lang__img}
                width={20}
                src={ru}
                alt="Ru"
              />
            </div>
            <div className={styles.nav__search}>
              <CiSearch className={styles.nav__search__icon} />
              <input
                className={styles.nav__search__input}
                type="text"
                placeholder="Search..."
              />
            </div>
            <div>
              <Link to="/">
                <img width={100} src={logo} alt="" />
              </Link>
            </div>
            <div>
              <label htmlFor="menu-toggle">
                <FaBarsStaggered className={styles.navbar__burger} />
              </label>
            </div>
          </div>
        </div>
      </div>
      <input type="checkbox" id="menu-toggle" className={styles.menu_toggle} />
      <div className={styles.navbar__right_bar} id="mobileBlock">
                  <label htmlFor="menu-toggle">
                  <img src={closeSvg} className={styles.closeSvgImg} alt="" id="closeImg"/>
                  </label>
        <ul className={styles.nav__right__ul_mobile}>
          <li className={styles.nav__right__ul_li}>
            <Link className={styles.nav__right__ul_li_a} to="/cars">
              {t('cars')}
            </Link>
          </li>
          <li className={styles.nav__right__ul_li}>
            <Link className={styles.nav__right__ul_li_a}>{t('brand')}</Link>
          </li>
          <li className={styles.nav__right__ul_li}>
            <Link className={styles.nav__right__ul_li_a} to="/services">
              {t('service')}
            </Link>
          </li>
          <li className={styles.nav__right__ul_li}>
            <Link className={styles.nav__right__ul_li_a} to="/about">
              {t('about')}
            </Link>
          </li>
          <li className={styles.nav__right__ul_li}>
            <Link className={styles.nav__right__ul_li_a} to="/contacts">
              {t('contacts')}
            </Link>
          </li>
          <li className={styles.nav__right__ul_li}>
            <Link className={styles.nav__right__ul_li_a} to="/blog">
              {t('blog')}
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
