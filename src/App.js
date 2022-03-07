
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import Header from './Components/Header';
import Destination from './Components/Destination';
import Tours from './Components/Tours';
import Discount from './Components/Discount';
import Recommend from './Components/Recommend';
import Travel from './Components/TravelHighlight';
import Review from './Components/review';
import Newsleter from './Components/Newsletter';
import Recent from './Components/Recentartical';
import Feature from './Components/featured';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
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
}

export default App;
