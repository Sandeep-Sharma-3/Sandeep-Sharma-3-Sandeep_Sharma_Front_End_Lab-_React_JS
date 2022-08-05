import IItem from "../models/IItems";
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

const getItems = async () => {
    const response = await axios.get<IItem[]>( `${baseUrl}/items` );
    return response.data;
}

const addItem = async (item : Omit<IItem, 'id'>) => {
    const response = await axios.post<IItem>(`${baseUrl}/items`, item, {
        headers : {
            'Content-type': 'application/json'
        }
    });

    return response.data;
}
export {addItem, getItems};