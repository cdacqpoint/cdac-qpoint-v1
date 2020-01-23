# CDAC QPoint

CDAC QPoint is a forum to be used by CDAC students and teaching faculty to annonymously post queries, respond to them, share links to the queries in social media, with an option to receive email notifications. 
Each question posted can be upvoted, commented on (answered) and tagged with branches of the CDAC curriculum and categorised under modules (or technologies) with respect to the question posted.

## Prerequisites

* NPM (node package manager)
    - Package manager for JavaScript
    - Distributed with Node.js
        ```bash
            sudo apt-get install nodejs
        ```
* Yarn  package manager)
    - Installing using npm
        ```bash
            sudo npm install yarn -g
        ```
* MongoDB 
    - NoSQL Database 
        ```bash
            sudo apt install mongodb
        ```
* Mocha
    - Library to run tests
        ```bash
            npm install --global mocha
        ```
* Chai
    - Assertion Library
        ```bash
            npm install chai
        ```
## Where to begin?

* Installing [Git](https://git-scm.com/)
    ```bash
        sudo apt-get install git
    ```
* Cloning the [project](https://github.com/cdacqpoint/cdac-reconnect)
    - There are various ways to clone a project.
    - The first is to use git's command line interface, git bash. This clones the project files into the directory selected
    ```bash
        git clone https://github.com/cdacqpoint/cdac-reconnect.git
    ```
    - If only a single branch needs to be cloned, such as the front-end-branch,
    ```bash
        git clone -branch <branch-name> https://github.com/cdacqpoint/cdac-reconnect.git
    ``` 
    - One may also however use a GUI or Download the files from github.

## Built With

* [Npm](https://www.npmjs.com/) -  Package manger 
* [Nodejs](https://nodejs.org/en/) - JavaScript runtime env
* [Express](https://expressjs.com/) - The Web framework used
* [React](https://reactjs.org/) - UI library used
* [MongoDB](https://www.mongodb.com/) - NoSQL database program
* [Mongoose](https://mongoosejs.com/) - Object data modeling(ODM) library

## Proof Of Concepts

* [Docker](https://github.com/xicoder96/cdac-reconnect/tree/poc-branch/DockerPOC)
    - Building the image
        The following command is run from the `DockerFile` to build Docker image. Here, `-t` is the tag for the image.
        ```CMD
            docker build -t <your username>/node-web-app .
        ``` 
    - Running the Image
        Running the image with -d runs the container in detached mode, leaving the container running in the background. The -p flag redirects a public port to a private port inside the container.
        ```SHELL
            docker run -p 49160:8080 -d <your username>/node-web-app
        ```
    - Test
        Get The port of the docker images mapped:
        ```SHELL
            docker ps
        ```
        Now the app can be called using curl (install if needed via: sudo apt-get install curl):
        ```SHELL
            curl -i localhost:49160
        ```
* [Mocha and Chai testing](https://github.com/xicoder96/cdac-reconnect/tree/poc-branch/MochaTest)
    - Use `npm install` to install all the package and dependencies.
    - `./test` contains all the unit test files.
    - `server.js` is the server with the podcast.
    - `server2.js` is the server with the podcast, which returns our project style response.
        ```JSON 
        {
            "status":true,
            "message":"Fetched details successfully",
            "data":[]
        }
        ```
* [Mail](https://github.com/xicoder96/cdac-reconnect/tree/poc-branch/MailPOC)
    - `emails/welcome` includes the stuctural files of the email.
    - This POC deals with sending the first "welcome" email to users
* [Login](https://github.com/xicoder96/cdac-reconnect/tree/poc-branch/LoginPOC)
    - `react-client` includes client side verification for user login. (express)
    - `server` includes server side verification for user login. (express)

## Links for further reading and detailed instructions

* [Front End](https://github.com/cdacqpoint/cdac-qpoint-v1/blob/front-end-branch/README.md)
* [Back End](https://github.com/cdacqpoint/cdac-qpoint-v1/blob/back-end-branch/README.md)

## Authors
* **Alisha Bilquis** - *DAC008* - [lia-bilquis](https://github.com/lia-bilquis)
* **Manik Muldhokar** - *DAC057* - [ghost8395](https://github.com/ghost8395)
* **Dhiraj Chordiya** - *DAC027* - [SilentKiller0007](https://github.com/SilentKiller0007)
* **Aniket** - *DAC014* - [anughadage](https://github.com/anughadage)
* **Sai Krishnan S** - *DAC093* - [xicoder96](https://github.com/xicoder96)
