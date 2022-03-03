import { createContext } from "solid-js";
import { createStore } from "solid-js/store";
import { GameState } from "../models/game-state.model";

const initialGameState: GameState = {
  story: { id: 0, title: "", content: "", resolution: "", hash: 0 },
  loading: true,
  hiddenResolution: true,
};

export const GameContext = createContext([initialGameState, (...args: any[]) => {} ]);

export function GameProvider(props: any) {
  const [state, setState] = createStore(initialGameState);
  const store = [
    state,
		(newState: GameState) => setState(newState)
  ];

  return (
    <GameContext.Provider value={store}>
      {props.children}
    </GameContext.Provider>
  );
}