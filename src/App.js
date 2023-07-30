
import './App.css';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import SearchPage from './pages/SearchPage';


function App() {








  const NavbarWrapper = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    )
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavbarWrapper />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "search/:searchTerm",
          element: <SearchPage />
        },
      ],


    }
  ])



  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
