

function sumOfEven(num){
    return  sum=sum+i;
    num=0;
    sum=0;
    num=prompt("Enter the nth value");
   for(i=0; i<=num; i++) {
       if(i % 2===0){
           sum=sum+i;
           
           
          
       }
      
 }

}
 /* A condition inside the sumofeven function that ensure 
  start parameter is less than end parameter*/
function sumOfEven(start,end){
    if(typeof start !== 'number' || typeof end !== 'number'){
      return 'Invalid number supplied';
    }
    if(start >= end ){
        return "Value is less than";
    }
  
    var sum = 0;
    for(var i=start; i<=end; i++){
      if(i%2===0){
        sum = sum + i;
      }
    }
    return sum;
    
  }
  
