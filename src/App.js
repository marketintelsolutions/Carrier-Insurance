import Footer from "./components/Footer";
import Banner from "./components/Landing/Banner";
import SectionEight from "./components/Landing/SectionEight";
import SectionFive from "./components/Landing/SectionFive";
import SectionFour from "./components/Landing/SectionFour";
import SectionSeven from "./components/Landing/SectionSeven";
import SectionSix from "./components/Landing/SectionSix";
import SectionThree from "./components/Landing/SectionThree";
import SectionTwo from "./components/Landing/SectionTwo";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Banner />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <Footer />
    </div>
  );
}

export default App;
