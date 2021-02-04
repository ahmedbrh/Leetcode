/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num =  (parseFloat(x.toString().split("").reverse().join("") )*Math.sign(x));
     
     // x= -123
    
 if(num>2147483647  || num<-2147483648 )   {
     return 0 ;  
  

 }
    else   return num ; 
     // x.split ("") =>  x = [ '-', '1', '2', '3' ]
// x.reverse() =>   x = [ '3', '2', '1', '-' ]

//x = "321-"
// parseFloat(x) => x= 321     // parsefloat run in the end  ! 
 
 //Math.sign (-123)         //multiplie le nombre par le signe du nombre original fourni.      
}