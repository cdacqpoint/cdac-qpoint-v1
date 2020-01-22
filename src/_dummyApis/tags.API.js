export const TagsAPI = {
    fetchTags: () => {
        let AllTags = JSON.parse(localStorage.getItem('tags')) || [];
        return AllTags;
    },
    getTagNameById: (id) => {
        let AllTags = JSON.parse(localStorage.getItem('tags')) || [];
        let tag = AllTags.filter(tag => tag._id === id)
        console.log(id, AllTags, tag)
        return typeof tag[0] !== "undefined" ? tag[0] : "DAC";
    }
}