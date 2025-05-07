
import { Book, TrendingUp, Laptop } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Book className="w-10 h-10 text-blue" />,
      title: "Como funcionam plataformas de rendimento online",
      description: "Entenda os fundamentos das plataformas digitais e como elas podem gerar renda passiva."
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-blue" />,
      title: "Estratégias seguras e acessíveis",
      description: "Conheça abordagens comprovadas para iniciar no mundo dos investimentos digitais com segurança."
    },
    {
      icon: <Laptop className="w-10 h-10 text-blue" />,
      title: "Ferramentas que você pode usar de casa",
      description: "Recursos práticos e acessíveis que você pode começar a utilizar hoje mesmo."
    },
  ];

  return (
    <section className="w-full bg-gray-light py-16">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center mb-12 text-gray-dark">
          O que você vai aprender?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-4 p-3 bg-blue-light bg-opacity-20 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold font-montserrat mb-3 text-gray-dark">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-inter">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
