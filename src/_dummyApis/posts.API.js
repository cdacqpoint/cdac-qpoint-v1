import { random } from "../_helpers/random";
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
    /**
     * @author Alisha B, Dhiraj C
     * 
     */
    createQuestion:(data)=>{
        let allQuestions = JSON.parse(localStorage.getItem('questions')) || [];
        allQuestions.push({
            _id: random(25),
            title: data.title,
            desc: data.desc,
            images: ['image.jpg'],
            category: [
                'java',
                'refelection'
            ],
            tag: data.tag,
            email: '',
            author: 'Anonymous',
            authorAvatar: "../../images/avatars/noimage.png",
            commentsCount: 5,
            date_created: '2019 Dec 25 20:50:55',
            posturl: '/posts/4sg2343615a7c4821fdb7b998',
            times_ago: '2 days ago'
        });
    },
    totalQuestions: () => {
        let allQuestions = JSON.parse(localStorage.getItem('questions')) || [];
        return allQuestions.length;
    }
}