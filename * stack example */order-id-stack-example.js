/*
stack example
*/

function ordersId(){
  this.stack = []
  
  this.record = function(id){
    this.stack.push(id)
  }
  this.get_last = function(){
    return this.stack[this.stack.length-1]
  }
}

const orders = new ordersId()

orders.record("58775457")
orders.record("00168575")



console.log("order list:",orders.stack,"\n last order:",orders.get_last());
