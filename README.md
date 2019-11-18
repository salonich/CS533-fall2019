## Project for class of CS533
This project can be used to render neo4j graphs using React component.

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

``` git clone https://github.com/salonich/CS533-fall2019.git ```

Once you have cloned the repository, do

``` cd CS533-fall2019 ```

Then run:

``` npm update ```

and after that,

```npm install ```

This will download all the dependencies of the project.


## Available Scripts

Open your Neo4j database, select the project you want to render and start that project. Once the project has successfully started, go on to start your local react browser.

In the code, I already have node module Neo4jGraphRenderer which will handle all the work for you:

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

>url: the url required to access your neo4j db (e.g. "http://localhost:7474")

>user: the username required to access your neo4j db

>password: the password required to access your neo4j db

>query: the query you'd like to execute


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

This will render your Neo4j database only if you have provided correct credentials and query.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Run your own query

If you are acquainted to cypher language, you can copy-paste your query in the text field and the result will be rendered on the webpage.

### Please make sure to start your Noe4j database and then do npm start.


