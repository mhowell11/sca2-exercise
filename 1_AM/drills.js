const assert = require("assert");
//Day 1 Work
// Feel free to look things up online!

const reverse = function(str) {
    // TODO - write a function which reverses the string
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return console.log(joinArray);
}

reverse("Hello World!");


let factorial = function(num) {
    // TODO - write a function which returns the factorial of a positive integer
    // For example, 5! = 5 * 4 * 3 * 2 * 1 = 120
    let ans = 1;
    while (num > 1) {
        ans = ans * num;
        num -= 1;
    }
    console.log(ans);
}

factorial(5);


const announceDate = function() {
    // TODO - write a function which returns the current date in the following format:
    // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let time = date.getTime();
    console.log(`Today\'s date is ${month} ${day} ${year}. It is ${time}.`);
}

announceDate();



const shiftRight = function(str, num) {
    // TODO - write a function which shifts a string `num` characters to the right
    // Example = shiftThree("Hello") === "lloHe"}
    let newArr = [];
    for (let i = 0; i < num; i++) {
        newArr = arr.pop;
    }
    console.log(newArr);


}

shiftRight("Hello", 3);



const tokenize = function(str) {
    // TODO - write a function which converts a multi-word string into an array of words
    let arr = [];
    arr.push(str);
    const arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        let holder = arr.find(" ");
        arr.slice(holder);
        console.log(arr);
    }
}

tokenize("Hello World");

const uniqueOnes = function(arr) {
    // TODO - write a function which returns the inputted array without duplicate elements
    const num = arr.length();
    for (let i = 0; i < num + 1; i++) {
        let eq = arr.sort();
        if (eq = 0) {
            arr.pop(i);
        }
    }
    console.log(arr);
}

uniqueOnes([1, 2, 3, 4, 1, 5, 6, 2, 7]);

const zip = function(arr1, arr2) {
    // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
    // if the two arrays are of unequal length
    // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
    console.log(arr1.sort(arr2));
    arr1.join(arr2);
}

const unzip = function(arr) {
    // TODO - Write a function which does the opposite of `zip()`
    let arr1 = [];
    let arr2 = [];
    arr.slice((arr.length / 2));
}

// Write tests here:

//assert(1 < 2)
//assert(1 + 2 == 3)
//assert([2, 3][0] === 2)
//assert(reverse("3df") === "fd3")