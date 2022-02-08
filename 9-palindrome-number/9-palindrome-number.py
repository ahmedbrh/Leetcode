class Solution(object):
  
    def reverse_int(self,n):
        reverse_number =0 
        while n>0 : 
                reminder  = n%10  
                reverse_number = (reverse_number*10) + reminder
                n= n // 10 
        return reverse_number

    def isPalindrome(self,x):
       ## x number int 
       ##reverse

        if self.reverse_int(x)==x and x>=0:
               return True  
        else:
                return False


        
        
          

            
        