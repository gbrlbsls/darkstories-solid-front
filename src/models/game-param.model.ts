import { Params } from "solid-app-router";

export interface GameParam extends Params {
  storyHash: string;
}