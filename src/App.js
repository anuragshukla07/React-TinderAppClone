import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TinderCards from './components/TinderCards';
function App() {
  return (
    // JSX = javascript syntax extension - allows using html in react app
    <>
    {
      // Types of components : 
      // - Functional
      // - Class Based components
    }

    {/* {Header} */}
    
    <Header />

    {/* {Cards} */}
    <TinderCards />


    {/* {Footer} */}
    <Footer />
    </>
  ); 
}

export default App;
