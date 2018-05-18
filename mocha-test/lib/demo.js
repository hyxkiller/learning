class Demo {
    subtotal (unitPrice, quantity){
        return unitPrice * quantity
    }
    wait(data, cb ){
        cb(data)
        setTimeout(() => {
            cb(data)
        }, 2000);
    }
}

module.exports = Demo;
