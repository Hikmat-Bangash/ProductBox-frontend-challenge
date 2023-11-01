import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { MakingApiRequest, RetrievingItems, APIRequestError } from "../features/ItemSlice";
import axios from "axios";


const BASE_API: any = process.env.NEXT_PUBLIC_DOMAIN_URL;
export const API = axios.create({ baseURL: BASE_API });

// Fetching Items
export const FetchingItems = async (dispatch: Dispatch<AnyAction>): Promise<any> => {
    dispatch(MakingApiRequest());
    try {
        const res = await API.get(`/items`);
        dispatch(RetrievingItems(res.data));
        // return res.data;
    } catch (err: any) {
        if (err?.response?.status == 401) {
            dispatch(APIRequestError(err.response.data));
            return err?.response;
        } else if (err?.response?.status == 500) {
            dispatch(APIRequestError(err?.response?.statusText));
            return err.response;
        }
    }
};


// Adding new item 
export const addNewItem = async (newItem:any): Promise<any> => {
    try {
        const res = await API.post(`/items`,newItem);
        return res;
    } catch (err: any) {
        if (err.response?.status == 401) {
            return err?.response;
        } else if (err?.response?.status == 500) {
            return err?.response;
        }
    }
};