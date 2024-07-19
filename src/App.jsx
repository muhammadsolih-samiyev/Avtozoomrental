import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Cars from "./pages/Cars/Cars";
import Contacts from "./pages/Contacts/Contacts";
import Blog from "./pages/Blog/Blog";
// import CarsParam from './pages/CarsParam/CarsParam';
//import Service from './pages/Service/Service';

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footerr";
import Loader from "./components/Loader/Loader";
import CarsParam from "./pages/CarsParam/CarsParam";
import Services from "./pages/Service/Service";
import Add from "./components/Add/Add";
import Add2 from "./components/Add2/Add2";
import BlogInfo from "./components/BlogInfo/BlogInfo";
import Faq from './components/Faq/faq';
import Terms from './pages/Terms/terms';

//BlogInfo Images Imported
import blogInfoImg1 from "../src/assets/images/blogImg1.jpg";
import blogInfoImg2 from "../src/assets/images/blogImg2.jpg";
import blogInfoImg3 from "../src/assets/images/blogImg3.jpg";
import CarsAll from "./pages/CarsAll/CarsAll";
import { SearchContextProvider } from "./context/SearchContext";

function App() {
  return (
    <SearchContextProvider>
      <AppContent />
    </SearchContextProvider>
  );
}

function AppContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />
        {/* <Route path="/cars" element={<Cars />} /> */}
        <Route path="/carsparams/:id" element={<CarsParam />} />
        <Route path="/carsparams/:id" element={<CarsAll/>}/>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/terms_and_conditions" element={<Terms />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/sport_car_rent" element={<Add />} />
        <Route
          path="/services/photoshoot-with-luxury-car-in-dubai"
          element={<Add2 />}
        />
        <Route
          path="/blog/blog_info_1"
          element={
            <BlogInfo
              header={"TOP 3 DESTINATIONS TO VISIT FROM DUBAI IN A RENTAL CAR"}
              main_info={
                "One of the main reasons to hire a car in Dubai is the quality of the UAE roads. According to the World Economic Forum, the Emirates belong to the top seven countries with the most exemplary road infrastructure. All the roads and carriageways are constantly maintained and looked after, and their excellent condition is the result of a special government program.This is why driving from Dubai to far away destinations seems so exciting and thrilling! And if you are fond of new experiences and adventure, your Dubai holiday will not be complete without visiting a few fascinating UAU districts."
              }
              bHead={"Abu-Dhabi"}
              src={blogInfoImg1}
              bInfo={
                "If the combination of adventure and history is one of your personal weaknesses, then Hatta should never be off your list of primary destinations. A journey that takes only a couple of hours will bring you to a noticeably cooler mountainous climate. Thanks to its high-altitude location among the beautiful Hajar Mountains, the sense of space and release you will feel here after the suffocating heat of Dubai is what you really need for a change and fresh impressions.This trip will broaden your Emirates experience as it lets you to explore an absolutely different area with remarkable features that include, but not limit to the greenness of the vast Wadi Hatta Park, the enormity of the world's largest inclined mural, the birdlife diversity of the Swan Lake, and a grand spaciousness of Hatta Dam offering everyone to take an active part in various watersport experiences. It would be a gorgeous bonus if you try to extend your visit with an overnight stay in one of the Hatta hotels, motels, and resorts. This will save you from a sense of missed opportunities and allow you to enjoy the lavish local hospitality and its distinctive cuisine. Treat yourself with memorable outdoor activities such as a mountainous hiking and biking, a thrilling paragliding flight over endemic peaks, valleys and plateaus, or take an insightful tour to the marvelous Honeybee Garden and Discovery Center."
              }
            />
          }
        />
        <Route
          path="/blog/blog_info_2"
          element={
            <BlogInfo
              header={"Top 5 wonderful spots for a car photo session in Dubai"}
              main_info={
                "There are so many wonderful things to do in Dubai, but when you rent a car your opportunities are nearly doubled. The number of places you will die to go to and make memorable pictures is such that it makes you impossible to resist to hire a mode of transportation, if not for a day or two, then at least for a couple of hours. And, while doing so, who could prove against the weakness of taking a photo of themselves inside or near the car they’ve rented? But how to take the impressive-looking photos against a car and a Dubai background that will leave you with fond memories and knock out your friends? It often happens, sadly, that when you see a great spot for a picture, you face some obstacles such as heavy traffic, inability to stop, or getting rid of the crowds – just to name but a few. Nevertheless, it can still be possibl Let us share with you a few secrets that can help you to take really interesting and unforgettable amateur photos. First of all, Dubai is a bit more than only strictly underground parking and, if you know the city as well as we do, you can find plenty of great locations where you can stop without being fined or asked to move on. So, let’s find out more about just a few of these places that have been repeatedly checked out for their feasibility and impact."
              }
              bHead={"Palm Jumeriah"}
              src={blogInfoImg2}
              bInfo={
                "The Palm Jumeirah is a hand-made archipelago built with the use of land reclamation. Designed to look like a branchy palm tree, it is a well-recognized example of modern urban planning and architectural excellence. No wonder that Palm Jumeirah attracts tons of people who are eager to capture its fashionable background. The place becomes especially desirable if you have, if only on a temporary basis, a car that you’ve always dreamed of. Palm Jumeirah is a truly number one location that offers plenty of stunning views that cannot be covered in this short article. Just come, and you will see for yourself that the place gives thousands of great opportunities to capture the car and yourself against the background of striking architecture mixed with blue and green areas. Shooting here will fill your pictures with a unique atmosphere of sea space skillfully blended with amazing structures."
              }
            />
          }
        />
        <Route
          path="/blog/blog_info_3"
          element={
            <BlogInfo
              header={"TOP 5 REASONS TO RENT A CAR DUBAI STYLE THIS SUMMER"}
              main_info={
                "Get as more as you possibly can from your holiday or business trip to Dubai by visiting a huge number of places each time in a different car ! Summer is more than just a beach and a body, and Autozoom Luxury Car Rental is more than just a regular car hire business. We're your one-stop four-wheel solution to making the most of your time in Dubai. If you are in the search of a speedy and stylish vehicle that could help you explore this beautiful city in the most comfortable way, contact our offices before this amazing summer is over! You still can make it in time to benefit from our set of summer offers that we call Trinity Summer Hot Deals, each of which lets you to pay for a car hire nearly 30-50% less than usual. Not only we have one of the widest breadths of luxury and sports cars in Dubai. Our two huge car-hire yards allow us to provide a lot of hot deals supported by the closest attention and expertise of our staff. In our face you will meet a faithful, sincere, and reliable friend ready to give you the detailed professional advice on renting wisely, beneficially, and safely."
              }
              bHead={"Burj Halifa"}
              src={blogInfoImg3}
              bInfo={
                "Late summer and early autumn is our usual time of best deals and promotions. We've prepared a nice surprise for everyone who is crazy about adventure and driving! These days you can get one of the best car hiring offers in the city, which will allow you to drive the coolest cars in the world, such as Rolls Royce, Lamborghini, or Ferrari at knockdown prices! But let’s begin from the beginning, and consider the most feasible reasons why you need to hire a car while on holiday, study, or a working visit in Dubai."
              }
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
