class Solution {
    public boolean lemonadeChange(int[] bills) {
        
        int fives =0 ; 
        int tens =0  ; 
        
   for (int bill : bills) {
       
       
       if(bill==5){
           
           
           fives++;
           
       }else if (bill==10){
            tens++;    //tens=10
           fives--; //-5   //bill =5
             
       
       }else if(tens>0) {
           
           tens--;
           fives--; 
           
       }else {
           
           fives -=3;
       }
       if(fives<0) {
           return false;
       }
   }
       return true ;  
    }
}