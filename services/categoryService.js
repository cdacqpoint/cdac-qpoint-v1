const Category = require("../models/categoryModel")

module.exports = {
    getCategoryFromName,
    getCategoriesWithNameIn,
    createCategory,
    createCategoryInBulk,
    getAllOrCreate
}

async function getCategoryFromName(name) {
    return await Category.findOne({ name: name })
}

async function getCategoriesWithNameIn(name) {
    return await Category.find({ name: { $in: name } })
}

async function createCategory({ name, status }) {
    let cat = new Category({ name: name, status: status });
    await cat.save();
    return cat;
}

async function createCategoryInBulk(categories) {
    catArray = []
    categories.map((name) => {
        let cat = createCategory({ name: name, status: true })
        catArray.push(cat);
    })
    return catArray;
}

async function getAllOrCreate(categories) {
    let catArray = [];
    for (var i = 0; i < categories.length; i++) {
        let category = await getCategoryFromName(categories[i]);
        if (!category) {
            category = await createCategory({ name: categories[i], status: true })
        }
        catArray.push(category._id);
    }
    console.log(catArray);
    return catArray;
}