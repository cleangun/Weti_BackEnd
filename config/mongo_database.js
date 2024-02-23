const { MongoClient } = require("mongodb");

const uri = 'mongodb+srv://cleangun:KGhskemob8SbWuIr@weti-mongo-free.ta5jvyd.mongodb.net/';
const db_name = 'Weti';


module.exports = {
    init : () => {
        return new MongoClient(uri);
    },
    connect : async(client) => {
        try {
            await client.connect();
            console.log("database client connected");
        }
        catch(error){
            console.log("connect Error : "+error);
        }
    },
    returnDB : async(client) => {
        return client.db(db_name);
    },
    close : async(client) => {
        try{
            client.close();
            console.log("database client closed");
        }catch(error){
            console.log("close Error : "+error);
        }
    }
}