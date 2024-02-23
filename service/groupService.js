// DB
const db = require("../config/mongo_database");
const db_client = db.init();
const db_name = "Weti";

// import Class
const groupModel = require('../model/groupModel');

// function
const createGroup = async (groupObject) => {
    db.connect(db_client);
    try{
        await db_client.db(db_name).collection("groupCollection").insertOne({
            "_id" : groupObject.getGroupId(),
            "project_id" : groupObject.getProjectId(),
            "group_name" : groupObject.getGroupName(),
            "owner" : groupObject.getOwner(),
            "grade" : groupObject.getGrade(),
            "member" : groupObject.getMembers(),
            "group_hub_id" : groupObject.getGroupHubId()
        })
    }
    catch(error){
        console.log("Group Create Error : "+error);
    }
    db.close(db_client);
}



module.exports = {
    createGroup : createGroup
}

