const Sobre = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-white" id="sobre">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Sobre o Analyzeer
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-6">
              O Analyzeer nasceu da necessidade de tornar o estudo mais eficiente e acessível.
              Nossa extensão utiliza inteligência artificial para ajudar estudantes a compreenderem
              melhor questões complexas, transformando o processo de aprendizagem.
            </p>
            <p className="text-lg text-gray-600">
              Desenvolvido por um desenvolvedor apaixonado por educação e tecnologia,
              o Analyzeer está em constante evolução para oferecer a melhor
              experiência possível aos nossos usuários.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;