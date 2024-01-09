// test suite

// test cases

var assert= require('assert');

describe('Mathematical Operations Suite',function(){
    
    it.only ('addition of numbers',function(){

        var a = 10;
        var b = 10;
        var c = a+b;
        assert.equal(c,20);

    });

    it.skip ('subtraction of numbers',function(){
        var a = 10;
        var b = 10;
        var c = a-b;
        this.timeout(500);
    });

    it ('multiplication of numbers',function(done){
        var a = 10;
        var b = 10;
        var c = a*b;
        setTimeout(done,3000);
    });

    it ('division of numbers',function(){
        var a = 10;
        var b = 10;
        var c = a/b;
    });

    it("just to implement pending test")
});