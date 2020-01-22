const Category = require("../models/categoryModel")

const moment = require('moment');
const async = require("async")
const Post = require("../models/postModel")

async function getCategoryFromName(name) {
    return await Category.findOne({ name: name })
    
}

async function getCategoriesWithNameIn(name) {
    return await Category.find({ name: { $in: name } })
}
exports.isNameUnique = async (name) => {
    return await Category.findOne({ name: name }).then(category => {
        if (category) {
            return Promise.reject('Duplicate Question');
        }
    });
}
exports.createCategory = async(details) =>{
    const catData = {
        name: details.name,
        desc: details.desc,
        status: true,
    };
    const cat = new Category(catData);
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

exports.getAllOrCreate=async(categories)=> {
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
exports.getAll =async(callback)=> {
    
    Category.find({ "status": true }).
        exec(callback);
}
exports.categoryFetch = async ({ limit, offset,keyword, sort } ,callback = null) => {
    let conditions = {};
    let sortBy = {};
    let skip = 0;
    let limitDoc = 13;
    
    //offset
    if (typeof skip !== "undefined" && skip !== null && skip !== "") {
        skip = parseInt(offset);
    }

    //limit
    if (typeof limit !== "undefined" && limit !== null && limit !== "") {
        limitDoc = parseInt(limit);
    }

    //sorting algorithm
    if (typeof sort !== "undefined" && sort !== null && sort !== "") {
        switch (sort) {
            case "latest":
                sortBy = { ...sortBy, publishedOn: 'desc' }
                break;
            case "alphabetical":
                sortBy = { ...sortBy, name: 'desc' }
                break;
            case "numberOfPosts":
                    sortBy = { ...sortBy, posts: 'desc' }
                    break;
            default:
                sortBy = { ...sortBy, publishedOn: 'desc' }
                break;
        }
    }

     //keyword search
     if (typeof keyword !== "undefined" && keyword !== null && keyword !== "") {
        conditions = { ...conditions, title: new RegExp('^.*' + helper.escapeRegexCharacters(keyword) + '.*$', 'i') }
     }
    //Return back a promise
    return async.parallel({
        categories_count: function (callback) {
            Category.countDocuments(conditions, callback);
        },
        categories: function (callback) {
                //With all details
                let details = "name desc status";
                Category.find(conditions, details)
                    .populate({ 
                        path: 'posts',
                        select: '_id name'
                    }).skip(skip).limit(limitDoc).sort(sortBy).exec(callback);
        },
        
    }, callback);
}
