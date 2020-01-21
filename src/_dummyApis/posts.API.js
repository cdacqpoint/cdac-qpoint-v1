import { random } from "../_helpers/random";
import Moment from "moment";

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
    /**
     * @author Alisha B, Dhiraj C
     * 
     */
    createQuestion: (data) => {
        let allQuestions = JSON.parse(localStorage.getItem('questions')) || [];
        let _id = random(25);
        allQuestions.push({
            _id: _id,
            title: data.title,
            desc: data.description,
            images: ['image.jpg'],
            category: data.category,
            tag: data.tags,
            email: data.email,
            author: data.name,
            authorAvatar: "../../images/avatars/noimage.png",
            commentsCount: 5,
            date_created: Moment(Date.now()).format('MMMM Do YYYY hh:mm:ss'),
            posturl: '/posts/' + _id,
            times_ago: Moment(Date.now()).startOf('hour').fromNow()
        });
        localStorage.setItem('questions', JSON.stringify(allQuestions))

        return { status: true, message: "Post Created!", data: null }
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
    },
    //Get Question details
    getQuestionDetails: (qid) => {
        let allQuestions = JSON.parse(localStorage.getItem('questions')) || [];
        const questions = allQuestions.filter(question => question._id === qid);
        let selectedQuestion = questions[0] || {};
        return typeof selectedQuestion._id === 'undefined' ? null : {
            _id: selectedQuestion._id || "",
            title: selectedQuestion.title,
            desc: selectedQuestion.desc,
            hasImage: false,
            image: "https://picsum.photos/1920/1080",
            tag: "DAC",
            tagUrl: "/tagged/DAC/questions",
            category: [
                {
                    name: "java",
                    url: "/categorized/java/questions"
                },
                {
                    name: "io",
                    url: "/categorized/io/questions"
                },
                {
                    name: "stream",
                    url: "/categorized/stream/questions"
                },
                {
                    name: "inputstream",
                    url: "/categorized/inputstream/questions"
                },
            ],
            dateCreated: "1 Jan 2020",
            activeTimeAgo: "2 days ago",
            askedTimeAgo: "2 days ago",
            upvotes: 300,
            upvoteUrl: `vote/${qid}/question`,
            name: "Anonymous User",
            avatarUrl: require("../images/avatars/noimage.png"),
            answerCount: 23,
            editUrl: "#",
            userUpvoted: false
        }
    },
    //Upvotes
    updateUpvote: ({ id }) => {
        let allQuestions = JSON.parse(localStorage.getItem('questions')) || [];
        allQuestions.map((comment) => {
            if (comment._id === id) {
                ++comment['upvotes'];
            }
            return comment;
        })
        localStorage.setItem('questions', JSON.stringify(allQuestions));
        return { status: true, message: "Upvoted successfull", data: null };
    }
}