
# CDAC - Qpoint API References  

The CDAC-Qpoint API is organized around [REST](http://en.wikipedia.org/wiki/Representational_State_Transfer). Our API has predictable resource-oriented URLs, accepts requests  and returns responses as  [JSON-encoded](http://www.json.org/) , and uses standard HTTP response codes, authentication, and verbs.

The entire application is contained within the `.env` file. You can find a `.env.example` in the root directory, make a copy of the file and rename it as `.env` and change the configuration values.  

## Install

```command
   $ npm install
    found 0 vulnerabilities
   $ npm run seeder
    > cdac-qpoint-v1@1.0.0 seeder /path/to/server-qpoint-v1
    > node ./seeders/dbSeeder


```

## Run the app

On MacOS or Linux, run the app with this command:

```command
    $ npm run serverstart
    > cdac-qpoint-v1@1.0.0 serverstart /path/to/server-qpoint-v1
    > DEBUG=cdac-qpoint-v1:* npm run devstart


    > cdac-qpoint-v1@1.0.0 devstart /path/to/server-qpoint-v1
    > nodemon ./bin/www

    [nodemon] 2.0.2
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching dir(s): *.*
    [nodemon] watching extensions: js,mjs,json
    [nodemon] starting `node ./bin/www`
```

On Windows, use this command:

```command
   > set DEBUG=cdac-qpoint-v1:*
   > npm run devstart
```

Using Docker:

```command
   $ docker-composer up
    Attaching to mongo, qpoint-apis
    qpoint-apis |

   $ docker exec -it <Container name> npm run seeder
    > cdac-qpoint-v1@1.0.0 seeder /path/to/server-qpoint-v1
    > node ./seeders/dbSeeder
```

## Run the tests

```command
   $ npm run test
   > cdac-qpoint-v1@1.0.0 test /path/to/server-qpoint-v1
   > mocha -timeout 10000
```

# REST API

The REST API to the example app is described below.

## Get list of Posts

### Request

`GET /api/v1/posts`

### Query Params

- limit: __number__
  - number of posts
  - default:10
- offset:__number__
  - skip number of posts
  - default:0
- keyword:__string__
  - search keyword
  - *Optional param*
- relatedQuesId:__string__
  - related Question Id
  - *Optional param*
  - **Should not be used with Category and Course Tag**
- courseTag:__string__
  - course Tag Id
  - *Optional param*
  - **Should not be used if relatedQuesId is mentioned**
- category:__string__
  - Category Id
  - *Optional param*
  - **Should not be used if relatedQuesId is mentioned**
- titleOnly:__boolean__
  - Show only `title`, `upvotes` and `_id`.
  - *Optional param*
- sort:__string__  
  - Sorting Algorithm [`latest`,`top_rated`]
  - default:"latest"

### Response

```JSON
   {
    "status": true,
    "message": "Post details fetched successfully!",
    "data": {
        "posts_count": 1,
        "posts": [
            {
                "categories": [
                    {
                        "_id": "5e28874f5ae04b3f46164fc4",
                        "name": "Javascript"
                    },
                    {
                        "_id": "5e28874f5ae04b3f46164fc5",
                        "name": "AWP"
                    },
                    {
                        "_id": "5e28874f5ae04b3f46164fc6",
                        "name": "MERN Stack"
                    },
                    {
                        "_id": "5e28874f5ae04b3f46164fc9",
                        "name": "Mongo DB"
                    }
                ],
                "publishedOn": "2020-01-22T17:33:03.264Z",
                "upvotes": 0,
                "comments": [
                    "5e28874f5ae04b3f46164fdc",
                    "5e28874f5ae04b3f46164fdd"
                ],
                "_id": "5e28874f5ae04b3f46164fd2",
                "title": "How to Create and Use Enum in Mongoose",
                "desc": "\n                <p>I am trying to create and use an enum type in Mongoose. I checked it out, but I'm not getting the proper result. I'm using enum in my mongoose schema as follows:</p>\n            \n            <code>var RequirementSchema = new mongoose.Schema({\n               status: {\n                    type: String,\n                    enum : ['NEW', 'STATUS'],\n                    default: 'NEW'\n                },\n            })</code>\n            <p>But I am little bit confused here, how can I put the value of an enum like in Java NEW(\"new\"). How can I save an enum in to the database according to it's enumerable values. I am using it in express node.js.</p>",
                "courseTag": {
                    "_id": "5e28874f5ae04b3f46164fb9",
                    "name": "DAC"
                },
                "modifiedAt": "2020-01-22T17:33:03.787Z"
            }
        ]
    }
}
```

## Create a Post

### Request

`POST /api/v1/post/create`

### Parameters

- title: __string__
  - Unique Title for your post.
  - **Required**
  - min: 3
  - max: 150
- desc: __string__
  - Description for your post.
  - **Required**
  - min: 3
  - max: 700
- courseTag:__string__
  - course Tag Id
  - **Required**
- categories:__array__
  - Array of categories
  - *Optional*
- notify:__boolean__
  - Send user notifications
  - *Optional*
- name:__string__
  - Name of the recipent.
  - *Optional*
- email:__string__
  - Email of the recipent.
  - *Optional*
  
### Response

```JSON
{
    "status": true,
    "message": "Posted Successfully!",
    "data": {
        "categories": [
            "5e28a77d989abc54c717e22c",
            "5e28a77d989abc54c717e22d"
        ],
        "status": "published",
        "visibility": "public",
        "scheduledTo": "2020-01-22T19:49:54.903Z",
        "publishedOn": "2020-01-22T19:49:54.903Z",
        "upvotes": 0,
        "notify": true,
        "comments": [],
        "_id": "5e28a77d989abc54c717e22e",
        "title": "What is the “S” in “npm i -S?",
        "desc": "<p>janedoe@email.com</p>",
        "courseTag": "5e28874f5ae04b3f46164fb9",
        "name": "Alisha",
        "email": "alishabiquis@queen.com",
        "attachments": [],
        "createdAt": "2020-01-22T19:50:21.279Z",
        "modifiedAt": "2020-01-22T19:50:21.279Z",
        "__v": 0
    }
}
```

## Get a specific Post

### Request

`GET /api/v1/post/:id`

### Response

```JSON
{
    "status": true,
    "message": "Post details fetched successfully!",
    "data": {
        "categories": [
            {
                "_id": "5e28874f5ae04b3f46164fc4",
                "name": "Javascript"
            },
            {
                "_id": "5e28874f5ae04b3f46164fc5",
                "name": "AWP"
            },
            {
                "_id": "5e28874f5ae04b3f46164fc6",
                "name": "MERN Stack"
            },
            {
                "_id": "5e28874f5ae04b3f46164fc9",
                "name": "Mongo DB"
            }
        ],
        "status": "published",
        "visibility": "public",
        "publishedOn": "2020-01-22T17:33:03.264Z",
        "upvotes": 1,
        "_id": "5e28874f5ae04b3f46164fd2",
        "title": "How to Create and Use Enum in Mongoose",
        "desc": "\n                <p>I am trying to create and use an enum type in Mongoose. I checked it out, but I'm not getting the proper result. I'm using enum in my mongoose schema as follows:</p>\n            \n            <code>var RequirementSchema = new mongoose.Schema({\n               status: {\n                    type: String,\n                    enum : ['NEW', 'STATUS'],\n                    default: 'NEW'\n                },\n            })</code>\n            <p>But I am little bit confused here, how can I put the value of an enum like in Java NEW(\"new\"). How can I save an enum in to the database according to it's enumerable values. I am using it in express node.js.</p>",
        "courseTag": {
            "_id": "5e28874f5ae04b3f46164fb9",
            "name": "DAC"
        },
        "attachments": [],
        "modifiedAt": "2020-01-22T17:40:55.896Z"
    }
}
```

## Get a non-existent Post

### Request

`GET /api/v1/post/:id`

### Response

```JSON
  { 
     "status" :false,
     "message":"Post not found!",
     "data":null
  }
```

## Upvote a Post

### Request

`GET /api/v1/post/:id/upvote`

### Response

```JSON
    {
        "status": true,
        "message": "Your Response is marked!",
        "data": null
    }
```
## Get all Comments

### Request

`GET /api/v1/comments`

### Query Params

- post: __string__
  - post id
  - **Required**
- limit: __number__
  - number of posts
  - default:10
- offset:__number__
  - skip number of posts
  - default:0

### Response

```JSON
{
    "status": true,
    "message": "Fetched All comments!",
    "data": {
        "comments": [
            {
                "upvotes": 105,
                "_id": "5e28874f5ae04b3f46164fdc",
                "post": "5e28874f5ae04b3f46164fd2",
                "desc": "\n            <p>The enums here are basically String objects. Change the enum line to <code>enum: ['NEW', 'STATUS']</code> instead. You have a typo there with your quotation marks.</p>",
                "createdAt": "2020-01-22T17:33:03.772Z"
            },
            {
                "upvotes": 14,
                "_id": "5e28874f5ae04b3f46164fdd",
                "post": "5e28874f5ae04b3f46164fd2",
                "desc": "\n            <p>From the <a href=\"https://mongoosejs.com/docs/validation.html\" rel=\"noreferrer\">docs</a></p>\n\n            <p>Mongoose has several inbuilt validators. Strings have <strong>enum</strong> as one of the validators.\n            So enum creates a validator and checks if the value is given in an array.\n            E.g:</p>\n            \n            <pre class=\"lang-js prettyprint prettyprinted\" style=\"\"><code><span class=\"kwd\">var</span><span class=\"pln\"> userSchema </span><span class=\"pun\">=</span><span class=\"pln\"> </span><span class=\"kwd\">new</span><span class=\"pln\"> mongooseSchema</span><span class=\"pun\">({</span><span class=\"pln\">\n               userType</span><span class=\"pun\">:</span><span class=\"pln\"> </span><span class=\"pun\">{</span><span class=\"pln\">\n                    type</span><span class=\"pun\">:</span><span class=\"pln\"> </span><span class=\"typ\">String</span><span class=\"pun\">,</span><span class=\"pln\">\n                    </span><span class=\"kwd\">enum</span><span class=\"pln\"> </span><span class=\"pun\">:</span><span class=\"pln\"> </span><span class=\"pun\">[</span><span class=\"str\">'user'</span><span class=\"pun\">,</span><span class=\"str\">'admin'</span><span class=\"pun\">],</span><span class=\"pln\">\n                    </span><span class=\"kwd\">default</span><span class=\"pun\">:</span><span class=\"pln\"> </span><span class=\"str\">'user'</span><span class=\"pln\">\n                </span><span class=\"pun\">},</span><span class=\"pln\">\n            </span><span class=\"pun\">})</span><span class=\"pln\">\n            </span></code></pre>",
                "createdAt": "2020-01-22T17:33:03.785Z"
            }
        ],
        "comments_count": 2
    }
}
```

## Create a Comment

### Request

`POST /api/v1/comment/create`

### Parameters

- post: __string__
  - Post Id.
  - **required**
- desc: __string__
  - Comment Description
  - min: 3
  - max: 700
  - **required**

### Response

```JSON
{
    "status": true,
    "message": "Commented Successfully!",
    "data": {
        "status": "published",
        "upvotes": 0,
        "_id": "5e288ada4cd49154ea951c72",
        "post": "5e236718aed1282caface823",
        "desc": "<p>The'S'option is the Save option in npm. It adds the npm package to your dependencies for your project. You can also add the dependency manually by editing the package.json file. </p><p>To answer your question about getting help for npm, use the following command:</p><pre><code>npm help i</code></pre><p>That will give you a description of all the options available for the 'i' option. </p>",
        "createdAt": "2020-01-22T17:48:10.162Z",
        "modifiedAt": "2020-01-22T17:48:10.162Z",
        "__v": 0
    }
}
```

## Upvote a comment

### Request

`GET /api/v1/comment/:id/upvote`

### Response

```JSON
{
    "status": true,
    "message": "Your Response is marked!",
    "data": null
}
```

## Get a list of categories

### Request

`GET /api/v1/categories`

### Query Params

- limit: __number__
  - number of posts
  - default:10
- offset:__number__ 
  - skip number of posts
  - default:0
- keyword:__string__
  - search keyword
  - *Optional param*
- sort: __string__
  - Sorting Algorithm [`latest`,`alphabetical`,`numberOfPosts`]
  - default:"latest"

### Response

```JSON
{
    "status": true,
    "message": "Category details fetched successfully!",
    "data": {
        "categories_count": 1,
        "categories": [
            {
                "status": true,
                "posts": [],
                "_id": "5e28874f5ae04b3f46164fc5",
                "name": "AWP",
                "desc": ""
            }
        ]
    }
}
```

## Get a list of Course Tags.

### Request

`GET /api/v1/tags`

### Response

```JSON
{
    "status": true,
    "message": "Fetched Tags Successfully!",
    "data": [
        {
            "status": true,
            "posts": [
                "5e2367124bbb072cd460bec7",
                "5e2367124bbb072cd460becb",
                "5e2367124bbb072cd460becc",
                "5e2367124bbb072cd460becd",
                "5e2367124bbb072cd460bece",
                "5e2367124bbb072cd460becf",
                "5e2367124bbb072cd460bed0",
                "5e236718aed1282caface823",
                "5e2884f64cd49154ea951c70"
            ],
            "_id": "5e2367114bbb072cd460beae",
            "name": "DAC",
            "desc": "The Post Graduate Diploma in Advanced Computing (PG-DAC) is the flagship programme of ACTS. The course is targeted towards engineers and IT professionals who wish to venture into the domain of advanced computing.",
            "__v": 0,
            "totalCount": 1,
            "weekCount": 1,
            "todaysCount": 1
        },
        {
            "status": true,
            "posts": [
                "5e2367124bbb072cd460bec9",
                "5e2367124bbb072cd460beca"
            ],
            "_id": "5e2367114bbb072cd460beaf",
            "name": "DESD",
            "desc": "Realizing the growth of embedded systems in day-to-day life and the need for trained manpower in this promising area, C-DAC has launched a Diploma in Embedded Systems Design (DESD) for Engineers in computers, electronics and IT. ",
            "__v": 0,
            "totalCount": 0,
            "weekCount": 0,
            "todaysCount": 0
        },
        {
            "status": true,
            "posts": [],
            "_id": "5e2367114bbb072cd460beb0",
            "name": "DIOT",
            "desc": "This course will enable the student to utilize various Embedded Technologies related to IoT, Sensor Networks, Communication Protocols, Cloud Computing, Accessing Resources and Services needed to perform functions with dynamically changing needs.",
            "__v": 0,
            "totalCount": 0,
            "weekCount": 0,
            "todaysCount": 0
        },
        {
            "status": true,
            "posts": [
                "5e2367124bbb072cd460bec8"
            ],
            "_id": "5e2367114bbb072cd460beb1",
            "name": "DBDA",
            "desc": "The theoretical and practical mix of the Post Graduate Diploma in Big Data Analytics (PG-DBDA) programme.To explore the fundamental concepts of big data analytics.",
            "__v": 0,
            "totalCount": 0,
            "weekCount": 0,
            "todaysCount": 0
        },
        {
            "status": true,
            "posts": [],
            "_id": "5e2367124bbb072cd460beb2",
            "name": "DMC",
            "desc": "The Post-Graduate Diploma in Mobile Computing (PG-DMC) {erstwhile PG Diploma in Wireless and Mobile Computing (PG-DWiMC)} is one of the pioneering programme of ACTS. The PG-DMC Course is targeted towards the engineers who wish to venture into the domain of Mobile Computing.",
            "__v": 0,
            "totalCount": 0,
            "weekCount": 0,
            "todaysCount": 0
        },
        {
            "status": true,
            "posts": [],
            "_id": "5e2367124bbb072cd460beb3",
            "name": "DVLSI",
            "desc": "PG-DVLSI is a pioneering course offered by C-DAC to assist engineers who wish to gain theoretical as well as practical knowledge in the field of Very Large Scale Integration (VLSI) design. It will also prepare them to keep pace with the changing trends of VLSI technology and the requirements of an ever-growing VLSI design industry.",
            "__v": 0,
            "totalCount": 0,
            "weekCount": 0,
            "todaysCount": 0
        },
        {
            "status": true,
            "posts": [],
            "_id": "5e2367124bbb072cd460beb4",
            "name": "DITISS",
            "desc": "The theoretical and practical mix of the Post Graduate Diploma in IT Infrastructure Systems and Security (PG-DITISS) programme has the following focus: To explore the fundamental concepts of Cyber Security To develop in-depth knowledge and understanding of the Intrusion Detection and Prevention domain. ",
            "__v": 0,
            "totalCount": 0,
            "weekCount": 0,
            "todaysCount": 0
        },
        {
            "status": true,
            "posts": [],
            "_id": "5e2367124bbb072cd460beb5",
            "name": "DSSD",
            "desc": "C-DAC has taken up the challenge to address the need for trained system software development professionals by introducing an in-depth course Post Graduate Diploma in System Software Development (PG DSSD) giving emphasis to secure software design & implementation practices as per the Industry needs.",
            "__v": 0,
            "totalCount": 0,
            "weekCount": 0,
            "todaysCount": 0
        },
        {
            "status": true,
            "posts": [],
            "_id": "5e2367124bbb072cd460beb6",
            "name": "DBIHI",
            "desc": "The importance of Biomedical Engineers in fast growing health-care industry is now well acknowledged and consequently new career options are available to them in health care industries both nationally and internationally. The Post Graduate Diploma in Biomedical Instrumentation and Health Informatics (PG-DBIHI) programme is designed to mold engineers who can serve in health care industry, as well as in companies dealing with medical equipment.",
            "__v": 0,
            "totalCount": 0,
            "weekCount": 0,
            "todaysCount": 0
        },
        {
            "status": true,
            "posts": [],
            "_id": "5e2367124bbb072cd460beb7",
            "name": "DHPCSA",
            "desc": "The theoretical and practical mix of the HPC System Administration programs has the following objectives: To explore the fundamental concepts of HPC Administration. To learn HPC Clustering, Parallel file system, Data Center Design and HPC Solutions & their applications.",
            "__v": 0,
            "totalCount": 0,
            "weekCount": 0,
            "todaysCount": 0
        },
        {
            "status": true,
            "posts": [],
            "_id": "5e2367124bbb072cd460beb8",
            "name": "Others",
            "desc": "Any Other CDAC Courses or a general topic ",
            "__v": 0,
            "totalCount": 0,
            "weekCount": 0,
            "todaysCount": 0
        }
    ]
}
```

## Authors

- **Alisha Bilquis** - *DAC08* - [lia-bilquis](https://github.com/lia-bilquis)
- **Manik Muldhokar** - *DAC57* - [ghost8395](https://github.com/ghost8395)
- **Dhiraj Chordiya** - *DAC27* - [SilentKiller0007](https://github.com/SilentKiller0007)
- **Aniket Ashok Ghadage** - *DAC14* - [anughadage](https://github.com/anughadage)
- **Sai Krishnan S** - *DAC93* - [xicoder96](https://github.com/xicoder96)
