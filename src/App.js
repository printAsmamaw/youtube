import './App.css';
import Header from './Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoDetails from './VideoDetails';
import Rout from './Rout';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Rout />} >
        </Route>
         <Route 
            path='video-details/:itemToShow' 
            element={<VideoDetails />}
        />
      </Routes>
    </div>
    </BrowserRouter>
    // <BrowserRouter>
    // <Header />
    //   <Routes>
    //     <Route path="/" element={<Sidebar />}>
          
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
