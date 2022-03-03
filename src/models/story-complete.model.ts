import { Story } from './story.model';
export interface StoryComplete extends Story {
	resolution?: string;
	hash?: number;
}