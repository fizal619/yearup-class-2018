// Write a program that will `console.log` the numbers from 1 to 100. But for multiples of three `console.log` “Fizz” instead of the number and for the multiples of five `console.log` “Buzz”. For numbers which are multiples of both three and five `console.log` “FizzBuzz”.
for (i=1; i<=100; i++){
 if (i % 15 == 0 )
  console.log("fizzBuzz");
  else if (i % 5 == 0 )
        console.log("Buzz");
  else if (i % 3 == 0 )
        console.log("fizz");
        else console.log(i);
}
