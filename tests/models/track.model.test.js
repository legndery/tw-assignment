const TrackModel = require('../../src/models/track.model');
const assert = require('chai').assert;

describe("Track Model", ()=>{
    it("should return the properties", function(){
        const t = new TrackModel(180, 'morning');
        assert.deepEqual(t.getActivities(), []);
        assert.deepEqual(t.getTime(), 180);
        assert.deepEqual(t.getRemainingTime(), 180);
    });
});
