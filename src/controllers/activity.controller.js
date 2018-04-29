const Activity = require('./../models/activity.model');
class ActivityController {
    constructor(model){
        this._model = model;
    }
    makeActivity(name, time){
        return new Activity(name, time);
    }
    makeActivities(arr){
        return arr.map(nameAndTime => {
            return this.makeActivity(nameAndTime.name, nameAndTime.time);
        });
    }
    
}
module.exports = ActivityController;