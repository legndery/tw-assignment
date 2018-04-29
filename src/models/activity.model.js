class ActivityModel {
    constructor(name, time){
        this.name = name;
        this.time = time;
    }
    getName() {
        return this.name || "";
    }
    getTime(){
        return this.time || 0;
    }
    setName(name){
        this.name = name;
    }
    setTime(time){
        this.time = time;
    }
    setStartTime(startTime){
        this._startTime = startTime;
    }
    getStartTime(){
        return this._startTime;
    }

}
module.exports = ActivityModel;