import { Component, createContext, createSignal, useContext } from 'solid-js';
import { GameState } from "../models/game-state.model";
import DarkStoriesApi from '../services/darkstories-api';
import { removeHashFromURL } from '../utils/util';

const initialGameState: GameState = {
  story: { id: 0, title: "", content: "", resolution: "", hash: 0 },
  loading: true,
  hiddenResolution: true,
};

const errorState: GameState = {
  loading: false,
  hiddenResolution: true,
  story: {
    id: 0,
    title: "Algo deu errado...",
    content: "Não foi possível obter uma história...",
    resolution: "Você se deu mal",
    hash: 0,
  },
};

const GameContext = createContext();

export const GameProvider: Component<{ gameState?: GameState }> = (props: any) => {
  const [gameState, setGameState] = createSignal<GameState>(props.gameState || initialGameState),
    store = [
      gameState,
      {
        toggleResolutionVisibility() {
          setGameState(gs => ({...gs, hiddenResolution: !gs.hiddenResolution}));
        },
        setGameContextState(newState: Partial<GameState>) {
          setGameState(gs => ({...gs, ...newState}))
        },
        async newGame(storyHash: string | undefined) {
          if (storyHash !== undefined) removeHashFromURL();
      
          setGameState({
            ...gameState(),
            loading: true,
            hiddenResolution: true,
          });

          try {
            const game: GameState = await DarkStoriesApi.newGame(storyHash);
      
            setGameState({
              ...gameState(),
              story: game.story,
              loading: false,
              hiddenResolution: true,
            });
          } catch (err) {
            console.log("loadGame", { err });
            setGameState({
              ...gameState(),
              ...errorState,
            });
          }
        }
      }
    ];

  return (
    <GameContext.Provider value={store}>
      {props.children}
    </GameContext.Provider>
  );
}

export function useGameContext() { return useContext(GameContext); }