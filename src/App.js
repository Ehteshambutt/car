import Login from './componenets/Login';
import './App.css';
import Signup from './componenets/Signup';
import HomeServices from './componenets/HomeServices';
import HomeServices2 from './componenets/HomeServices2';
import Textcmp from './componenets/Testing1/Textcmp';
import CarInsurance from './componenets/CarInsurance';
import Footer from './componenets/Footer'
import Navbar from './componenets/Navbar/Navbar';
import Contact from './componenets/Contact/Contact';
import {
  useRoutes
} from 'react-router-dom';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import HomeSrvice from './componenets/Testing1/Homeservice/HomeSrvice';
import InsurForm from './componenets/InsurForm/InsurForm';
import InsranceForm1 from './componenets/InsurForm/InsranceForm1';
import InsuranceForm2 from './componenets/InsurForm/InsuranceForm2';
import ContactUS from './componenets/Contact/ContactUS';

function App() {
  return (
<div className="App">
  {/* </> */}
  {/* <InsuranceForm2/> */}
  {/* <InsranceForm1/>
   */}
  {/* <InsurForm/> */}
{/* <Textcmp/> */}
{/* <Contact/> */}
<Router>
    <Navbar />
    <Routes>
    <Route exact path='/' element={<HomeServices />} />
    <Route  path='/insurance' element={<CarInsurance />} />
    <Route path='/sinup' element={<Signup />} />
    <Route path='/login' element={<Login />} />
    <Route path='/insu2' element={<InsuranceForm2 />} />
    <Route path='/insform' element={<InsurForm  />} />
    <Route path='/insform1' element={<InsranceForm1 />} />
    <Route path='/financing' element={<HomeServices2 />} />
    <Route path='/contactus' element={<ContactUS />} />
    <Route path='/homesrvice' element={<HomeSrvice />} />
    </Routes>

    <Footer/>
</Router>
</div>
   
  );
}

export default App;
