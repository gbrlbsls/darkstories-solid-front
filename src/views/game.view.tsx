import { Params, useParams } from "solid-app-router";
import { createSignal, onMount } from "solid-js";
import { GameMenu } from "../components/game-menu";
import { StoryCompleteComponent } from "../components/story-complete.component";
import { StoryComponent } from "../components/story.component";
import { GameParam } from "../models/game-param.model";
import { GameState } from "../models/game-state.model";
import DarkStoriesApi from "../services/darkstories-api";
import { gameState, setGameState } from "../stores/game.store";
import { removeHashFromURL } from "../utils/util";

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

export function GameView() {
  const { paramStoryHash } = useParams<GameParam>();

  async function newGame(storyHash: string | undefined) {
    if (storyHash !== undefined) removeHashFromURL();

    try {
      const game: GameState = await DarkStoriesApi.newGame(storyHash);

      setGameState({
        ...gameState,
        story: game.story,
        loading: false,
        hiddenResolution: true,
      });
    } catch (err) {
      console.log("loadGame", { err });
      setGameState({
        ...gameState,
        ...errorState,
      });
    }
  }

  onMount(async () => {
    return await newGame(paramStoryHash);
  });

  return (
    <>
      <div className="d-flex justify-content-center">
        {!gameState.loading && (
          <StoryCompleteComponent story={gameState.story} hideResolution={gameState.hiddenResolution}/>
        )}
      </div>
			<GameMenu/>
    </>
  );
}
