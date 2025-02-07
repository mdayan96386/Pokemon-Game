export const initialState = {
    pokemonList: [],
    currentPokemon: null,
    score: 0,
    guess: "",
    gameOver: false,
    lastPokemon: null,
    isBlurred: true,
    correctMessage: false,
  };
  
  export const gameReducer = (state, action) => {
    switch (action.type) {
      case "SET_POKEMON_LIST":
        return { ...state, pokemonList: action.payload };
      case "SET_CURRENT_POKEMON":
        return { ...state, currentPokemon: action.payload };
      case "UPDATE_SCORE":
        return { ...state, score: state.score + action.payload };
      case "SET_GUESS":
        return { ...state, guess: action.payload };
      case "SET_GAME_OVER":
        return { ...state, gameOver: action.payload };
      case "SET_LAST_POKEMON":
        return { ...state, lastPokemon: action.payload };
      case "SET_BLURRED":
        return { ...state, isBlurred: action.payload };
      case "SET_CORRECT_MESSAGE":
        return { ...state, correctMessage: action.payload };
      case "RESET_GAME":
        return {
          ...state,
          score: 0,
          guess: "",
          gameOver: false,
          lastPokemon: null,
          isBlurred: true,
          correctMessage: false,
          currentPokemon:
            state.pokemonList[Math.floor(Math.random() * state.pokemonList.length)],
        };
      default:
        return state;
    }
  };
  