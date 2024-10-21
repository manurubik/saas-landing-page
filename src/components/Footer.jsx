const Footer = () => {
  return (
    <footer className="text-center p-8 text-gray-600 dark:text-gray-400 text-lg border-t border-gray-300 dark:border-gray-700 bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl mt-10">
      <p>&copy; {new Date().getFullYear()} Manuel Prieto de Antón.</p>
    </footer>
  );
};

export default Footer;
