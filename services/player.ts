import callAPI from "../config/api";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export const getFeaturedGame = async () => {
    // const URL = 'players/landingpage'
    // const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
    // const axiosResponse = response.data;
    // return axiosResponse.data;

    const url = `${ROOT_API}/${API_VERSION}/players/landingpage`;

    return callAPI({
        url,
        method: 'GET',
    });
}

export const getDetailVoucher = async (id: string) => {
    // const URL = `players/${id}/detail`
    // const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
    // const axiosResponse = response.data;
    // return axiosResponse.data;

    const url = `${ROOT_API}/${API_VERSION}/players/${id}/detail`;

    return callAPI({
        url,
        method: 'GET',
    });
}

export const getGameCategory = async () => {
    // const URL = 'players/category';
    // const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
    // const axiosResponse = response.data;
    // return axiosResponse.data;

    const url = `${ROOT_API}/${API_VERSION}/players/category`;

    return callAPI({
        url,
        method: 'GET',
    });
}