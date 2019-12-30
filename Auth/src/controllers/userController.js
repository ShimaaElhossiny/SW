const session = require('express-session');
const {UserModel} = require('../models/userModel');

// Index Rendering
function renderFeed(req, res){
    res.status(200).render('feed');
}

module.exports = {renderFeed};
