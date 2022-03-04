import { useContext } from "solid-js";
import { useGameContext } from "../contexts/game.context";

export function GameMenu() {

  const [getGameState, { toggleResolutionVisibility, newGame }]: any = useGameContext();

  return (
    <div class="d-flex flex-md-row flex-column justify-content-center">
      <button
        onclick={toggleResolutionVisibility}
        type="button"
        class="nes-btn is-error"
      >
        {getGameState().hiddenResolution ? "Mostrar" : "Ocultar"} resolução
      </button>
      <button type="button" class="nes-btn is-error">
        Abrir resolução
      </button>
      <button onclick={() => newGame(undefined)} type="button" class="nes-btn is-error">
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
