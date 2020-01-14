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
    }
}