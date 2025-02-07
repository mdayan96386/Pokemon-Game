const PokemonImage = ({ image, isBlurred }) => (
    <img
      src={image}
      alt="Pokemon"
      className={`w-48 h-48 bg-gray-100 rounded-full shadow-md mb-4 transition-all duration-500 ${
        isBlurred ? "blur-sm opacity-100" : "blur-none"
      }`}
    />
  );
  
  export default PokemonImage;
  