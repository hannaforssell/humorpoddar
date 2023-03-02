import axios from 'axios';
import { IGetPodcastsResponse } from '../models/IGetPodcastsResponse';

const BASE_URL = `http://api.sr.se/api/v2/programs/index`;

export async function getPodcasts(categoryId: number, page: number): Promise<IGetPodcastsResponse> {
    return axios({
        method: 'get',
        url: BASE_URL,
        params: {
            programcategoryid: categoryId,
            page: page,
            format: 'json'
        }
    })
    .then((data) => {
        console.log(data)
        return data.data;
    })
    .catch(() => {
        console.log('error i service');
        
        return [];
    });
}
