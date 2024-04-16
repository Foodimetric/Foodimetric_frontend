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
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "search",
    element: <Contact />,
  },
  {
    path: "anthro",
    element: <Contact />,
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
