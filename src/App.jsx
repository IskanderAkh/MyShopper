
import { Outlet } from 'react-router-dom';
import footer_img from "./assets/img/Footer.png"
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';

function App() {

  return (

    <div className="App">
      <Navbar />
      <div className='app'>

        <div className="container">

          <Outlet />
        </div>
      </div>

      <Footer />
    </div>


  )
}

export default App
