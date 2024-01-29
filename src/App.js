
import './App.css';
import Personal_Info from './components/Personal_Info/Personal_Info';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Plans from './components/Plans/Plans';
import Addons from './components/Addons/Addons';
import Summary from './components/Summary/Summary';
import Ending from './components/Ending/Ending';


function App(props) {
  const data = "hello"
  
  return (
    <>
    
    <BrowserRouter>
    
        <Routes>
          <Route index element={<Personal_Info />} />
          <Route path="plans" element={<Plans />} />
          <Route  path="personalInfo" element={<Personal_Info />} />
          <Route  path="addons" element={<Addons />} />
          <Route  path="summary" element={<Summary />} />
          <Route  path="ending" element={<Ending />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
