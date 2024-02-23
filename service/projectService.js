// DB
const db = require("../config/mongo_database");
const db_client = db.init();
const db_name = "Weti";

// import Class
const projectModel = require("../model/projectModel");
const groupModel = require("../model/groupModel");

// import Libraries
import {v4} from 'uuid';


// Function
const createProject = async(projectObject) => {
    db.connect(db_client);
    try{
        db_client.db(db_name).collection("projectCollection").insertOne({
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
}

// Project 첫 시작 Process
const projectInitProcess = async(req,res) => {
    const projectId = req.body.projectId;
    const owner = req.body.owner;
    const projectName = req.body.projectName;
    
    // project DTO
    const projectObject = new projectModel(projectId, owner, projectName, owner);
    
    // create Project document
    await createProject(projectObject);

    // group DTO
    const groupHubUUID = projectId + "_" + v4();
    const groupObject = new groupModel(projectId, owner, "MasterGroup", owner, projectName+"_defaultGroup", groupHubUUID);

    res.send("project init Process Successfully done");
}

module.exports = {
    initProject : projectInitProcess
}