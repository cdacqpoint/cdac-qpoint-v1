export const CategoriesAPI = {
    fetchCategories:() =>{
        let AllCategories= JSON.parse(localStorage.getItem('categories')) || [];
        return AllCategories;
    }
}