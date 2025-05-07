
const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "Transformei minha visão sobre finanças depois de acessar esse conteúdo. Recomendo a todos!"
    },
    {
      name: "Marina Costa",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "Comecei do zero e hoje consigo complementar minha renda com o que aprendi aqui."
    },
    {
      name: "Roberto Almeida",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      quote: "Material didático e direto ao ponto. Finalmente entendi como fazer meu dinheiro trabalhar por mim!"
    }
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center mb-12 text-gray-dark">
          O que dizem nossos alunos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-light p-6 rounded-lg shadow-md hover:shadow-lg transition-all flex flex-col items-center animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-20 h-20 rounded-full mb-4 border-2 border-blue"
              />
              <h3 className="text-lg font-semibold font-montserrat mb-2 text-gray-dark">
                {testimonial.name}
              </h3>
              <p className="text-center text-gray-600 italic font-inter">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
