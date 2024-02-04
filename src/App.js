import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignupPage from './Auth/Signup';
import LandingPage from './Pages/Landingpage';
import Header from './components/Header';
import Login from './Auth/Login';
import SearchTab from './Pages/Search';
import Error from './Pages/Error';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import UserProfile from './Pages/UserProfiile';
import { FoodProvider } from './Context/FoodContext';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity
    }
  }
})

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Header />
          <FoodProvider>
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/signup' element={<SignupPage />} />
              <Route path='/login' element={<Login />} />
              <Route path="/search" element={<SearchTab />} />
              <Route path='/profile' element={<UserProfile />} />
              <Route path='*' element={<Error />} />
            </Routes>
          </FoodProvider>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
