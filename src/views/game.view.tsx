import { useParams } from "solid-app-router";
import { createEffect, onMount } from "solid-js";
import { GameMenu } from "../components/game-menu";
import { StoryCompleteComponent } from "../components/story-complete.component";
import { useGameContext } from "../contexts/game.context";
import { GameParam } from "../models/game-param.model";
import { GameState } from "../models/game-state.model";
import DarkStoriesApi from "../services/darkstories-api";
import { removeHashFromURL } from "../utils/util";

export function GameView() {
  const { paramStoryHash } = useParams<GameParam>();
  const [getGameState, { toggleResolutionVisibility, setGameContextState, newGame }]: any = useGameContext();

  onMount(async () => {
    return await newGame(paramStoryHash);
  });

  return (
    <>
      <div className="d-flex w-100 h-75 justify-content-center">
        {getGameState() && !getGameState().loading && (
          
          <StoryCompleteComponent gameState={getGameState()}/>
        )}
      </div>
			<GameMenu/>
    </>
  );
}
