import logo from './logo.svg';
import './index.css';
import Navbar from './components/navbar';
import Banner from './components/banner';
import Features from './components/features';
import Benefit from './components/benefit';
import Clients from './components/clients';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

// import $ from 'jquery';
// import 'owl.carousel/dist/owl.carousel.min';

import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap"


import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS if not already imported
// import 'owl.carousel/dist/assets/owl.carousel.min.css';

import { useEffect } from 'react';
import HowItWorks from './components/howit';
import CaseStudy from './components/caseStudy';
import ClientsTestimonials from './components/clientsTestimonials';
import Contact from './components/contact';
import Footer from './components/footer';



function App() {


  return (
    <>
    {/* <h1>Hello SIr</h1> */}
    <Navbar/>
    <Banner/>
    <Features/>
    <Benefit/>
    <Clients/>
    <HowItWorks/>
    <CaseStudy/>
    <ClientsTestimonials/>
    <Contact/>
    <Footer/>

    </>
  );
}

export default App;
