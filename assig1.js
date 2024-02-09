// // Q:1     Reverse a string without using the built-in reverse() method.
let name= prompt("Enter any word or character:");
let text="";
for(i=(name.length)-1 ; i>=0 ;){
    text= name[i];
    console.log(text);
    i--;
}


// // Q:2     Count the number of vowels in a given string.
// let person= prompt("Enter any words or characters, all must be in lower-case:");
// let vowel=0;
// for(i=0 ; i<person.length ;){
//     if (person[i]=="a" || person[i]=="e" || person[i]=="i" || person[i]=="o" || person[i]=="u"){
//         vowel+=1;
//         console.log(vowel + "- Vowel at this position:" + (i+1));
//     }
//     i++;
// }
// if(vowel!=0){
//     console.log("So, Total number of vowels found in " + person + " is/are: " + vowel);
// }
// else{
//     console.log("NO vowels is in " + person);
// }


// // Q:3     Convert the first letter of each word in a sentence to uppercase.
// let name = prompt("Enter any word or characters: ");
// let text="";
// text= name.toUpperCase();
// console.log("Your input(",name,") in Upper-Case: " + text);


// // Q:4     Check if a string is a palindrome
// function checkPalindrome(string){
//       const len = string.length;
//       for (let i = 0; i < len / 2; i++) {
//           if (string[i] !== string[len - 1 - i]) {
//               return ' not a palindrome';
//           }
//       }
//       return ' a palindrome';
// }
// const string = prompt('Enter a string: ');
// const value = checkPalindrome(string);
// console.log("Your input(" ,string, ") is" ,value);

// // Q:5    Find the sum of all positive numbers in an array.
// // const no = [];
// // no[0]= 3;
// // no[1]= 6;
// // no[2]= 9;

// const no=[3,6,9,12];
// let sum=0;
// for(i=0 ; i<no.length ; ){
//     sum += no[i];
//     i++ ;
// }
// console.log("Sum of ",no , " is: " ,sum);


// // Q:6    Find the index of the first occurrence of a specific element in an array.
// const arr=[1,5,10,4,8,0,2,7,3,6,9];
// let inp = prompt("Enter any number b/w 0-10 : ");
// console.log("The sequence of Numbers in array:  " + arr);
// for(i=0 ; i<arr.length ; ){
//     if(inp==arr[i]){
//         console.log("Number " + inp + " found at index: " + i);
//         break
//     }
//     i++ ;
// }


// // Q:7    Remove all duplicates from an array without built-in methods.
// function removeDuplicate(str, n)
//     {
//         // Used as index in the modified string
//         var index = 0;
//         // Traverse through all characters
//         for (var i = 0; i < n; i++)
//         {
//             // Check if str[i] is present before it 
//             var j;
//             for (j = 0; j < i; j++) 
//             {
//                 if (str[i] == str[j])
//                 {
//                     break;
//                 }
//             }
//             // If not present, then add it to // result.
//             if (j == i) 
//             {
//                 str[index++] = str[i];
//             }
//         }
//         return str.join("").slice(str, index);
//     }

// var str = prompt("Enter any word or character: ");
// console.log("string is: ", str);
// var separ = str.split(""); 
// var n = separ.length;
// var result= removeDuplicate(separ, n);
// console.log(result);
// document.write(result);
     

// // Q:8    Sort the array in ascending and descending without built-in methods.

//  // Clone the array to avoid modifying the original
//  const clonedArray = [2,6,1,5,0];
//  // Implement the bubble sort algorithm
// for (let i = 0; i < clonedArray.length - 1; i++) {
//   for (let j = 0; j < clonedArray.length - i - 1; j++) {
//             // Use the custom compare function or default comparison
//     const shouldSwap =
//     typeof compareFunction === "function"
//       ? compareFunction(clonedArray[j], clonedArray[j + 1]) > 0
//       : String(clonedArray[j]) > String(clonedArray[j + 1]); // Default comparison as strings
//     if (shouldSwap) {
//       // Swap elements
//       const temp = clonedArray[j];
//       clonedArray[j] = clonedArray[j + 1];
//       clonedArray[j + 1] = temp;
//     }
//   }
// }
// console.log(clonedArray);


// // Q:9     Print all even numbers between 1 and 20 using a while loop
// let no=1;
// console.log("Even numbers are:");
// while(no<21){
//     if(no%2 === 0){
//         console.log(no);
//     }
//     no+=1;
// }

// // Q:10      Calculate the factorial of a number using a do-while loop.
// let inp= prompt("Enter any number:");
// let fac=1;
// console.log("Factorial of " + inp + " is:");
// do{
//         fac*= inp;
//         inp -= 1;
// }while(inp>0);
// console.log(fac);


// // Q:11      Iterate through the properties of an object using a for-in loop.
// // for-in : used for objects
// let student= {
//         name: "Ali",
//         age: 30,
//         cgp: 3.7,
// };
// for(let key in student){
//         console.log("key=", key , "     value=", student[key]);
// }
// // for-of : used for str/array
// let name="OSAMA";
// for(let value of name){
//         console.log(value);
// }


// // Q:12      Loop through an array using a for-of loop and double each element.
// let arr=[0,2,6,8];
// let new_arr= [];
// let join=[];
// for(let value of arr){
//         new_arr += value;
//         new_arr += value;
//         join=Array.from(new_arr);
// }
// console.log("Original Array: ",arr);
// console.log("Doubling element of Array: ",join);


// // Q:13      Check if a number is even or odd and return a corresponding message.
// let inp= prompt("Enter any number:");
// if(inp%2===0){
//         console.log("The number(" + inp + ") u provide is an Even Number");
// }
// else{
//         console.log("The number(" + inp + ") u provide is an Odd Number");
// }


// // Q:14       Find the maximum of three numbers using nested ternary operators.
// let inp1 = prompt("Enter first number:");
// let inp2 = prompt("Enter second number:");
// let inp3 = prompt("Enter third number:");
// console.log("1st no u provide is: " ,inp1);
// console.log("2nd no u provide is: " ,inp2);
// console.log("3rd no u provide is: " ,inp3);
// let check =
//     (inp1 > inp2 && inp1 > inp3)
//     ? "Input 1 is Greater"
//     : (inp2 > inp1 && inp2 > inp3)
//     ? "Input 2 is Greater"
//     : (inp3 > inp1 && inp3 > inp2)
//     ? "Input 3 is Greater"
//     : "All inputs are equal";
// console.log("Maxmimum out of them: ",check);


// // Q:15       Determine if a year is a leap year or not.
// let inp= prompt("Enter any year number:");
// if(inp%4===0){
//         console.log(inp," is a Leap Year")
// }
// else{
//         console.log(inp," is not a Leap Year")
// }