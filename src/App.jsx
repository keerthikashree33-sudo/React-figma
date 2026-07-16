import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Team from "./components/Team";
import Progress from "./components/Progress";
import Tomorrow from "./components/Tomorrow";
import Offer from "./components/Offer";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Team />
      <Tomorrow/>
      <Progress/>
      <Offer/>
      <Testimonials/>
      <Newsletter/>
      <Footer/>
    </>
  );
}
export default App;