import { toNumber } from "../utils/util";
const env = import.meta.env;
export const Environment = { 
	INITIAL_API_TIMEOUT: toNumber(env.INITIAL_API_TIMEOUT) ?? 1000,
	MAX_FETCH_RETRIES: toNumber(env.MAX_FETCH_RETRIES) ?? 3,
	API_URL: env.API_URL ? env.API_URL.toString() : "https://hidden-wildwood-83104.herokuapp.com"
}