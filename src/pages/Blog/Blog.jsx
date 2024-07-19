/* eslint-disable no-unused-vars */
import "./Blog.css";
import "./Blog_resp.css";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

//Images Imported
import blogImg1 from "../../assets/images/blogImg1.jpg";
import blogImg2 from "../../assets/images/blogImg2.jpg";
import blogImg3 from "../../assets/images/blogImg3.jpg";

//ShevronImg
import shevronRight from "../../assets/images/shevron.svg";

function Blog() {
  const { t } = useTranslation();

  return (
    <div className="Blog">
      <div className="Blog_head">
        <a href="/" className="Blog_head_link">
          <span>{t("Luxury_Cars_for_Rent_in_Dubai")}</span> <span> / {t("Blog")}</span>
        </a>
        <h1 className="Blog_header">{t("Blog")}</h1>
      </div>
      <div className="Blog_row">
        <div className="Blog_col">
          <div className="Blog_col_Img_container">
            <img
              src={blogImg1}
              className="Blog_col_img"
              width={200}
              height={200}
              alt=""
            />
          </div>
          <div className="Blog_col_info">
            <h2 className="Blog_col_header">
              {t("Top_3_Destinations_to_Visit")}
            </h2>
            <p className="Blog_col_para">
              {t("One_of_the_main_reasons")}
            </p>
            <div className="Blog_col_info_col">
              <span>25 Sep 2022</span>
              <Link to={`/blog/blog_info_1`} onClick={() => window.scrollTo(0, 0)}>
                <img src={shevronRight} alt="" className="shevronRight" width={30} height={30} />
              </Link>
            </div>
          </div>
        </div>
        <div className="Blog_col">
          <div className="Blog_col_Img_container">
            <img
              src={blogImg2}
              className="Blog_col_img"
              width={200}
              height={200}
              alt=""
            />
          </div>
          <div className="Blog_col_info">
            <h2 className="Blog_col_header">
              {t("Top_5_spots_for_car_photo")}
            </h2>
            <p className="Blog_col_para">
              {t("Top_5_spots_description")}
            </p>
            <div className="Blog_col_info_col">
              <span>11 Feb 2022</span>
              <Link to={`/blog/blog_info_2`} onClick={() => window.scrollTo(0, 0)}>
                <img src={shevronRight} alt="" className="shevronRight" width={30} height={30} />
              </Link>
            </div>
          </div>
        </div>
        <div className="Blog_col">
          <div className="Blog_col_Img_container">
            <img
              src={blogImg3}
              className="Blog_col_img"
              width={200}
              height={200}
              alt=""
            />
          </div>
          <div className="Blog_col_info">
            <h2 className="Blog_col_header">
              {t("Top_5_Reasons_to_Rent")}
            </h2>
            <p className="Blog_col_para">
              {t("Summer_is_more_than")}
            </p>
            <div className="Blog_col_info_col">
              <span>31 Jul 2022</span>
              <Link to={`/blog/blog_info_3`} onClick={() => window.scrollTo(0, 0)}>
                <img src={shevronRight} alt="" className="shevronRight" width={30} height={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
