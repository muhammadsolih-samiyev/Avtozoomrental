/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./BlogInfo.css";
import "./BlogInfo_resp.css";

function BlogInfo({ header, main_info, bHead, src, bInfo }) {
  return (
    <div className="BlogInfo">
      <div className="BlogInfo_head">
        <a href="/" className="BlogInfo_head_link">
          <span>
            Luxory Cars for Dubai <span>/ Blog</span>{" "}
            <span>/ Top 5 Reasons to Rent a Car Dubai</span>
          </span>
        </a>
        <h1 className="BlogInfo_main_header">{header}</h1>
        <p className="BlogInfo_main_info">{main_info}</p>
      </div>
      <div className="BlogInfo_body">
        <p className="BlogInfo_body_header">{bHead}</p>
        <img src={src} className="BlogInfo_body_img" alt="" />
        <p className="BlogInfo_body_header_para">{bInfo}</p>
      </div>
    </div>
  );
}

export default BlogInfo;
