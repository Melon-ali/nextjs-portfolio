import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/navbar";
import Work from "../components/work";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar/>
      <Hero />
      <Work />
      <Footer />
    </div>
  );
}
