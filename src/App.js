import './App.css';
import { Home } from './Pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Register from './Pages/Register';
import Login from './Pages/Login';
import About from './Pages/About';
import Error from './Pages/Error';
import Contact from './Pages/Contact';
import Reset from './Pages/ResetPassword';
import SearchLayout from './Pages/Search/SearchLayout';
import AnthroLayout from './Pages/Anthro/AnthroLayout';
import { Food } from './Pages/Search/Food';
import Nutrient from './Pages/Search/Nutrient';
import MultiFood from './Pages/Search/MultiFood';
import MultiNutrient from './Pages/Search/MultiNutrient';
import Alternative from './Pages/Search/Alternative';
import IBW from './Pages/Anthro/IBW'
import WeightAge from './Pages/Anthro/Weight-age';
import HeightAge from './Pages/Anthro/Height-age'
import BMI from './Pages/Anthro/BMI'
import BMIAge from './Pages/Anthro/BMI-age';
import WHR from './Pages/Anthro/WHR';
import BMR from './Pages/Anthro/BMR';
import EE from './Pages/Anthro/EE';
import EER from './Pages/Anthro/EER';
import WeightHeight from './Pages/Anthro/WeightHeight';
import WaterIntake from './Pages/Anthro/WaterIntake';
import Dashboard from './Pages/User/Dashboard'
import UserSettings from './Pages/User/Settings';
import DashboardLayout from './Pages/User/DashboardLayout';
import { AuthProvider } from './Context/AuthContext';
import Education from './Pages/Education';
import PrivateRoute from './Context/PrivateRoute';
import FoodDiary from './Pages/User/Diary';
import HistoryPage from './Pages/User/History';
import NutritionReportCard from './Pages/User/Report';
import { Toaster } from 'react-hot-toast';

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
    element: <Reset />,
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
    path: "educate",
    element: <Education />,
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
    path: "/dashboard",
    element: <PrivateRoute />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "setting",
        element: <UserSettings />,
      },
      {
        path: "history",
        element: <HistoryPage />,
      },
      {
        path: "report",
        element: <NutritionReportCard />,
      },
      {
        path: "diary",
        element: <FoodDiary />,
      },
    ],
  },
  {
    path: "/anthro",
    element: <AnthroLayout />,
    children: [
      {
        path: "IBW",
        element: <IBW />,
      },
      {
        path: "BMI",
        element: <BMI />,
      },
      {
        path: "BMR",
        element: <BMR />,
      },
      {
        path: "WHR",
        element: <WHR />,
      },
      {
        path: "EER",
        element: <EER />,
      },
      {
        path: "EE",
        element: <EE />,
      },
      {
        path: "BMI-age",
        element: <BMIAge />,
      },
      {
        path: "Weight-age",
        element: <WeightAge />,
      },
      {
        path: "Height-age",
        element: <HeightAge />,
      },
      {
        path: "Weight-Height",
        element: <WeightHeight />,
      },
      {
        path: "Water-intake",
        element: <WaterIntake />,
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
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </AuthProvider>
    </div>
  );
}

export default App;
