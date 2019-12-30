const {registerNewUser, checkUserExists, loginRequired, login, logout} = require('../controllers/authController');
const {renderFeed} = require('../controllers/userController');

function authRoutes(app){
    
    app.route('/register')
        .get(function(req, res){
            res.status(200).render('register');
        })
        .post(registerNewUser);
    
    app.get('/register/:email/exists',checkUserExists);

    app.route('/login')
        .get(function(req, res){
            res.status(200).render('login');
        })
        .post(login);

    app.get('/logout', logout);

    app.get('/feed', loginRequired, renderFeed);

};


module.exports = authRoutes;
