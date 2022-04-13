import {useState} from "react";
import MainBio from './components/Navbar';
import Navbar from './components/MainBio';
import PortfolioGrid from './components/PortfolioGrid';
import Footer from './components/Footer';


function App() {

  const [ view, setView ] = useState(() => {
  return document.location.hash.slice(1);
  });

  //hash.slice will cut off the final portion of the url
  return (
    <>
      <Navbar 
      // view={view} setView={setView} 
      />
      {/* {view === "bio" &&  */}
      <MainBio />
      {/* } */}
      {/* {view === "portfolio" &&  */}
      <PortfolioGrid /> 
      {/* // } */}
      <Footer />
    </>
  );
}

export default App;
