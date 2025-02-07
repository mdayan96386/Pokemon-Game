const GameOverScreen = ({ lastPokemon, score, restartGame }) => (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-red-500 mb-4">Game Over</h1>
      <p className="text-lg font-semibold text-white mb-4">
        The Pokémon was: <span className="font-bold">{lastPokemon.name}</span>
      </p>
      <img
        src={lastPokemon.image}
        alt={lastPokemon.name}
        className="w-48 h-48 bg-gray-100 rounded-full shadow-md mb-4"
      />
      <p className="text-lg font-semibold text-white mb-4">
        Your Total Score: {score}
      </p>
      <button
        onClick={restartGame}
        className="bg-white text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
      >
        Restart Game
      </button>
    </div>
  );
  
  export default GameOverScreen;
  