import { API } from "../_helpers/axios";

export const TagsAPI = {
    fetchTags: async () => {
        const tags = await API.get('/tags').then(response => {
            var ServerResponse = response.data;
            return ServerResponse.data;
        }).catch(error => {
            console.log(error.response)
            return [];
        })
        return tags
    }
}