import Footer from "../components/Footer";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import NavBar from "../components/NavBar";
const welcome = () => {
    return ( 
        <div>
            <Header />
            <NavBar />
            <Welcome />
            <Footer />

        </div>
     );
}
 
export default welcome;
