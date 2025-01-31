import { Download } from 'lucide-react';
import logo from '/logo.png';

const Hero = () => {
  const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
  const buttonText = isFirefox ? 'Instale no Firefox' : 'Baixe a Extensão';
      
  // const handleInstall = async () => {

  //   try {
  //     // Importa o arquivo dinamicamente
  //     const response = await fetch('/AnalyzeerExtension/analyzeer-1.0.0.xpi');

  //     if (!response.ok) {
  //       throw new Error('Arquivo não encontrado');
  //     }

  //     const blob = await response.blob();
  //     const url = window.URL.createObjectURL(blob);
      
  //     // Cria e clica no link de download
  //     const link = document.createElement('a');
  //     link.href = url;
  //     link.download = 'analyzeer-1.0.2.xpi';
  //     document.body.appendChild(link);
  //     link.click();
      
  //     // Limpa
  //     document.body.removeChild(link);
  //     window.URL.revokeObjectURL(url);
  //   } catch (error) {
  //     console.error('Erro ao baixar:', error);
  //     alert('Erro ao fazer o download. Por favor, tente novamente mais tarde.');
  //   }
  // };

  return (
    <div className="min-h-44 mb-40">
      <section className="bg-gradient-to-r from-yellow-300 to-yellow-800 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <div className="flex justify-center mb-6">
            <img 
              src={logo}
              alt="Analyzeer Logo" 
              className="h-24 md:h-32 border-2 border-yellow-300 rounded-lg p-2 animate-pulse hover:animate-none"
            />
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Entenda questões complexas de forma simples com ajuda da IA
          </p>
          <div className="flex justify-center">
            {/* <button 
              onClick={handleInstall} 
              className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-blue-50 transition-colors"
            >
              <Download className="w-5 h-5" />
              {buttonText}
            </button> */}
            <a className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-blue-50 transition-colors" href="https://addons.mozilla.org/firefox/downloads/file/4428660/analyzeer-1.0.2.xpi">
              <Download className="w-5 h-5" />
              {buttonText}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
  
export default Hero;