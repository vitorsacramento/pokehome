import axios from "axios";

const instanceHTTP = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
});

export const api = {
    loadPokemon: async (pokemon: string) => {
        let response = await instanceHTTP.get(`/pokemon/${pokemon}`);
        return response.data;
    }
}