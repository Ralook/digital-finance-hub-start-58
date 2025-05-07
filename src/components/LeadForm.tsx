
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const LeadForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulando envio do formulário
    setTimeout(() => {
      toast({
        title: "Inscrição realizada com sucesso!",
        description: "Em breve você receberá nosso conteúdo exclusivo no seu email.",
      });
      setName("");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="form" className="w-full bg-gray-light py-16">
      <div className="container px-4 md:px-6 max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold font-montserrat text-center mb-6 text-gray-dark">
            Acesse o conteúdo gratuito
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 font-inter">
                Nome
              </label>
              <Input
                id="name"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-inter">
                E-mail
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Digite seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue hover:bg-blue-dark text-white font-semibold py-3 rounded-md shadow-md transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processando..." : "Acessar Conteúdo"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
