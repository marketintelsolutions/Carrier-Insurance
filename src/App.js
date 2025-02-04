import Footer from "./components/Footer";
import MainLayout from "./components/MainLayout";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Landing from "./pages/Landing";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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

  ]);

  return (
    <div className="overflow-x-hidden">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
