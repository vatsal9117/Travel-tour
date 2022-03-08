import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Destination from "../components/Destination";
import Tours from "../components/Tours";
import Recommend from "../components/Recommend";
import Travel from "../components/TravelHighlight";
import Review from "../components/Review";
import Newsleter from "../components/Newsletter";
import Recent from "../components/Recentartical";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="Home">
      <Header />
      <NavBar />
      <Banner />
      <Destination />
      <Tours />
      {/* <Discount /> */}
      <Recommend />
      <Travel />
      <Review />
      <Newsleter />
      <Recent />
      <Feature />
      <Footer />
    </div>
  );
};

export default Home;
