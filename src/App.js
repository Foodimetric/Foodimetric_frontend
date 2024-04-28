import './App.css';
import { Home } from './Pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Register from './Pages/Register';
import Login from './Pages/Login';
import About from './Pages/About';
import Error from './Pages/Error';
import Contact from './Pages/Contact';
import Reset from './Pages/ResetPassword';
import SearchLayout from './Pages/Search/SearchLayout';
import AnthroLayout from './Pages/Anthro/AnthroLayout';
import {Food} from './Pages/Search/Food';
import Nutrient from './Pages/Search/Nutrient';
import MultiFood from './Pages/Search/MultiFood';
import MultiNutrient from './Pages/Search/MultiNutrient';
import Alternative from './Pages/Search/Alternative';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home />
    ),
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "reset",
    element: <Reset /> ,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "/search",
    element: <SearchLayout />,
    children: [
      {
        path: "food",
        element: <Food />,
      },
      {
        path: "nutrient",
        element: <Nutrient />,
      },
      {
        path: "multi-nutrient",
        element: <MultiNutrient />,
      },
      {
        path: "multi-food",
        element: <MultiFood />,
      },
      {
        path: "alternative",
        element: <Alternative />,
      },
    ],
  },

  {
    path: "/anthro",
    element: <AnthroLayout />,
    children: [
      {
        path: "IBW",
        element: <Login />,
      },
      {
        path: "BMI",
        element: <Login />,
      },
      {
        path: "WHR",
        element: <Login />,
      },
      {
        path: "percentile",
        element: <Login />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
