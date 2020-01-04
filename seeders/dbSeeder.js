#! /usr/bin/env node

/**
 * @file Seeder for populating some test questions, tags,... and all qpoint related details to your database
 * @author  CDAC QPoint <cdacqpoint@github.com> 
 */

console.log('This script populates some test datas to your database. usage - e.g.: ./seeders/dbSeeder');

//---------------------------------------------------------//
/*
 * 
 * 
 * Import necessary modules from node_modules for seeder to work
 * 
 *  
 */
require('rootpath')();
require('dotenv').config()
const async = require('async')
const mongoose = require('mongoose');
//---------------------------------------------------------//



//---------------------------------------------------------//
/*
 * 
 * 
 * #1 => **Import the models we've created**
 * 
 *  
 */
const Post = require('../models/postModel');
const Category = require('../models/categoryModel');
const CourseTag = require('../models/courseTagModel');
//---------------------------------------------------------//



//---------------------------------------------------------//
/*
 * 
 * 
 * Setup Moongoose connection 
 * 
 *  
 */
const dev_db_url = 'mongodb://localhost/cdacqpointv1'
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//---------------------------------------------------------//



//---------------------------------------------------------//
/*
 * 
 * 
 * #2 => **Create global arrays which stores recently added documents**
 * 
 *  
 */
var posts = []
var catgories = []
var courseTags = []
//---------------------------------------------------------//



//---------------------------------------------------------//
/*
 * 
 * 
 * #3 => **Create Instance Helpers for seeder to work** 
 * 
 *  
 */

/**
 * Course Tag Create
 * @param {*} name 
 * @param {*} desc 
 * @param {*} status 
 * @param {callback} cb 
 * @author Sai Krishnan S <xicoder96@github.com>
 */
function CourseTagCreate(name, desc, status, cb) {
    let coursetag = new CourseTag({ name: name, desc: desc, status: status });

    coursetag.save(function (err) {
        if (err) {
            cb(err, null);
            return;
        }
        console.log('New Course Tag:', coursetag);
        courseTags.push(coursetag)
        cb(null, coursetag);
    });
}

/**
 * Category Create
 * @param {*} name 
 * @param {*} desc 
 * @param {*} status 
 * @param {callback} cb 
 * @author Sai Krishnan S <xicoder96@github.com>
 */
function CategoryCreate(name, desc, status, cb) {
    let category = new Category({ name: name, desc: desc, status: status });

    category.save(function (err) {
        if (err) {
            cb(err, null);
            return;
        }
        console.log('New Category:', category);
        catgories.push(category)
        cb(null, category);
    });
}

/**
 * Post Create
 * @param {*} title 
 * @param {*} desc 
 * @param {*} courseTag 
 * @param {*} categories 
 * @param {*} attachments 
 * @param {*} upvotes 
 * @param {*} name 
 * @param {*} email 
 * @param {callback} cb 
 */
function PostCreate(title, desc, courseTag, categories, attachments, name, email, cb) {
    let post = new Post({ title: title, desc: desc, courseTag: courseTag, categories: categories});

    post.save(function (err) {
        if (err) {
            cb(err, null);
            return;
        }
        console.log('New Post:', post);
        posts.push(post)
        cb(null, post);
    });
}
//---------------------------------------------------------//




//---------------------------------------------------------//
/*
 *
 *
 * #4 => **Now setup functions to seed values into the collections**
 *
 *
 */

/**
 * Create Course Tags
 * @param {Callback} cb 
 */
function createCourseTags(cb) {
    async.series([
        function (callback) {
            CourseTagCreate('DAC', 'The Post Graduate Diploma in Advanced Computing (PG-DAC) is the flagship programme of ACTS. The course is targeted towards engineers and IT professionals who wish to venture into the domain of advanced computing.', true, callback);
        },
        function (callback) {
            CourseTagCreate('DESD', 'Realizing the growth of embedded systems in day-to-day life and the need for trained manpower in this promising area, C-DAC has launched a Diploma in Embedded Systems Design (DESD) for Engineers in computers, electronics and IT. ', true, callback);
        },
        function (callback) {
            CourseTagCreate('DIOT', 'This course will enable the student to utilize various Embedded Technologies related to IoT, Sensor Networks, Communication Protocols, Cloud Computing, Accessing Resources and Services needed to perform functions with dynamically changing needs.', true, callback);
        },
        function (callback) {
            CourseTagCreate('DBDA', 'The theoretical and practical mix of the Post Graduate Diploma in Big Data Analytics (PG-DBDA) programme.To explore the fundamental concepts of big data analytics.', true, callback);
        },
        function (callback) {
            CourseTagCreate('DMC', 'The Post-Graduate Diploma in Mobile Computing (PG-DMC) {erstwhile PG Diploma in Wireless and Mobile Computing (PG-DWiMC)} is one of the pioneering programme of ACTS. The PG-DMC Course is targeted towards the engineers who wish to venture into the domain of Mobile Computing.', true, callback);
        },
        function (callback) {
            CourseTagCreate('DVLSI', 'PG-DVLSI is a pioneering course offered by C-DAC to assist engineers who wish to gain theoretical as well as practical knowledge in the field of Very Large Scale Integration (VLSI) design. It will also prepare them to keep pace with the changing trends of VLSI technology and the requirements of an ever-growing VLSI design industry.', true, callback);
        },
        function (callback) {
            CourseTagCreate('DITISS', 'The theoretical and practical mix of the Post Graduate Diploma in IT Infrastructure Systems and Security (PG-DITISS) programme has the following focus: To explore the fundamental concepts of Cyber Security To develop in-depth knowledge and understanding of the Intrusion Detection and Prevention domain. ', true, callback);
        },
        function (callback) {
            CourseTagCreate('DSSD', 'C-DAC has taken up the challenge to address the need for trained system software development professionals by introducing an in-depth course Post Graduate Diploma in System Software Development (PG DSSD) giving emphasis to secure software design & implementation practices as per the Industry needs.', true, callback);
        },
        function (callback) {
            CourseTagCreate('DBIHI', 'The importance of Biomedical Engineers in fast growing health-care industry is now well acknowledged and consequently new career options are available to them in health care industries both nationally and internationally. The Post Graduate Diploma in Biomedical Instrumentation and Health Informatics (PG-DBIHI) programme is designed to mold engineers who can serve in health care industry, as well as in companies dealing with medical equipment.', true, callback);
        },
        function (callback) {
            CourseTagCreate('DHPCSA', 'The theoretical and practical mix of the HPC System Administration programs has the following objectives: To explore the fundamental concepts of HPC Administration. To learn HPC Clustering, Parallel file system, Data Center Design and HPC Solutions & their applications.', true, callback);
        },
        function (callback) {
            CourseTagCreate('Others', 'Any Other CDAC Courses or a general topic ', true, callback);
        },
    ],
        // optional callback
        cb);
}

/**
 * Create Course Tags
 * @param {Callback} cb 
 */
function createCategories(cb) {
    async.series([
        function (callback) {
            CategoryCreate('Javascript', '', true, callback);
        },
        function (callback) {
            CategoryCreate('AWP', '', true, callback);
        },
        function (callback) {
            CategoryCreate('MERN Stack', '', true, callback);
        },
        function (callback) {
            CategoryCreate('Nodejs', '', true, callback);
        },
        function (callback) {
            CategoryCreate('Mysql', '', true, callback);
        },
        function (callback) {
            CategoryCreate('Mongo DB', '', true, callback);
        },
        function (callback) {
            CategoryCreate('Angular', '', true, callback);
        },
        function (callback) {
            CategoryCreate('React js', '', true, callback);
        },
        function (callback) {
            CategoryCreate('Flux', '', true, callback);
        },
        function (callback) {
            CategoryCreate('Redux', '', true, callback);
        },
        function (callback) {
            CategoryCreate('Graph QL', '', true, callback);
        },
        function (callback) {
            CategoryCreate('Vue js', '', true, callback);
        },
        function (callback) {
            CategoryCreate('Moongoose', '', true, callback);
        },
        function (callback) {
            CategoryCreate('Moment js', '', true, callback);
        },
    ],
        // optional callback
        cb);
}

/**
 * Create Posts
 * @param {callback} cb 
 */
function createPosts(cb) {
    async.series([
        function (callback) {
            PostCreate(
                'How to Create and Use Enum in Mongoose',//title
                `
                <p>I am trying to create and use an enum type in Mongoose. I checked it out, but I'm not getting the proper result. I'm using enum in my mongoose schema as follows:</p>
            
            <code>var RequirementSchema = new mongoose.Schema({
               status: {
                    type: String,
                    enum : ['NEW', 'STATUS'],
                    default: 'NEW'
                },
            })</code>
            <p>But I am little bit confused here, how can I put the value of an enum like in Java NEW("new"). How can I save an enum in to the database according to it's enumerable values. I am using it in express node.js.</p>`,//Desc

                courseTags[0],//courseTags
                [catgories[0], catgories[1], catgories[2], catgories[5]],//categories
                [],//attachments
                "",//name
                "",//email
                callback
            );
        },
        function (callback) {
            PostCreate(
                'What does the [Flags] Enum Attribute mean in C#?',//title
                `<p>From time to time I see an enum like the following:
                [Flags]</p>
                <pre>public enum Options 
                {
                    None    = 0,
                    Option1 = 1,
                    Option2 = 2,
                    Option3 = 4,
                    Option4 = 8
                }</pre>
                <p>
                I don't understand what exactly the [Flags]-attribute does.</p>

                <p>Anyone have a good explanation or example they could post?</p>
                `,//Desc
                courseTags[3],//courseTags
                [catgories[4], catgories[2], catgories[1], catgories[5]],//categories
                [],//attachments
                "",//name
                "",//email
                callback
            );
        },
        function (callback) {
            PostCreate(
                'Convert a string to an enum in C#',//title
                `
                <p>What's the best way to convert a string to an enumeration value in C#?</p>
                
                <p>I have an HTML select tag containing the values of an enumeration. When the page is posted, I want to pick up the value (which will be in the form of a string) and convert it to the enumeration value.</p>
                
                <p>In an ideal world, I could do something like this:</p>
                
                <p>StatusEnum MyStatus = StatusEnum.Parse("Active");</p>
                
                <p>but that isn't a valid code </p>.
                `,//Desc
                courseTags[1],//courseTags
                [catgories[6], catgories[1], catgories[3], catgories[5]],//categories
                [],//attachments
                "",//name
                "",//email
                callback
            );
        },
        function (callback) {
            PostCreate(
                'How to check whether a string contains a substring in JavaScript?',//title
                `<p>Usually I would expect a String.contains() method, but there doesn't seem to be one.</p>
                <p>What is a reasonable way to check for this?</p>
                `,//Desc
                courseTags[1],//courseTags
                [catgories[6], catgories[1], catgories[3], catgories[5]],//categories
                [],//attachments
                "",//name
                "",//email
                callback
            );
        },
        function (callback) {
            PostCreate(
                'Are certain node objects inheriting from two classes?',//title
                `
                <p>In node <a href="https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/" rel="nofollow noreferrer">guide</a>, it says that: </p>
                
                <blockquote>
                  <p>"The request object that's passed in to a handler implements the
                  ReadableStream interface."</p>
                </blockquote>
                
                <p>However, afterwards it also says that</p>
                
                <blockquote>
                  <p>"Note: The request object is an instance of IncomingMessage.".</p>
                </blockquote>
                
                <p>So how is <code>request</code> also instance of IncomingMessage and also it implements RedableStream interface?
                How would you achieve that in JS?
                Also, I thought in JS there were no interfaces?</p>
                `,//Desc
                courseTags[0],//courseTags
                [catgories[6], catgories[1], catgories[3], catgories[5]],//categories
                [],//attachments
                "",//name
                "",//email
                callback
            );
        },
        function (callback) {
            PostCreate(
                'Implementing Interfaces in NodeJS',//title
                `
                <p>The NodeJS Documentation states:</p>
                
                <blockquote>
                  <p>"The request object is an instance of IncomingMessage. The request
                  object that's passed in to a handler implements the ReadableStream
                  interface"</p>
                  
                  <p>"So far we haven't touched on the response object at all, which is an
                  instance of ServerResponse, which is a WritableStream."</p>
                </blockquote>
                
                <p>JS has Prototypal Inheritance so when the documentation says it is an
                instance it means it adds to the prototype chain, but how it
                implements an Interface in JS?</p>
                
                <p>And how is this all chained up and how it works. 
                The Official NodeJS Documentation does not explain.</p>
                
                <p>Source - <a href="https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/" rel="nofollow noreferrer">Anatomy of an HTTP Transaction</a></p>
                
                <p>Edit- My Question is not related to multiple Inheritance in JS. It is about how NodeJS modules implements interface which is natively not supported in JS. I beg your Pardon if there is any mistake in my question or lacking in my knowledge. Thanks!</p>
                `,//Desc
                courseTags[0],//courseTags
                [catgories[6], catgories[1], catgories[3], catgories[5]],//categories
                [],//attachments
                "",//name
                "",//email
                callback
            );
        },
        function (callback) {
            PostCreate(
                'How to check whether a string contains a substring in JavaScript?',//title
                `<p>Usually I would expect a <code>String.contains()</code> method, but there doesn't seem to be one. </p><p>What is a reasonable way to check for this?</p>
                `,//Desc
                courseTags[0],//courseTags
                [catgories[6], catgories[1], catgories[3], catgories[5]],//categories
                [],//attachments
                "",//name
                "",//email
                callback
            );
        },
        function (callback) {
            PostCreate(
                'How do I remove a property from a JavaScript object?',//title
                `
                <p>Say I create an object as follows:</p>
                
                <pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> myObject </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                    </span><span class="str">"ircEvent"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"PRIVMSG"</span><span class="pun">,</span><span class="pln">
                    </span><span class="str">"method"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"newURI"</span><span class="pun">,</span><span class="pln">
                    </span><span class="str">"regex"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"^http://.*"</span><span class="pln">
                </span><span class="pun">};</span></code></pre>
                
                <p>What is the best way to remove the property <code>regex</code> to end up with new <code>myObject</code> as follows?</p>
                
                <pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> myObject </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                    </span><span class="str">"ircEvent"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"PRIVMSG"</span><span class="pun">,</span><span class="pln">
                    </span><span class="str">"method"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"newURI"</span><span class="pln">
                </span><span class="pun">};</span></code></pre>
                   
                `,//Desc
                courseTags[0],//courseTags
                [catgories[3], catgories[1], catgories[2], catgories[7]],//categories
                [],//attachments
                "",//name
                "",//email
                callback
            );
        },
        function (callback) {
            PostCreate(
                'Prototypical inheritance: how to get instanceof?',//title
                `
                <p>After watching this <a href="https://www.youtube.com/watch?v=doXpW5AD60Q&amp;index=7&amp;list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f" rel="nofollow noreferrer">video</a> I learned about a nice way to implement inheritance with Javascript: prototypical inheritance. This method uses Object.create/Object.assign to create a new object based on another instance. This seems very interesting given that it is very easy to understand what is going on. For example:</p>
                `,//Desc
                courseTags[0],//courseTags
                [catgories[6], catgories[1], catgories[3], catgories[5]],//categories
                [],//attachments
                "",//name
                "",//email
                callback
            );
        },
        function (callback) {
            PostCreate(
                'What does “use strict” do in JavaScript, and what is the reasoning behind it?',//title
                `
                <p>Recently, I ran some of my JavaScript code through Crockford's <a href="http://www.jslint.com/" rel="noreferrer">JSLint</a>, and it gave the following error:</p>
                
                <blockquote>
                  <p>Problem at line 1 character 1: Missing "use strict" statement.</p>
                </blockquote>
                
                <p>Doing some searching, I realized that some people add <code>"use strict";</code> into their JavaScript code. Once I added the statement, the error stopped appearing. Unfortunately, Google did not reveal much of the history behind this string statement. Certainly it must have something to do with how the JavaScript is interpreted by the browser, but I have no idea what the effect would be.</p>
                
                <p>So what is <code>"use strict";</code> all about, what does it imply, and is it still relevant?</p>
                
                <p>Do any of the current browsers respond to the <code>"use strict";</code> string or is it for future use?</p>
                `,//Desc
                courseTags[0],//courseTags
                [catgories[6], catgories[1], catgories[3], catgories[5]],//categories
                [],//attachments
                "",//name
                "",//email
                callback
            );
        },
    ], cb);
}
//---------------------------------------------------------//


//---------------------------------------------------------//
/*
 *
 *
 * #5 => Now Lets run these seeders and see what happens, fingers crossed :)
 * Order of series is very important please be carefull while adding seeder
 *
 *
 */

async.series([
    createCourseTags,
    createCategories,
    createPosts
],
    // Optional callback
    function (err, results) {
        if (err) {
            console.log('FINAL ERR: ' + err);
        }
        else {
            console.log('PostInstances: ' + posts);

        }
        // All done, disconnect from database
        mongoose.connection.close();
    });