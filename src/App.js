import logo from './logo.svg';
import './App.css';
import router from './Router/Router';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
            <RouterProvider router={router}></RouterProvider>
            <Toaster></Toaster>

    
    </div>
  );
}

export default App;
