const assert = require('chai').assert;
const LectureParser = require('./../../src/utils/LectureParser'); 

describe("Lecture Parser", ()=>{
    it("USING DATA ONLY: should return an 2D array", function(){
        const lp = new LectureParser({
            data: ["lec one 30min", "lec two 60min", "lec three 2lightning"]
        });
        const ret = [
            ["lec one 30min", 30], ["lec two 60min",60], ["lec three 2lightning",10]
        ]
        assert.deepEqual(lp.parse(), ret);
    })
    it("USING FILE ONLY: should return an 2D array", function(){
        const lp = new LectureParser({
            file: './data/dataTest.txt'
        });
        const ret = [
            ["lec one 30min", 30], ["lec two 60min",60], ["lec three 2lightning",10]
        ]
        assert.deepEqual(lp.parse(), ret);
    })
    it("USING FILE AND DATA: should return an 2D array", function(){
        const lp = new LectureParser({
            file: './data/dataTest.txt',
            data: ["lec four 30min", "lec five 60min", "lec six 2lightning"]
        });
        const ret = [
            ["lec four 30min", 30], ["lec five 60min",60], ["lec six 2lightning",10],
            ["lec one 30min", 30], ["lec two 60min",60], ["lec three 2lightning",10],
        ]
        assert.deepEqual(lp.parse(), ret);
    })
})