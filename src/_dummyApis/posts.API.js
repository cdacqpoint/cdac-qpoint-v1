function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getMatchingLanguages(value, questions) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp('^.*' + escapedValue + '.*$', 'i');

    return questions.filter(questions => regex.test(questions.title));
}
export const PostsAPI = {
    // Load mock questions data from localStorage into QPoint via Action
    fetchQuestions: (filter = "latest", page = 0, limit = 10, tag = null, category = null) => {
        let Questions = [];
        let allQuestions = JSON.parse(localStorage.getItem('questions')) || [];
        let last = limit * Math.ceil(page / limit);
        last = last > 0 ? last : limit;
        console.log("page,last", page, last)
        Questions = allQuestions.slice(page, last);
        if (tag !== null && tag !== "") {
            Questions.filter(ques => ques.tags === tag);
        }
        if (category !== null && category !== "") {
            Questions = Questions.filter(ques => ques.category.includes(category));
        }
        if (filter !== "" && filter !== "latest") {
            Questions.sort((a, b) => b.commentsCount > a.commentsCount);
        }
        console.log("inside API", Questions)
        return { status: true, message: "", data: Questions };
    },

    totalQuestions: () => {
        let allQuestions = JSON.parse(localStorage.getItem('questions')) || [];
        return allQuestions.length;
    },

    searchQuestions: (value) => {
        let allQuestions = JSON.parse(localStorage.getItem('questions')) || [];
        var Matchingquestions = getMatchingLanguages(value, allQuestions);
        var questions = [];
        for (var i = 0; i < Matchingquestions.length; i++) {
            questions.push({
                _id: Matchingquestions[i]._id,
                title: Matchingquestions[i].title,
                activeTimeAgo: "2 days ago",
                askedTimeAgo: "2 days ago",
            })
        }
        // localStorage.getItem('questions',questions); --> remove me after use
        return questions;
    }
}