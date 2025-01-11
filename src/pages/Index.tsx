import { Download, Shield, Zap, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const handleDownload = () => {
    // Aqui você deve adicionar o link real para download do seu XPI
    window.location.href = "/download";
  };

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Seguro",
      description: "Código aberto e verificado pela comunidade"
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Rápido",
      description: "Performance otimizada, sem impacto na navegação"
    },
    {
      icon: <Check className="w-6 h-6 text-primary" />,
      title: "Simples",
      description: "Interface intuitiva e fácil de usar"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-main text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Analyzeer
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Atua com explicações conceituais e auxilia o raciocínio e entendimento de questões de provas utilizando inteligência artificial
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-6 text-lg rounded-lg flex items-center gap-2"
              onClick={handleDownload}
            >
              <Download className="w-5 h-5" />
              Download Gratuito
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Por que usar nossa extensão?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card p-6">
                <div className="flex flex-col items-center text-center">
                  {feature.icon}
                  <h3 className="text-xl font-bold mt-4 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm">
              © {new Date().getFullYear()} Analyzeer. Todos os direitos reservados.
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
              <a href="https://github.com/abdalazard" className="hover:text-primary transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;