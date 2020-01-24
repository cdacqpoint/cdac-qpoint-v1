
<h1 align="center" style="border-bottom: none !important; margin-bottom: 5px !important;"><a href="#">CDAC Q-Point</a></h1>
<br />

### Quick Start

* Dependencies are installed by running `yarn` or `npm install`.
* `yarn start` or `npm run start` is run in order to start the local development server.
* 😎 **Congratulations** Now we can begin to learn!

<br />

### Project Structure

- This project is bootstrapped using [Create React App](https://github.com/facebook/create-react-app).
- **Flux** is used for state management and all Flux specific files are located inside `src/flux`. Transitioning to a more robust solution such as Redux is also fairly simple.
- All primary templates are located inside `src/views`.
- There is only one single layout defined (Default) inside `src/layouts`, however, the current structure provides an easy way of extending the UI kit. 
- The `src/components` directory hosts all template-specific subcomponents in their own subdirectory.
- The layout styles inherited from Shards Dashboard are pulled in from the `src/shards-dashboard` submodule inside `src/App.js`.
- Other extra styles specific to the libraries used are located inside `src/assets`.
- The `src/utils` directory contains generic Chart.js and Moment.js utilities.
- The `src/_actions` consisists of actions passed to the Dispatcher.
- The `src/_constants` consists of values to all the constants, referenced by dispatcher in _actions
- The `src/_dummyApis` consists of apis that deal with local storage management. For example, fetching data from local storage or adding data.
- The `src/_dummy` consists of files realted to local storage. Here all dummy values for various pages are stored to test the working of presentation layer, without having to access the back end.
- The `src/_enviroment` holds file dealing with environment settings, such as url, port, etc, to govern the entire project uniformly.
- The `src/_helpers` consists of helper files for axios settings, regEx characters, etc.
- The `src/_services`consists of service calls to communicate with the backend.
- The `src/_store` consists of containers for application state & logic. The logical work in the application is done in the Stores. The Stores register to listen in on the actions of the Dispatcher, follow accordingly and update the Views.
- The `src/appUtils` consists of apis that deal with Database interactions, such as retrieving data, adding data, etc.

<br />

### Available Scripts

- `npm start`

Runs the app in the development mode.

- `npm test`

Launches the test runner in the interactive watch mode.

- `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.



<br />

### Built using

- [Shards React](https://github.com/designrevision/shards-react)
- [Chart.js](https://www.chartjs.org/)
- [Flux](https://facebook.github.io/flux/)
- [Quill](https://quilljs.com/)
- [Moment.js](https://momentjs.com/)

<br />