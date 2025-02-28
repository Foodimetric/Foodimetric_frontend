import './App.css';
import { Home } from './Pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Register from './Pages/Register';
import Login from './Pages/Login';
import About from './Pages/About';
import Error from './Pages/Error';
import Terms from './Pages/Terms';
import Privacy from './Pages/Privacy';
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
// import DashboardLayout from './Pages/User/DashboardLayout';
import { AuthProvider } from './Context/AuthContext';
import Education from './Pages/Education';
import PrivateRoute from './Context/PrivateRoute';
import FoodDiary from './Pages/User/Diary';
import HistoryPage from './Pages/User/History';
import NutritionReportCard from './Pages/User/Report';
import { Toaster } from 'react-hot-toast';
// import Users from './Pages/User/Users';
import NewPassword from './Pages/NewPassword';
import { FoodProvider } from './Context/Food/FoodContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserProvider } from './Context/User/UserContext';
import { useEffect } from 'react';
import { FOODIMETRIC_HOST_URL } from './Utils/host';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity
    }
  }
})

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
  // {
  //   path: "users",
  //   element: <Users />,
  // },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "forgot",
    element: <Reset />,
  },
  {
    path: "reset",
    element: <NewPassword />,
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
    path: "privacy",
    element: <Privacy />,
  }, {
    path: "terms",
    element: <Terms />,
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
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const incrementPlatformUsage = async () => {
      if (!user || !user.token) return;
      try {
        const response = await fetch(`${FOODIMETRIC_HOST_URL}/users/analytics`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`, // Ensure token is sent for authenticated requests
          },
        });

        if (!response.ok) {
          console.error("Failed to update platform usage.");
        }
      } catch (error) {
        console.error("Error incrementing platform usage:", error.message);
      }
    };

    incrementPlatformUsage();
  }, [user]); // Only runs once when the component mounts
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <div className="App">
          <AuthProvider>
            <UserProvider>
              <FoodProvider>
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
              </FoodProvider>
            </UserProvider>
          </AuthProvider>
        </div>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
