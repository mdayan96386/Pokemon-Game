const PokemonInput = ({ guess, setGuess, handleGuess }) => (
    <>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="bg-white border border-gray-300 rounded-md px-4 py-2 mb-4"
        placeholder="Enter Pokémon name"
      />
      <button
        onClick={handleGuess}
        className="bg-white text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
      >
        Submit Guess
      </button>
    </>
  );
  
  export default PokemonInput;
  