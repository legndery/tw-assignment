
class Conference {
    constructor(options){
        this._options = options;
        this.init();
    }
    init(){
        const {
            ActivityController, 
            Models, 
            InputParser , 
            data,
            file,
            Scheduler,
            TrackController
        } = this._options;

        this.activityController = new ActivityController(Models.activity);
        this.trackController = new TrackController(Models.track)
        this.inputParser = new InputParser({data,file});
        this._activities = this.inputToActivities();
        this._scheduler = Scheduler;
        this._tracks = [];
    }

    inputToActivities(){
        const array = this.inputParser.parse();
        return array.map(nameAndTime=>{
            return this.activityController.makeActivity(nameAndTime[0],nameAndTime[1]);
        });
    }

    schedule(){
        this._tracks =  this._scheduler(this._activities, this.trackController,(a,b)=>b.getTime()-a.getTime());
        this._tracks.forEach((_,i) => {
            this._tracks[i].addBuffer(this.activityController.makeActivity("",0));
        });
    }
    toString(){
        return this._tracks.reduce((prev, current,i)=>{
            if((i+1)%2){
                prev.push('\n');
                prev.push(`Track ${i/2+1}: `)
            }
            current.getActivities().forEach((activity)=>{
                prev.push(`${activity.getStartTime()} ${activity.getName()}`);
            })
            return prev;
        },[]).join("\n");
    }
}
module.exports = Conference;