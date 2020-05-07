const squareList = arr => 
	arr
		.filter(num => num > 0 && num % 1 === 0)
		.map(a => a * a);



const squaredIntegers = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]);
console.log(squaredIntegers);

/* I used modulus to get rid of the decimals.

Here's a quick memjog on modulus from stack overflow
num % 1 != 0
i.e. 23 % 1 = 0
i.e. 23.5 % 1 = 0.5

Note that this is based on the numerical value of the number, regardless of format. It treats numerical strings containing whole numbers with a fixed decimal point the same as integers:

'10.0' % 1; // returns 0
10 % 1; // returns 0
'10.5' % 1; // returns 0.5
10.5 % 1; // returns 0.5

*/