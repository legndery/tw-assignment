class LectureModel {
    constructor(name, time){
        this.name = name;
        this.time = time;
    }
    get name() {
        return this.name || "";
    }
    get time(){
        return this.time || "";
    }
}
module.exports = Lecture;