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

  ]);

  return (
    <div className="overflow-x-hidden">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
