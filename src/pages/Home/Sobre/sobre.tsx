import { Download, Mail, Github, Linkedin } from 'lucide-react';

const Sobre = () => {
  return (
    <div className="min-h-44">
      <section className="py-20 bg-white" id="sobre">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Sobre o Explainer
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-6">
              O Explainer nasceu da necessidade de tornar o estudo mais eficiente e acessível.
              Nossa extensão utiliza inteligência artificial para ajudar estudantes a compreenderem
              melhor questões complexas, transformando o processo de aprendizagem.
            </p>
            <p className="text-lg text-gray-600">
              Desenvolvido por um desenvolvedor apaixonado por educação e tecnologia,
              o Explainer está em constante evolução para oferecer a melhor
              experiência possível aos nossos usuários.
            </p>
          </div>


        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Sobre o Time</h3>
          <div className="flex justify-center items-center mb-20">
            
            <div className="flex flex-row">
              <div className="flex flex-col items-center mr-10">
                <img 
                  src="https://github.com/abdalazard.png" 
                  alt="Vinicius Abdala" 
                  className="w-32 h-32 rounded-full mb-4 border-4 border-yellow-300"
                />
                <h4 className="text-xl font-semibold text-gray-600">Vinicius Abdala</h4>
              </div>
              <div className="flex flex-col">
                <p className="text-gray-600 max-w-2xl mb-10">
                  Desenvolvedor Fullstack apaixonado por tecnologia e inovação. 
                  Com experiência em PHP, Laravel, React, React-Native, Next.Js, Nest.Js e JQuery e diversas outras tecnologias, 
                  me dedico a criar soluções que impactam positivamente a vida das pessoas. 
                  3º maior tradutor da documentação PHP no mundo em 2021.
                </p>
                <div className="flex justify-center gap-6 mt-3">
                  <a 
                    href="mailto:abdalazard@gmail.com"
                    className="flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors"
                  >
                    <Mail className="w-6 h-6" />
                    <span>abdalazard@gmail.com</span>
                  </a>
                  <a 
                    href="https://github.com/abdalazard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/viniciusabdala10/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex justify-center items-center">
            <div className="flex flex-row">
              <div className="flex flex-col items-center mr-10">
                <img 
                  src="https://avatars.githubusercontent.com/u/87879736?v=4" 
                  alt="Vinicius Abdala" 
                  className="w-32 h-32 rounded-full mb-4 border-4 border-yellow-300"
                />
                <h4 className="text-xl font-semibold text-gray-600">Lhuann Cordeiro</h4>
              </div>
              <div className="flex flex-col">
                <p className="text-gray-600 max-w-2xl mb-10">
                  Product Owner, apaixonado por criar soluções inovadores e focados no cliente. Experiência em gestão de produtos, metodologias ágeis e análise de dados. Comunicação clara, visão estratégica para garantir o sucesso do produto.
                </p>
                <p className="text-gray-600 max-w-2xl text-center">keep reinventing  //  never give up</p>
                <div className="flex justify-center gap-6 mt-3">
                  <a 
                    href="mailto:abdalazard@gmail.com"
                    className="flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors"
                  >
                    <Mail className="w-6 h-6" />
                    <span>lhuannc@gmail.com </span>
                  </a>
                  <a 
                    href="https://github.com/lhuannc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/lhuann/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  </div>
  );
};

export default Sobre;
