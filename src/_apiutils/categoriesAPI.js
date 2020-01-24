import { API } from "../_helpers/axios";

export const CategoriesAPI = {
    fetchCategories: async (params) => {
        const data = await API.get('/categories', { params })
            .then(response => {
                const ServerResponse = response.data;
                console.log(ServerResponse.data.categories)
                return ServerResponse.data.categories;
            })
            .catch(error => { console.log("API error", error); return [] });
        return data;
    },
    
}