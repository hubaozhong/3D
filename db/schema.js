/*
 db/schema.js contains database schema description for application models
 by default (when using jugglingdb as ORM) this file uses database connection
 described in config/database.json. But it's possible to use another database
 connections and multiple different schemas, docs available at

 http://railwayjs.com/orm.html

 Example of model definition:

 define('User', function () {
     property('email', String, { index: true });
     property('password', String);
     property('activated', Boolean, {default: false});
 });

 Example of schema configured without config/database.json (heroku redistogo addon):
 schema('redis', {url: process.env.REDISTOGO_URL}, function () {
     // model definitions here
 });

*/

/**
var Post = describe('Post', function () {
    property('title', String);
    property('content', String);
    property('published', Boolean);
    set('restPath', pathTo.posts);
});
**/



/**
customSchema(function () {

    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/xiaodonggua');

    var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

    var BlogPost = new Schema({
        author    : ObjectId
        , title     : String
        , content    : String
        , published : Boolean
        , body      : String
        , date      : Date
    });

    var Post = mongoose.model('BlogPost', BlogPost);
    Post.modelName = 'BlogPost'; // this is for some features inside compound (helpers, etc)

    module.exports['BlogPost'] = Post;
});**/
module.exports = function (mongoose, compound) {

    var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

    var BlogPost = new Schema({
        author    : ObjectId
        , title     : String
        , content    : String
        , published : Boolean
        , body      : String
        , date      : Date
    });

    var Post = mongoose.model('BlogPost', BlogPost);
    Post.modelName = 'BlogPost'; // this is for some features inside compound (helpers, etc)

    //module.exports['BlogPost'] = Post;
    compound.models.Post = Post
};