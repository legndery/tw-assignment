const scheduler = require('../../src/services/scheduling.service');
const ActivityController = require('../../src/controllers/activity.controller');
const TrackController = require('../../src/controllers/track.controller');
const Track = require('../../src/models/track.model');
const Activity = require('../../src/models/activity.model');
const assert = require('chai').assert;

describe("Scheduling Service", ()=>{
    it("Using No Input: Return return empty array", function(){
        const result = scheduler([],new TrackController(Track));
        const ret = []
        assert.deepEqual(result, ret);
    })
    it("Using 5 Activities: should return Track Objects with Scheduled Activities", function(){
        const ac = new ActivityController(Activity);
        const tc = new TrackController(Track);
        const arr = [
            ac.makeActivity("lec 1", 60),
            ac.makeActivity("lec 2", 80),
            ac.makeActivity("lec 3", 45),
            ac.makeActivity("lec 4", 100),
            ac.makeActivity("lec 5", 20),
        ]
        const result = scheduler([].concat(arr), tc);
        const ret = [
            tc.makeNew(),
            tc.makeNew()
        ]
        ret[0].addActivity(arr[3]);
        ret[0].addActivity(arr[1]);
        ret[1].addActivity(arr[0]);
        ret[1].addActivity(arr[2]);
        ret[1].addActivity(arr[4]);
        assert.deepEqual(result, ret);
    })
});