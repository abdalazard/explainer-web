import { Download } from 'lucide-react';
import logo from '/logo.png';

const Hero = () => {
  const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
      
  return (
    <div className="min-h-32 mb-20">
      <section className="bg-gradient-to-r from-yellow-300 to-yellow-800 text-white py-10">
        <div className="container mx-auto text-center px-4">
          <div className="flex justify-center mb-6">
            <img 
              src={logo}
              alt="Explainer Logo" 
              className="h-24 md:h-32 border-2 border-yellow-300 rounded-lg p-2 animate-pulse hover:animate-none"
            />
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            A <strong>Inteligência Artificial</strong> que te ajuda a gabaritar.
          </p>
          <div className="flex justify-center">
            <a
              className={`bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-blue-50 transition-colors ${!isFirefox ? 'opacity-50 cursor-not-allowed' : ''}`}
              href={isFirefox ? "https://addons.mozilla.org/firefox/downloads/file/4464882/analyzeer-1.0.6.xpi" : undefined}
              target={isFirefox ? "_blank" : undefined}
              rel={isFirefox ? "noopener noreferrer" : undefined}
              aria-disabled={!isFirefox}
            >
              <Download className="w-5 h-5" />
              {isFirefox ? (<p>Baixe e instale a Extensão <p className="text-xs text-green-700">v1.0.6</p></p>) : (<p>Instale no Firefox <p className="text-xs text-green-700">v1.0.6</p></p>)}
            </a>
          </div>
          <div className="mt-10">
            <a href="registro" className="text-sm mb-5 text-blue-800 animate-pulse">Cadastre-se aqui.</a>
            <p className="text-sm ">Já é cadastrado? Então acesse <a href="login" className="text-blue-800  animate-pulse">seu dashboard aqui.</a></p>
          </div>          
        </div>
      </section>
    </div>
  );
};
  
export default Hero;