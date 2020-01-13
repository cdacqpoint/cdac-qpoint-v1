export const PostsAPI = {
    // Load mock questions data from localStorage into QPoint via Action
    fetchQuestions: (filter = "latest", page = 0, limit = 10, tag = null, category = null) => {
        let Questions = [];
        const allQuestions = JSON.parse(localStorage.getItem('questions'));
        Questions = allQuestions.slice(page, limit);
        if (tag !== null && tag !== "") {
            Questions = Questions.filter(ques => ques.tags === tag);
        }
        if (category !== null && category !== "") {
            Questions = Questions.filter(ques => ques.category.includes(category));
        }
        if (filter !== "" && filter !== "latest") {
            Questions.sort((a, b) => b.commentsCount > a.commentsCount);
        }
        console.log("inside API", Questions)
        return { status: true, message: "", data: Questions };
    }
}