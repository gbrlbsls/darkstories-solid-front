import { useContext } from "solid-js";
import { GameContext } from "../contexts/game.context";
import { GameState } from "../models/game-state.model";

export function GameMenu() {
  const [gameState, setGameState] = useContext(GameContext);
  function toggleResolutionVisibility(e: any) {
    setGameState({
      ...gameState,
      hiddenResolution: !gameState.hiddenResolution,
    });
  }
  return (
    <div class="d-flex flex-md-row flex-column justify-content-center">
      <button
        onclick={toggleResolutionVisibility}
        type="button"
        class="nes-btn is-error"
      >
        {gameState.hiddenResolution ? "Mostrar" : "Ocultar"} resolução
      </button>
      <button type="button" class="nes-btn is-error">
        Abrir resolução
      </button>
      <button type="button" class="nes-btn is-error">
        Novo jogo
      </button>
      <button type="button" class="nes-btn is-error">
        Compartilhar caso
      </button>
      <button type="button" class="nes-btn is-error">
        Copiar jogo
      </button>
    </div>
  );
}
