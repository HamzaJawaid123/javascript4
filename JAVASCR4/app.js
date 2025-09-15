// Q1
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + "!");

//  Q2
// var phoneModel = prompt("Enter your favorite mobile phone model:");
// var stringLength = phoneModel.length;
// document.write("My favorite phone is: " + phoneModel + "<br>");
// document.write("Length of string: " + stringLength);



// Q3
// var word = "Pakistani";
// var index = word.indexOf("n");
// document.write("String: " + word + "<br>");
// document.write("Index of 'n': " + index);



// Q4
// var word2 = "Hello World";
// var lastIndex = word2.lastIndexOf("l");
// document.write("String: " + word2 + "<br>");
// document.write("Last index of 'l': " + lastIndex);






// Q5
// var word3 = "Pakistani";
// var character = word3.charAt(3);
// document.write("String: " + word3 + "<br>");
// document.write("Character at index 3: " + character);


// Q6
// var fName = prompt("Enter your first name:");
// var lName = prompt("Enter your last name:");
// var fNameTrim = fName.trim();
// var lNameTrim = lName.trim();
// var finalName = fNameTrim.concat(" ", lNameTrim);
// alert("Hello, " + finalName + "!");



//  Q7
// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");
// document.write("City: " + city + "<br>");
// document.write("After replacement: " + newCity);



// Q8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g, "&");
// document.write(newMessage);



// Q9
// var stringValue = "472";
// var numberValue = Number(stringValue);
// document.write("Value: " + stringValue + "<br>");
// document.write("Type: " + typeof stringValue + "<br>");
// document.write("Value: " + numberValue + "<br>");
// document.write("Type: " + typeof numberValue);


// // Q10 (from Arrays and loop)
// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var isFound = false;
// var foundIndex = -1;

// for (var i = 0; i < bakeryItems.length; i++) {
//   if (bakeryItems[i].toLowerCase() === userInput.toLowerCase()) {
//     isFound = true;
//     foundIndex = i;
//     break;
//   }
// }
// if (isFound) {
//   alert(userInput + " is available at index " + foundIndex + " in our bakery");
// } else {
//   alert("We are sorry. " + userInput + " is not available in our bakery");
// }



// Q11 (from Arrays and loop)
// var a = [24, 53, 78, 91, 12];
// document.write("Array items: " + a.toString() + "<br>");
// var largest = a[0];
// for (var i = 1; i < a.length; i++) {
//   if (a[i] > largest) {
//     largest = a[i];
//   }
// }
// document.write("The largest number is " + largest);




// Q12 (from Arrays and loop)
// var a2 = [24, 53, 78, 91, 12];
// document.write("Array items: " + a2.toString() + "<br>");
// var smallest = a2[0];
// for (var i = 1; i < a2.length; i++) {
//   if (a2[i] < smallest) {
//     smallest = a2[i];
//   }
// }
// document.write("The smallest number is " + smallest);






// // Q13 (from Arrays and loop)
// document.write("Multiples of 5 ranging 1 to 100: ");
// for (var i = 1; i <= 100; i++) {
//   if (i % 5 === 0) {
//     document.write(i + ", ");
//   }
// }


//                   next chapter

// Q1 (multidimensional array)
// var emptyMultiArray = [];




//Q2 (multidimensional array)
// var matrix = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1]
// ];


//  Q3 (multidimensional array)
// for (var i = 1; i <= 10; i++) {
//   document.write(i + "<br>");
// }





// Q4 (multidimensional array)
// var tableNumber = parseInt(prompt("Enter a number to show its multiplication table"));
// var tableLength = parseInt(prompt("Enter length multiplication table"));
// document.write("Multiplication table of " + tableNumber + "<br>");
// document.write("Length " + tableLength + "<br><br>");
// for (var i = 1; i <= tableLength; i++) {
//   document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
// }





//Q5 (multidimensional array)
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//   document.write(fruits[i] + "<br>");
// }
// document.write("<br>");
// for (var i = 0; i < fruits.length; i++) {
//   document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }

