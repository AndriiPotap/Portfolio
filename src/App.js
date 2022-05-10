import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Members from "./components/members/members";
import Nav from "./components/nav/nav";

function App() {
  return (
    <> 
    <div className="bg-circle1"></div>
    <div className="bg-circle2"></div>
    <Header/>
     <Nav/>
     <Home/>
     <About/>
     <Members/>
     <Contact/>
     <Footer/>
    </>
  );
}

export default App;
