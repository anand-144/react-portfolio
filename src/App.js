import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/Home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/res/Resume';
import Services from './components/services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Blog from './components/blog/Blog';


function App() {
  return (
    <>
    <Sidebar />
    <main className='main'>
      <Home/>
      <About/>
      <Services/>
      <Resume/>
      <Portfolio/>
      <Testimonials/>
      {/* <Blog/> */}
      <Contact/>
    </main>
    </>
  );
}

export default App;
