export const TagsAPI = {
    fetchTags:() =>{
        let AllTags= JSON.parse(localStorage.getItem('tags')) || [];
        return AllTags;
    }
}