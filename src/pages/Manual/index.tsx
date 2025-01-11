const Manual = () => {
    return (
      <div className="min-h-screen">
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Como usar
                </h2>
                <div className="max-w-3xl mx-auto">
                    <ol className="space-y-8">
                    <li className="flex gap-4">
                        <div className="bg-yellow-200 text-gray w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
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
                        <div className="bg-yellow-200 text-gray w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
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
                        <div className="bg-yellow-200 text-gray w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
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
  
  export default Manual;