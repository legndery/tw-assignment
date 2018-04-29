const TrackModel = require('../../src/models/track.model');
const TrackController = require('../../src/controllers/track.controller');
const assert = require('chai').assert;

describe("Track Controller", ()=>{
    it("should return 2 Track Objects for Morning and Afternoon Sessions", function(){
        const tc = new TrackController(TrackModel);
        const arr = [tc.makeNew(), tc.makeNew()]
        const ret = [
            new TrackModel(180,'morning'),
            new TrackModel(240,'afternoon')
        ]
        assert.deepEqual(arr, ret);
    });
});
