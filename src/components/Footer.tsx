
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white py-8 border-t border-gray-200">
      <div className="container px-4 md:px-6 flex flex-col items-center">
        <p className="text-center text-gray-600 font-inter mb-2">
          Material 100% gratuito. Não vendemos promessas. Para maiores de 18 anos.
        </p>
        <p className="text-center text-sm text-gray-500 font-inter">
          © {currentYear} Hub de Educação Financeira. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
