var textDiv = document.createElement('div') ;
textDiv.textContent = ('Sum of 3 and 5 is 8')
textDiv.style.fontSize ='24px'
document.body.appendChild (textDiv);

var textDiv = document.createElement('div') ;
textDiv.textContent = ('Subtrahend of 5 and 3 is 2')
textDiv.style.fontSize ='24px'
document.body.appendChild (textDiv);


var textDiv = document.createElement('div') ;
textDiv.textContent = ('Product of 3 and 5 is 15')
textDiv.style.fontSize ='24px'
document.body.appendChild (textDiv);


var textDiv = document.createElement('div') ;
textDiv.textContent = ('Remainder of 3 and 5 is 0.6')
textDiv.style.fontSize ='24px'
document.body.appendChild (textDiv);

var textDiv = document.createElement('div') ;
textDiv.textContent = ('Modulus of 3 and 5 is 3')
textDiv.style.fontSize ='24px'
document.body.appendChild (textDiv);



//3.
let num;
console.log("Value after variable declaration is: " + num);

num = 5;
console.log("Initial value: " + num);

num++;
console.log("Value after increment is: " + num);

num += 7;
console.log("Value after addition is: " + num);

num--;
console.log("Value after decrement is: " + num);

let remainder = num % 3;
console.log("The remainder is : " + remainder);




let ticketPrice = 600;

let totalCost = ticketPrice * 5;
console.log("The cost of buying 5 tickets is: " + totalCost + " PKR");

//5.
let mult = 5; 

console.log("Multiplication table of " + mult + ":");

for(let i = 1; i <= 10; i++) {
    console.log(mult + " * " + i + " = " + mult * i); } // for displaying in the consolebox





var heading = document.createElement('h1')
heading.textContent = 'Table of 5';
document.body.appendChild(heading) ;
document.write ('5*1=5<br>');
document.write ('5*2=10<br>');
document.write ('5*3=15<br>');
document.write ('5*4=20<br>');
document.write ('5*5=25<br>');
document.write ('5*6=30<br>');
document.write ('5*7=35<br>');
document.write ('5*8=40<br>');
document.write ('5*9=45<br>');
document.write ('5*10=50<br>');
document.write ('5*11=55<br>');
document.write ('5*12=60<br>');




//6.
let tempCelsius = 25; 


let tempFahrenheit = (tempCelsius * 9/5) + 32;
console.log(tempCelsius + "°C is " + tempFahrenheit + "°F");

tempFahrenheit = 77; 

tempCelsius = (tempFahrenheit - 32) * 5/9;
console.log(tempFahrenheit + "°F is " + tempCelsius + "°C"); // for displaying in the consolebox


document.write('<br><br>25°C is 77°F') ;
document.write('77°F is 21.1111111°C') ;

//7.
let priceOfItem1 = 500; 
let priceOfItem2 = 600; 

let quantityOfItem1 = 2; 
let quantityOfItem2 = 3; 


let shippingCharges = 200;

let totalForItem1 = priceOfItem1 * quantityOfItem1;
let totalForItem2 = priceOfItem2 * quantityOfItem2;

let CostAllOver = totalForItem1 + totalForItem2 + shippingCharges;

console.log("Total cost of your order is: " + CostAllOver); // for displaying in the consolebox


var heading = document.createElement('h1')
heading.textContent = 'Shoppig Cart'
document.body.appendChild(heading) ;


document.write('<br>Price of utem 1 is 500<br>')
document.write ('Quantity of item 1 is 2<br>')
document.write('Price of utem 1 is 600<br>')
document.write ('Quantity of item 1 is 3<br>')
document.write('Shipping Charges are 100<br><br><br>')
document.write('Your total cost is 3000<br><br>')



//8.
let totalMarks = 500; 
let marksObtained = 400; 
let percentage = (marksObtained / totalMarks) * 100;
console.log("Your percetage is:" + percentage) ;// for displaying in the consolebox


var heading = document.createElement('h1') ;
heading.textContent = 'MarkSheet';
document.body.appendChild(heading) ;

document.write("The percentage is: " + percentage + "%");



//9.
let usDollars = 10;
let saudiRiyals = 25;
let usDollarToPkr = 104.80;
let saudiRiyalToPkr = 28;

let totalInPkr = usDollars * usDollarToPkr + saudiRiyals * saudiRiyalToPkr;
console.log('Total in Pakistani Rupees: ' + totalInPkr);

var heading = document.createElement('h1') ;
heading.textContent = 'Currency in PKR';
document.body.appendChild(heading) ;
document.write('Total Currency in PKR: 1748')


//10.
let _num = 7; 
let result = ((_num + 5) * 10) / 2;
console.log("The result is: " + result);



//11.
let currentYear = 2024;
let birthYear = 1992; 

let age1 = currentYear - birthYear;
let age2 = age1 - 1;

console.log('They are either ' + age2 + ' or ' + age1 + ' years old.');


var heading = document.createElement('h1') ;
heading.textContent = 'Age Calculator';
document.body.appendChild(heading) ;

document.write('<br>Current Year = 2024<br>')
document.write(' Birth Year = 1992<br>')
document.write('Your age is: 31 or 32n')


//12.
let radius = 20; 

let pi = 3.142;
let circumference = 2 * pi * radius;
let area = pi * radius * radius;

console.log('The circumference is ' + circumference.toFixed(2));
console.log('The area is ' + area.toFixed(2)); // for displaying in the consolebox



var heading = document.createElement('h1') ;
heading.textContent = 'The Geometrizer';
document.body.appendChild(heading) ;
document.write('Radius of a circle: 20<br>')
document.write('The cicumference is: 125.68<br>')
document.write('The area is: 1256.8')



let favoriteSnack = "chocolatechip";
let currentAge = 18;
let maxAge = 60;
let amountPerDay = 3;
let totalForRestOfTheLife = (maxAge - currentAge) * amountPerDay * 365;


console.log(`You will need ${totalForRestOfTheLife} ${favoriteSnack} to last you until the ripe old age of ${maxAge}.`);
 // for displaying in the consolebox


var heading = document.createElement('h1') ;
heading.textContent = 'The Lifetime Supply Calculator';
document.body.appendChild(heading) ;
document.write('Favorite snack: chocolatechip<br>')
document.write('Current Age: 18 <br>')
document.write('Estimated maximum age: 60<br>')
document.write('Amount of snack per day: 3<br>')
document.write('You will need 45900 chocolatechip to last you until the ripe old age of 60.')




