const chai = require('chai');
const assert = chai.assert;

describe('Demo',function(){
    it('使用assert风格的断言测试',function(){
        var val = 'hello';
        assert.typeOf(val, 'string');
        assert.lengthOf(val, 5);
        assert.equal(val, 'hello')
    })
})