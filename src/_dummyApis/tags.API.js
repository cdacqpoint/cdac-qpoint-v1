export const TagsAPI = {
    fetchTags:() =>{

        let Tags=[];
        let AllTags= JSON.parse(localStorage.getItem('tags')) || [];
        return AllTags;
    }
}