//Problem 4: Print the average of even numbers from 1 to 100 (both included)

//1. First we have to find the even numbers b/w 1 to 100
//2. Then we have to calculate the sum of even numbers 
//3. Then we have to calculate the number of even numbers b/w 1 to  100
//4. Now we have to calculate the average with this formula :-(sum/count)


let i=1;
let sum=0;
let count=0;

while(i<=100){
  if (i%2==0){
    sum = sum+i ;
    count++;
    
  }
  i++;
  
}
console.log("The average is " ,sum/count);