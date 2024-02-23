// DB
const db = require("../config/mongo_database");
const db_client = db.init();
const db_name = "Weti";

// function
const insertUser = async(req,res) => {
    console.log("userService Got a request");

    const name = req.body.name;
    const user_id = req.body.user_id;
    const project_id = req.body.project_id;
    const author = req.body.author;
    const senior = req.body.senior;
    const junior = req.body.junior;

    // db연결
    db.connect(db_client);
    const userCollection = db_client.db(db_name).collection("userCollection");
    console.log(userCollection);
    // insert Process
    const result = await userCollection.insertOne({
        name : name,
        user_id : user_id,
        project_id : project_id,
        author : author,
        senior : senior,
        junior : junior
    });
    
    db.close(db_client);
    res.send("userSerivce insertUser");
}

module.exports = {
    insert : insertUser,
}