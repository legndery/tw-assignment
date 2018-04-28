class TrackModel {
    constructor(time) {
        this.time = time;
        this.lecture = [];
        this.remainingTime = time;
    }
    get time() {
        return time;
    }
    addLecture(lecture) {
        if (this.remainingTime >= lecture.time) {
            this.lecture.push(lecture);
            this.remainingTime -= lecture.time;
        }else{
            throw Error("Dude no space!")
        }
    }
    get remainingTime() {
        return this.remainingTime;
    }

}
module.exports = Track;