import { createEffect, createSignal, For } from "solid-js";
import { Story } from "../models/story.model";

export function StoryComponent(story: Story) {

	return (<div class="nes-container w-100 is-dark with-title">
		<h3 class="title is-darl">{story.title}</h3>
		<div class="text-start lead">
			{story.content}
		</div>
	</div>);
}