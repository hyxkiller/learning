const chai = require('chai');
const expect = chai.expect;

let Demo = require('../lib/demo');

var demo = new Demo()

describe('Demo', () => {
    it('单价10块钱的3件商品小计金额应该是30块', () => {
       var toal = demo.subtotal(10 ,3)
       expect(toal).to.equal(30)
    })
    it('一段时间后返回数据', (done) => {
        demo.wait('ziggurat', (e) => {
            expect(e).to.equal('hello');
            // expect(e).to.equal('ziggurat');         
            done()  
        })
    })
})