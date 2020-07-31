const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let db;

const mongoConnect = callback => {
    MongoClient.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-hckac.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`)
    .then(client => {
        console.log('Successful Connection');
        db = client.db();   //////Gives Access to the itemdata database
        callback();
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
}

const getDb = () => {
    if(db){
        return db;
    }else{
        throw 'No Database found';
    }
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;