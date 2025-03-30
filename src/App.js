import Adscard from "./Adscard";
import Animation from "./Animation";
import "./App.css";
import Bigbanner from "./Bigbanner";
import Brands from "./Brands";
import Fixed from "./Fixed";
import Footer from "./Footer";
import Futureads from "./Futureads";
import Imageslidemain from "./Imageslidemain";
import Listingmain from "./Listingmain";
import Locations from "./Locations";
import Navbar1 from "./Navbar/Navbar1";
import Navbar2 from "./Navbar/Navbar2";
import Reusecomp from "./Reusecomp";

function App() {
  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <Bigbanner />
      <Imageslidemain/>
      <Futureads  text="FEATURED ADS"/>
      <Adscard />
      <Reusecomp text="TOP LOCATIONS"/> 
      <Locations/>
      <Reusecomp text="LATEST LISTINGS"/>
      <Listingmain/>
      <Futureads text="TOP BRANDS"/>
      <Brands/>
      <Footer/>
      <Fixed/>
      {/* <Animation/> */}
    </>
  );
}

export default App;
