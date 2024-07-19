import "./Add.css";
import "./Add_resp.css";

//Image
import addImg from "../../assets/images/services_in.jpg";

//CheckedImg
import checkedImg from "../../assets/images/checkedImg.png";

function Add() {
  return (
    <div className="Add">
      <div className="Add_head">
        <a href="/" className="Add_head_link">
          Luxury Cars for Rent in Dubai/ Services/ Sports Car Rental Dubai Style
          Tour in Dubai
        </a>
        <h1 className="Add_header">
          Sports Car Rental Dubai Style Tour in Dubai
        </h1>
      </div>
      <div className="Add_row">
        <div className="Add_col">
          <img src={addImg} className="Add_col_img" alt="" />
          <h2 className="Add_col_type">Basic</h2>
          <div className="Add_col_price">
            <span className="Add_col_price_cost">1000</span>
            <span className="Add_col_price_seat">one person</span>
          </div>
          <div className="Add_col_text">
            <p>
              Dune buggies in Dubai Book your ride on the most exciting
              adventure activity to hit the desert and later pamper your self to
              a traditional Arabian hospitality.
            </p>
          </div>
          <h3 className="Add_col_head_info">Package Inclusions:</h3>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>Premium Transfer to camp</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>Dune Buggy riding 1.5 hours</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>Cuadro 15 min</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>Falcone shoting</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>Camel</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>VIP room</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>Fruits, Drinks, BBQ</span>
          </div>
          <div className="Add_col_main_btn">
            <button>BOOK NOW</button>
          </div>
        </div>
        <div className="Add_col">
          <img src={addImg} className="Add_col_img" alt="" />
          <h2 className="Add_col_type">Basic</h2>
          <div className="Add_col_price">
            <span className="Add_col_price_cost">2000</span>
            <span className="Add_col_price_seat">two person</span>
          </div>
          <div className="Add_col_text">
            <p>
              Dune buggies in Dubai Book your ride on the most exciting
              adventure activity to hit the desert and later pamper your self to
              a traditional Arabian hospitality.
            </p>
          </div>
          <h3 className="Add_col_head_info">Package Inclusions:</h3>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>Premium Transfer to camp</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>Dune Buggy riding 1.5 hours</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>Cuadro 15 min</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>Falcone shoting</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>Camel</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>VIP room</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>Fruits, Drinks, BBQ</span>
          </div>
          <div className="Add_col_main_btn">
            <button>BOOK NOW</button>
          </div>
        </div>
        <div className="Add_col">
          <img src={addImg} className="Add_col_img" alt="" />
          <h2 className="Add_col_type">Basic</h2>
          <div className="Add_col_price">
            <span className="Add_col_price_cost">3000</span>
            <span className="Add_col_price_seat">three person</span>
          </div>
          <div className="Add_col_text">
            <p>
              Dune buggies in Dubai Book your ride on the most exciting
              adventure activity to hit the desert and later pamper your self to
              a traditional Arabian hospitality.
            </p>
          </div>
          <h3 className="Add_col_head_info">Package Inclusions:</h3>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>Premium Transfer to camp</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>Dune Buggy riding 1.5 hours</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>Cuadro 15 min</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>Falcone shoting</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>Camel</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>VIP room</span>
          </div>
          <div className="Add_col_status">
            <img src={checkedImg} width={45} height={25} alt="" />
            <span>Fruits, Drinks, BBQ</span>
          </div>
          <div className="Add_col_main_btn">
            <button>BOOK NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
