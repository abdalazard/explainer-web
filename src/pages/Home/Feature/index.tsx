const Feature = () => {
    return (
        <section className="bg-white min-h-44 mb-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Como o Explainer ajuda você
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
    );
  };
  
  export default Feature;