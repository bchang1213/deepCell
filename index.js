/* *****************Server Dependencies********************* */
const express = require("express");
const app = express();
//Never touch the placement of express and app.
const port = process.env.PORT || 8000;
const path = require('path');

//logger for http middleware
const logger = require('morgan');

//bodyParser middleware injection
const bodyParser = require('body-parser')

/* *****************Server config********************* */
// Log requests to the console.
app.use(logger('dev'));

//// Parse incoming http requests data with body parser(https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// this is the line that tells our server to use the "/static" folder for static content
console.log("Server: setting the static assets route.");
app.use(express.static(__dirname + "/static")); // two underscores before dirname

//Routing: telling the server where to derive the logic for routing the application
console.log("Server: setting routes..");
var route_setter = require('./server/config/routes.js');
route_setter(app);

/* *****************Server Start********************* */
//Listen on
var server = app.listen(port, function(){
	console.log("Server: listening on port: " ,port);
});

/*This is the Express Server for deepcell.

We use body-parser to parse
data sent through HTTP response.

Sequelize is the ORM used to work with the PostGRESQL database.
It is configured within the file '.sequelizerc' on the root folder.

It contains the following info:

./.sequelizerc
---------------------
const path = require('path');

module.exports = {
	"config": path.resolve('./server/config', 'config.json'),
	"models-path": path.resolve('./server/models'),
	"seeders-path": path.resolve('./server/seeders'),
	"migrations-path": path.resolve('./server/migrations')
};
---------------------

The config.json file contain our application configuration settings, such as database authentication configuration.
migrations folder will hold our application's migrations, while the models folder will hold the application models.
Seed data is initial data provided with a system for testing, training or templating purposes.
The seeders folder typically holds seed data, but we're not going to be using that in this tutorial.

After creating the .sequelizerc file, you need to `npm install sequelize`, and then run `sequelize init`.

*/