describe('Demo',function(){
    before(function(){
        console.log('before test!')
    })
    after(function(){
        console.log('after test')
    })
    beforeEach(function(){
        console.log('每条测试之前')
    })
    afterEach(function(){
        console.log('每条测试之后')
    })
    context('情景1',function(){
        it('test1',function(){

        })
        it('test2',function(){
            
        })
    })
})