import callAPI from "../config/api";
import { CheckoutTypes } from "./data-types";

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

    const url = `${ROOT_API}/${API_VERSION}/players/${id}/detail`;

    return callAPI({
        url,
        method: 'GET',
    });
}

export const getGameCategory = async () => {

    const url = `${ROOT_API}/${API_VERSION}/players/category`;

    return callAPI({
        url,
        method: 'GET',
    });
}

export const setCheckout = async (data: CheckoutTypes) => {

    const url = `${ROOT_API}/${API_VERSION}/players/checkout`;

    return callAPI({
        url,
        method: 'POST',
        data,
        token: true
    });
}