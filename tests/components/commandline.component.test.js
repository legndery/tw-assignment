const CommandLineComponent = require('./../../src/components/commandline.component');
const assert = require('chai').assert;

describe("CommandLine Component", ()=>{
    it("Using File switch: should return an object", function(){
        const cli = new CommandLineComponent([
            'node',
            'app.js',
            '-u',
            'data/dataTest.txt'
        ]);
        const ret = {
            "file":'data/dataTest.txt'
        }
        cli.commander((o)=>{
            assert.deepEqual(o, ret);
        })
        
    })
});