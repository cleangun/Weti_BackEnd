class GroupModel{
    constructor(groupId, projectId, owner, grade, member, groupName, groupHubId){
        this.groupId = groupId;
        this.projectId = projectId;
        this.owner = [owner];
        this.members = [member];
        this.grade = grade;
        this.groupName = groupName;
        this.groupHubId = groupHubId;
    }
    getGroupId(){
        return this.groupId;
    }
    getProjectId(){
        return this.projectId;
    }
    getOwner(){
        return this.owner;
    }
    getMembers(){
        return this.members;
    }
    getGrade(){
        return this.grade;
    }
    getGroupName(){
        return this.groupName;
    }
    getGroupHubId(){
        return this.groupHubId;
    }
}

module.exports = GroupModel;