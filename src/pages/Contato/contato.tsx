import { Download, Mail, Github, Linkedin } from 'lucide-react';

const Contato = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gray-50" id="contato">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Entre em Contato
          </h2>
          <div className="max-w-xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8">
              Tem alguma dúvida ou sugestão? Entre em contato conosco!
            </p>
            <div className="flex justify-center gap-6">
              <a 
                href="mailto:abdalazard@gmail.com"
                className="flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span>Email</span>
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
      </section>
    </div>
  );
};

export default Contato;