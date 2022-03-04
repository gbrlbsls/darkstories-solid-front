import { Environment } from "../configs/environment";
import Api from "./api";

class DarkStoriesApi extends Api{
	static baseUrl: string = Environment.API_URL;

	static async newGame(storyHash: string|null = null) {

		let endpoint = "";
		if(!storyHash)
			endpoint = "/game/new-game";
		else
			endpoint = `/game/new-game-from-story-hash`;

		return (await this.post(endpoint, storyHash)).json();
	}

	static async getStoryById(storyId: number) {
		return await (await this.get(`/story/get-story-by-id?id=${storyId}`)).json();
	}

}

export default DarkStoriesApi;