// test suite

// test cases

var assert= require('assert');

describe('Mathematical Operations Suite',function(){
    
    it ('addition of numbers',function(){

        var a = 10;
        var b = 10;
        var c = a+b;
        assert.equal(c,20);

    });

    it ('subtraction of numbers',function(){
        var a = 10;
        var b = 10;
        var c = a-b;
    });

    it ('multiplication of numbers',function(){
        var a = 10;
        var b = 10;
        var c = a*b;
    });

    it ('division of numbers',function(){
        var a = 10;
        var b = 10;
        var c = a/b;
    });
});