module.exports = function(Activities, controller){
    //first we sort the activities\
    const tracks = [];
    Activities.sort((a,b)=>b.getTime()-a.getTime());
    //first fit
    Activities.forEach(activity=>{
        let i=0;
        for(;i<tracks.length;i++){
            const t = tracks[i];
            if(activity.getTime()<=t.getRemainingTime()){
                t.addActivity(activity);
                return;
            }
        }
        tracks.push(controller.makeNew());
        tracks.push(controller.makeNew());//make 2 always
        for(;i<tracks.length;i++){
            const t = tracks[i];
            if(activity.getTime()<=t.getRemainingTime()){
                t.addActivity(activity);
                return;
            }
        }
    });
    return tracks;
}