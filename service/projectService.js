// DB
const db = require("../config/mongo_database");
const db_client = db.init();
const db_name = "Weti";

// import Libraries
const {v4} = require("uuid");

// import Class
const projectModel = require("../model/projectModel");
const groupModel = require("../model/groupModel");
// import Service
const groupService = require("../service/groupService");




// Function
const createProject = async(projectObject) => {
    db.connect(db_client);
    try{
        await db_client.db(db_name).collection("projectCollection").insertOne({
            "_id" : projectObject.getId(),
            "owner" : projectObject.getOwner(),
            "group" : [],
            "name" : projectObject.getName(),
            "members" : projectObject.getMembers()
        })
    }
    catch(error){
        console.log("Error occured : " + error);
    }
    db.close(db_client);
}

// Project 첫 시작 Process
const projectInitProcess = async(req,res) => {
    const projectId = req.body.projectId;
    const owner = req.body.owner;
    const projectName = req.body.projectName;

    // related ID value preSet
    const UUIDTokens = v4().split("-");
    console.log(JSON.stringify(UUIDTokens));
    const groupId = projectId + "_" + UUIDTokens[2] +"-"+ UUIDTokens[1] + "-" + UUIDTokens[0] + "-" + UUIDTokens[3] + "-" + UUIDTokens[4];
    const groupHubUUID = groupId + "-hub";
    
    // project DTO
    const projectObject = new projectModel(projectId, owner, groupId, projectName, owner);
    
    // create Project document
    await createProject(projectObject);

    // group DTO
    const groupObject = new groupModel(groupId,projectId, owner, "MasterGroup", owner, projectName+"_defaultGroup", groupHubUUID);
    
    // create Group document
    groupService.createGroup(groupObject);
    
    res.send("project init Process Successfully done");
}

module.exports = {
    initProject : projectInitProcess
}