## Project for class of CS533
This project can be used to rendere neo4j graphs using React component.

## Dependencies
For this project, you need React, a Neo4j graph database and an IDE(in my case I am using VScode)

### Neo4j
You can begin by first downloading Neo4j(https://neo4j.com/)and developing your own graph database to render. Don't worry if you do not know Neo4j, you can create one of their own sample projects(https://neo4j.com/developer/example-project/).

### React
For React, you can download it from (https://reactjs.org/). You can also download it using the terminal :

``` npm install -g create-react-app``` 

If you do not have npm, you can install it at (https://www.npmjs.com/). React is built on top of npm.

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### IDE
You can chose any editor of your choice. To download VScode, go to (https://code.visualstudio.com/)


## Setup

You can clone this repository using the terminal or downloading the zip files. For the terminal :

``` git clone <repository-link> ```

Once you have cloned the repository, do

``` cd CS533-fall2019 ```


## Available Scripts

Open your Neo4j database, select the project you want to render and start that project.

In your code, I already have node module neo4j-graph-renderer which will handle all the work for you:

General usage:

```
// Using ES6 Syntax
import React from 'react';
import ReactDOM from 'react-dom';
import { Neo4jGraphRenderer } from 'neo4j-graph-renderer';

const App = () => (
  <div>
     <Neo4jGraphRenderer url={process.env.NEO4J_URL} user={process.env.NEO4J_USER}
        password={process.env.NEO4J_PASSWORD} query="MATCH (n)-[r]->(m) RETURN n,r,m"/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

Props you must provide:

url: the url required to access your neo4j db (e.g. "http://localhost:7474")
user: the username required to access your neo4j db
password: the password required to access your neo4j db
query: the query you'd like to execute


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
