const chai = require('chai');
const expect = chai.expect;

describe('Demo',() => {
    it('使用expect风格的断言测试',function(){
        var hello = 'hello';
        expect(hello).to.exist;
        expect(hello).to.be.a('string');
        expect(hello).to.equal('hello');

        var num = 3;
        expect(num).to.be.at.most(5);
        expect(num).to.be.at.least(3);  
        expect(num).to.be.within(1, 3);                      
    })
})