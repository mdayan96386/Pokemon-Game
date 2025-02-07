import React, { useContext, useEffect } from "react";
import { GameProvider, GameContext } from "./context/GameContext";
import { fetchPokemonData } from "./services/PokemonService";
import LoadingScreen from "./components/LoadingScreen";
import PokemonImage from "./components/PokemonImage";
import PokemonInput from "./components/PokemonInput";
import GameOverScreen from "./components/GameOverScreen";

const MAX_POKEMON = 898;

const App = () => {
  const { state, dispatch } = useContext(GameContext);

  useEffect(() => {
    const fetchData = async () => {
      const pokemonData = await fetchPokemonData(MAX_POKEMON);
      dispatch({ type: "SET_POKEMON_LIST", payload: pokemonData });
      dispatch({
        type: "SET_CURRENT_POKEMON",
        payload: pokemonData[Math.floor(Math.random() * pokemonData.length)],
      });
    };

    fetchData();
  }, [dispatch]);

  const handleGuess = () => {
    if (state.guess.toLowerCase() === state.currentPokemon.name) {
      dispatch({ type: "SET_CORRECT_MESSAGE", payload: true });
      dispatch({ type: "SET_BLURRED", payload: false });
      setTimeout(() => {
        dispatch({ type: "UPDATE_SCORE", payload: 10 });
        dispatch({ type: "SET_GUESS", payload: "" });
        dispatch({ type: "SET_BLURRED", payload: true });
        dispatch({
          type: "SET_CURRENT_POKEMON",
          payload: state.pokemonList[
            Math.floor(Math.random() * state.pokemonList.length)
          ],
        });
        dispatch({ type: "SET_CORRECT_MESSAGE", payload: false });
      }, 2000);
    } else {
      dispatch({ type: "SET_GAME_OVER", payload: true });
      dispatch({ type: "SET_LAST_POKEMON", payload: state.currentPokemon });
    }
  };

  const restartGame = () => {
    dispatch({ type: "RESET_GAME" });
  };  

  if (state.pokemonList.length === 0) return <LoadingScreen />;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-300 to-blue-400 text-gray-800">
      {!state.gameOver ? (
        <>
          <h1 className="text-4xl font-bold text-white mb-8">
            Guess the Pokémon!
          </h1>
          {state.currentPokemon && (
            <PokemonImage
              image={state.currentPokemon.image}
              isBlurred={state.isBlurred}
            />
          )}
          {state.correctMessage && (
            <p className="text-lg font-bold text-blue-400 mb-4">
              You guessed it right!
            </p>
          )}
          <PokemonInput
            guess={state.guess}
            setGuess={(value) =>
              dispatch({ type: "SET_GUESS", payload: value })
            }
            handleGuess={handleGuess}
          />
          <p className="mt-4 text-lg font-semibold text-white">
            Score: {state.score}
          </p>
        </>
      ) : (
        <GameOverScreen
          lastPokemon={state.lastPokemon}
          score={state.score}
          restartGame={restartGame}
        />
      )}
    </div>
  );
};

const WrappedApp = () => (
  <GameProvider>
    <App />
  </GameProvider>
);

export default WrappedApp;
