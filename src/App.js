import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignupPage, { signupAction, signupLoader } from './Auth/Signup';
import LandingPage, { landingLoader } from './Pages/Landingpage';
import Header, { headerLoader } from './components/Header';
import Login, { loginAction, loginLoader } from './Auth/Login';
import SearchTab, { searchLoader } from './Pages/Search';
import Error from './Pages/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    loader: headerLoader,
    children: [
      {
        index: true,
        element: <LandingPage/>,
        loader: landingLoader,
      },
      {
        path: "signup",
        element: <SignupPage/>,
        loader: signupLoader,
        action: signupAction,
      },
      {
        path: "login",
        element: <Login />,
        loader: loginLoader,
        action: loginAction,
      },
      {
        path: "search",
        element: <SearchTab/>,
        loader: searchLoader,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
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
