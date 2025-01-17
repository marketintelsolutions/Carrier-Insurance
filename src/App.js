import Banner from "./components/Landing/Banner";
import SectionFive from "./components/Landing/SectionFive";
import SectionFour from "./components/Landing/SectionFour";
import SectionSeven from "./components/Landing/SectionSeven";
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
      <SectionSeven />
    </div>
  );
}

export default App;
