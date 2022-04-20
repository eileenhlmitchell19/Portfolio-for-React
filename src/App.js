import {useState} from "react";
import MainBio from './components/Navbar';
import Navbar from './components/MainBio';
import PortfolioGrid from './components/PortfolioGrid';
import Footer from './components/Footer';
import ContactBar from './components/ContactBar';

function App() {

  const [ view, setView ] = useState((element) => {
    console.log('element', element)
    //console.log(document.location.hash)
    //return document.location.hash.slice(1);
  });

  console.log('view', view)
  //hash.slice will cut off the final portion of the url
  return (
    <>
      <Navbar view={view} setView={setView} />
      {/* <h1>THIS IS VIEW VALUE: {view}</h1> */}
      {/* {view === "bio" && <MainBio />}
      {view === "portfolio" && <PortfolioGrid /> } */}

      <MainBio />
      <PortfolioGrid />
      <ContactBar />
      <Footer />
    </>
  );
}

export default App;
