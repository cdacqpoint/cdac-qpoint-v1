import { random } from "../_helpers/random";
export default {
    init: () => {
        localStorage.setItem('categories', JSON.stringify([
            {
                _id: random(25),
                name: "JAVA",
                url: "../categories/java/questions",
                totalCount: 2000,
                todaysCount: 150,
                weekCount: 400
            },
            {
                _id: random(25),
                name: "Angular",
                url: "../categories/angular/questions",
                totalCount: 222,
                todaysCount: 10,
                weekCount: 150
            },
            {
                _id: random(25),
                name: "PHP",
                url: "../categories/php/questions",
                totalCount: 103,
                todaysCount: 10,
                weekCount: 10
            },
            {
                _id: random(25),
                name: "asp.NET",
                url: "../categories/asp.net/questions",
                totalCount: 93,
                todaysCount: 10,
                weekCount: 20
            },
            {
                _id: random(25),
                name: "C++",
                url: "../categories/c++/questions",
                totalCount: 10,
                todaysCount: 0,
                weekCount: 0
            },
            {
                _id: random(25),
                name: "C#",
                url: "../categories/c#/questions",
                totalCount: 10,
                todaysCount: 0,
                weekCount: 0
            },
            {
                _id: random(25),
                name: "React",
                url: "../categories/react/questions",
                totalCount: 10,
                todaysCount: 0,
                weekCount: 0
            },
            {
                _id: random(25),
                name: "JavaScript",
                url: "../categories/javascript/questions",
                totalCount: 100,
                todaysCount: 1,
                weekCount: 2
            },
            {
                _id: random(25),
                name: "HTML",
                url: "../categories/html/questions",
                totalCount: 100,
                todaysCount: 10,
                weekCount: 20
            },
            {
                _id: random(25),
                name: "CSS",
                url: "../categories/css/questions",
                todaysCount: 0,
                weekCount: 0
            },
            {
                _id: random(25),
                name: "BootStrap",
                url: "../categories/bootstrap/questions",
                totalCount: 1000,
                todaysCount: 4,
                weekCount: 700
            },
            {
                _id: random(25),
                name: "SQL",
                url: "../categories/sql/questions",
                totalCount: 1000,
                todaysCount: 4,
                weekCount: 700
            },
            {
                _id: random(25),
                name: "MongoDB",
                url: "../categories/mongodb/questions",
                totalCount: 1000,
                todaysCount: 4,
                weekCount: 700
            },
            {
                _id: random(25),
                name: "C",
                url: "../categories/c/questions",
                totalCount: 1000,
                todaysCount: 4,
                weekCount: 700
            },
            {
                _id: random(25),
                name: "Web Programming",
                url: "../categories/awp/questions",
                totalCount: 1000,
                todaysCount: 4,
                weekCount: 700
            },
            
        ]));
    }
}
