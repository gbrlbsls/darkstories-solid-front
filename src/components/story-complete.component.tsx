import { Component, createEffect, createSignal, For } from "solid-js";
import { GameState } from "../models/game-state.model";

interface StoryCompleteComponentProps {
  gameState: Partial<GameState>
}

export const StoryCompleteComponent: Component<StoryCompleteComponentProps> = (props: StoryCompleteComponentProps) => {
  const [ localGameState, setLocalGameState ] = createSignal<Partial<GameState>>(props.gameState);

  createEffect(() => {setLocalGameState(props.gameState)})
  return (
    <div class={"nes-container w-100 is-dark with-title "}>
      <h3 class="title is-darl">{localGameState()?.story?.title}</h3>
      <div class="text-start lead">{localGameState()?.story?.content}</div>
      {!localGameState()?.hiddenResolution && (
        <>
          <hr />
          <div class="text-start lead">{localGameState()?.story?.resolution}</div>
        </>
      )}
    </div>
  );
}
