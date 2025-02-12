import logo from './logo.svg';
import './App.css';
import { BrowserRouter, createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Wybmv from './pages/Wybmv';

function App() {

  const router = createBrowserRouter([
    {
      path: '/Ballu-The-Princess',
      element: <Home/>,
    },
    {
      path: '/WillYouBeMyValentine',
      element: <Wybmv/>
    }
  ]);
  return (
    <RouterProvider basename="/Yashraj-Savi-Valentines" router={router}>
    </RouterProvider>
  );
}

export default App;
