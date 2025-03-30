import Contato from "./Home/Contato/contato";
import Feature from "./Home/Feature";
import Hero from "./Home/Hero";
import Manual from "./Home/Manual";
import Sobre from "./Home/Sobre/sobre";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Feature />
      <Manual />
      <Sobre />
      <Contato />
    </div>
  );
};

export default LandingPage;