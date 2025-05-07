
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container px-4 md:px-6 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
        <div className="flex flex-col space-y-6 md:w-1/2 animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat leading-tight text-gray-dark">
            Aprenda a fazer seu dinheiro trabalhar por você
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-inter">
            Conheça métodos digitais usados por milhares de pessoas para transformar sua renda online
          </p>
          <div>
            <Button 
              className="bg-blue hover:bg-blue-dark text-white font-semibold py-3 px-6 rounded-md shadow-md flex items-center gap-2 transition-all"
              onClick={scrollToForm}
            >
              Quero Aprender Agora
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center animate-fade-in">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
            alt="Pessoa usando notebook com gráficos" 
            className="rounded-lg shadow-xl w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
