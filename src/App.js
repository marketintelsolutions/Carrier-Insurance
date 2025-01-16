import Banner from "./components/Landing/Banner";
import SectionFive from "./components/Landing/SectionFive";
import SectionFour from "./components/Landing/SectionFour";
import SectionSix from "./components/Landing/SectionSix";
import SectionThree from "./components/Landing/SectionThree";
import SectionTwo from "./components/Landing/SectionTwo";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </div>
  );
}

export default App;
