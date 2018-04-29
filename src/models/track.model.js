class TrackModel {
    constructor(time, timeSlot) {
        this.time = time;
        this.timeSlot = timeSlot;
        this.activities = [];
        this.remainingTime = time;
    }
    getTime() {
        return time;
    }
    addActivity(activity) {
        if (this.remainingTime >= activity.getTime()) {

            activity.setStartTime(this.calculateStartTime());
            this.activities.push(activity);
            this.remainingTime -= activity.getTime();
        }else{
            throw Error("Dude no space!")
        }
    }
    calculateStartTime(){
        let date = null;
        switch(this.timeSlot){
            case "morning": 
            date = new Date(0,0,0,9,0,0,0);
            break;
            case "afternoon":
            date = new Date(0,0,0,13,0,0,0);
            break;
        }
        date.setMinutes(date.getMinutes()+this.time-this.remainingTime);
        return this.formatAMPM(date);
    }
    formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours.toString().padStart(2,"0") + ':' + minutes + ampm;
        return strTime;
      }
    getActivities(){
        return this.activities;
    }
    getRemainingTime() {
        return this.remainingTime;
    }
    addBuffer(activity){
        switch(this.timeSlot){
            case "morning": 
            activity.setName("Lunch");
            activity.setStartTime("12:00PM");
            break;
            case "afternoon":
            activity.setName("Networking Event");
            activity.setStartTime("05:00PM")
            break;
        }
        activity.setTime(60);
        this.activities.push(activity);
    }

}
module.exports = TrackModel;