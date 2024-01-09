//const { describe, before, beforeEach, after, afterEach, it } = require("node:test");

describe("Mocha hooks",function(){

    before("before all tests",function(){
    console.log("bedfore all tests");
    });
    
    beforeEach("before  tests",function(){
    console.log("bedfore all tests");
     });

    after("after all tests",function(){
    console.log("bedfore all tests");
    });

    afterEach("after  tests",function(){
    console.log("bedfore all tests");
    });

    it("hook test",function(){
        console.log("hook test");
    })

});