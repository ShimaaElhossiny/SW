const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');

const authRoutes = require('./src/routes/authRoutes');

// Initialize app
const app = express();
const port = 3000;

// Setup our view engine
app.set('view engine', 'ejs');

// Middleware to handle json data 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Middleware to handle static files
app.use(express.static(__dirname + '/public'));


// Session middlewares
app.use(session({
    secret: "secret",
    saveUninitialized: false,
    resave: false
}));

// middleware to make 'user' available to all templates
app.use(function(req, res, next) {
    if(session.id){
        res.locals.username = session.username;
        res.locals.email = session.id;
    }
    next();
});

// Setup Database connection
mongoose.connect('mongodb://localhost/sn',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Index Rendering
app.get('/', function(req, res){
    res.status(200).render('index');
});

// Include routes
authRoutes(app);

// Add port to start server
app.listen(port, function(err){
    if(err)
        throw err;
    console.log('Magic happens on ' + port);
});
