import Contato from "./Contato/contato";
import Feature from "./Feature";
import Hero from "./Hero";
import Manual from "./Manual";
import Sobre from "./Sobre/sobre";

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