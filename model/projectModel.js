class ProjectModel {
    constructor(id, owner, defaultGroup, projectName, member){
        this.id = id;
        this.owner = owner;
        this.group = [defaultGroup];
        this.projectName = projectName;
        this.members = [member];
    }

    getId(){
        return this.id;
    }
    getOwner(){
        return this.owner;
    }
    getGroup(){
        return this.group;
    }
    getName(){
        return this.projectName;
    }
    getMembers(){
        return this.members;
    }
}

module.exports = ProjectModel;