import React from 'react';
import { Download } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Analyzeer
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Entenda questões complexas de forma simples com ajuda da IA
          </p>
          <div className="flex justify-center">
            <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-blue-50 transition-colors">
              <Download className="w-5 h-5" />
              Em breve
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Como o Analyzeer ajuda você
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Análise Inteligente</h3>
              <p>Compreenda o conceito por trás de cada questão com explicações detalhadas</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Seleção Intuitiva</h3>
              <p>Selecione o texto da questão de forma simples e rápida</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Resultados Imediatos</h3>
              <p>Receba explicações e dicas instantaneamente</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Como usar
          </h2>
          <div className="max-w-3xl mx-auto">
            <ol className="space-y-8">
              <li className="flex gap-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Instale a extensão</h3>
                  <p className="text-gray-600">
                    Adicione o Analyzeer ao seu navegador em poucos cliques
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Selecione o texto</h3>
                  <p className="text-gray-600">
                    Clique no ícone da extensão e selecione o texto da questão
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Receba a análise</h3>
                  <p className="text-gray-600">
                    Obtenha explicações detalhadas e dicas para resolver a questão
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;