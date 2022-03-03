import { StoryComplete } from './story-complete.model';
export interface GameState {
	story: StoryComplete,
	loading: boolean,
	hiddenResolution: boolean,
}