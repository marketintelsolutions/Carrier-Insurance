import Footer from "./components/Footer";
import MainLayout from "./components/MainLayout";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Landing from "./pages/Landing";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TeamMember from "./pages/TeamMember";
import ServiceItem from "./pages/ServiceItem";
import Products from "./pages/Products";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
import SingleMedia from "./pages/SingleMedia";
import Claims from "./pages/Claims";
import Faq from "./pages/Faq";
import Quote from "./pages/Quote";
import GeneralBusinessInsurance from "./pages/GeneralBusinessInsurance";
import LifeBusinessInsurance from "./pages/LifeBusinessInsurance";
import HealthInsurance from "./pages/HealthInsurance";
import ClaimsManagement from "./pages/ClaimsManagement";
import InsuranceIndustrySectors from "./pages/InsuranceIndustrySectors";
import CareerPage from "./pages/CareerPage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLayout>
          <Landing />
        </MainLayout>
      ),
    },
    {
      path: "/about",
      element: (
        <MainLayout>
          <About />
        </MainLayout>
      ),
    },
    {
      path: "/about/team/:id",
      element: (
        <MainLayout>
          <TeamMember />
        </MainLayout>
      ),
    },
    {
      path: "/services/:id",
      element: (
        <MainLayout>
          <ServiceItem />
        </MainLayout>
      ),
    },
    {
      path: "/products",
      element: (
        <MainLayout>
          <Products />
        </MainLayout>
      ),
    },
    {
      path: "/careers",
      element: (
        <MainLayout>
          <Careers />
        </MainLayout>
      ),
    },
    {
      path: "/media",
      element: (
        <MainLayout>
          <Media />
        </MainLayout>
      ),
    },
    {
      path: "/media/:id",
      element: (
        <MainLayout>
          <SingleMedia />
        </MainLayout>
      ),
    },
    {
      path: "/contact",
      element: (
        <MainLayout>
          <Contact />
        </MainLayout>
      ),
    },
    {
      path: "/claims",
      element: (
        <MainLayout>
          <Claims />
        </MainLayout>
      ),
    },
    {
      path: "/faq",
      element: (
        <MainLayout>
          <Faq />
        </MainLayout>
      ),
    },
    {
      path: "/quote",
      element: (
        <MainLayout>
          <Quote />
        </MainLayout>
      ),
    },
    {
      path: "/services/general-business-insurance",
      element: (
        <MainLayout>
          <GeneralBusinessInsurance />
        </MainLayout>
      ),
    },
    {
      path: "/services/life-business-insurance",
      element: (
        <MainLayout>
          <LifeBusinessInsurance />
        </MainLayout>
      ),
    },
    {
      path: "/services/health-insurance",
      element: (
        <MainLayout>
          <HealthInsurance />
        </MainLayout>
      ),
    },
    {
      path: "/services/claims-management",
      element: (
        <MainLayout>
          <ClaimsManagement />
        </MainLayout>
      ),
    },
    {
      path: "/services/insurance-industry",
      element: (
        <MainLayout>
          <InsuranceIndustrySectors />
        </MainLayout>
      ),
    },
    {
      path: "/career",
      element: (
        <MainLayout>
          <CareerPage />
        </MainLayout>
      ),
    },

  ]);

  return (
    <div className="overflow-x-hidden">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
