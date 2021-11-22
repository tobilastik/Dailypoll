import * as URLS from "./urls";
import { request } from "./requestHandler";


export const API = {
    pollData: (onResponse: any, data?: number) => {
        request(onResponse, data, "GET", URLS.GET_POLL);
    },
     loadAnswers: (onResponse: any, data: {percentages: string}) => {
        request(onResponse, data, "GET", `${URLS.LOAD_ANSWERS}?answer=${data.percentages}`);
    },
}