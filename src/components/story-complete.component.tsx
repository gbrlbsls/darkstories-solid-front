import { createEffect, createSignal, For } from "solid-js";
import { StoryComplete } from "../models/story-complete.model";

interface StoryCompleteComponentProps {
  story: StoryComplete;
  hideResolution: boolean;
}

export function StoryCompleteComponent(props: StoryCompleteComponentProps) {
  const { story, hideResolution } = props;

  return (
    <div class="nes-container is-dark with-title">
      <h3 class="title is-darl">{story.title}</h3>
      <div class="text-start lead">{story.content}</div>
      {!hideResolution && (
        <>
          <hr />
          <div class="text-start lead">{story.resolution}</div>
        </>
      )}
    </div>
  );
}
