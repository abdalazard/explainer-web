import Contato from "./Contato/contato";
import Feature from "./Feature";
import Hero from "./Hero";
import Manual from "./Manual";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Feature />
      <Manual />
      <Contato />
    </div>
  );
};

export default LandingPage;