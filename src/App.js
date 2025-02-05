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

  ]);

  return (
    <div className="overflow-x-hidden">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
