const chai = require('chai');
const should = chai.should();

describe('Demo',() => {
    it('使用should风格的断言测试',function(){
        //  多个测试可用and链式调用
        var hello = 'hello';
        hello.should.exist;
        hello.should.be.a('string');
        hello.should.equal('hello');
        hello.should.not.equal('helo');
        hello.should.have.length(5);
    })
})