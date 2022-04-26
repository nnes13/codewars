
function maps(x){
    //take in array;
    let newArr = [];
    //iterate through array;
    x.forEach(function(value){
        //double value in array;
        newArr.push(value *2);
    })
    //return new array with values doubled
    return newArr;
}


    //take in array;
function minMax(arr){
    //identify high and low values
    let max = -Infinity;
    let min = Infinity;
    //iterate through array;
    arr.forEach(function(num){
        if(num > max) {
            max = num;
        }
        if (min > num) {
            min = num;
        }
    })
    //return high and low values
    return [min,max]; 
  }

// Write here your multiply-function

multiply = (n1,n2) => n1 * n2; 


function getAge(inputString){
    return parseInt(inputString[0]); 
}


//takes in array
function stray(numbers) {
    //sort array ascending order
    numbers.sort(function (a,b) {
        return a - b;
    })
    //if statement to compare first to second, if they're the same return last, otherwise return 1st
    if( numbers[0] === numbers[1]) {
        return numbers[numbers.length - 1];
    }
    else {
        return numbers[0]
    }
  }

  
  function arithmetic(a, b, operator){
      //the string is an operator
      //use a switch instead of if statements. takes in a case '' and returns something. 
    switch (operator) {
        case 'add': 
            return a + b;
            break;
        case 'subtract':
            return a - b;
            break;
        case 'multiply':
            return a * b;
            break;
        case 'divide': 
            return a/b;
            break;
    }
  }



//convert sorted array into strings
//concat strings
//parse int strings
//return number

//function takes in array
  function minValue(values){
    //sort array in ascending order 
    values.sort(function(a,b){
        return a - b;
    })
    //remove duplicates into new array
    let newArr = [];
    values.forEach(function(int){
        if(!newArr.includes(int)) {
            newArr.push(int)
        }
    })
    //join converts array in to string, parse int converts into number and then return it
    return parseInt(newArr.join(''));
  }


//write a function that takes in a string
function disemvowel(str) {
    //convert the string into an array
    let noVowel = str.split('');
    //iterate through array ONLY USING FOR LOOP BECAUSE OF SPLICE and check for vowels
    for(let i = 0; i < noVowel.length; i++) {
        //check if values are vowels and make them lowercase
        if(noVowel[i].toLowerCase() === 'a' || noVowel[i].toLowerCase() === 'e' || noVowel[i].toLowerCase() === 'i' || noVowel[i].toLowerCase() === 'o' || noVowel[i].toLowerCase() === 'u') {
            //splice out the vowels 
            noVowel.splice(i,1);
            //move back in the iteration to account for the element removed
            i--;
        }
    }
    //return the joined string from the array.
    return noVowel.join('');
}

//Find a way to merge 2 arrays into 1 and remove duplicates

//Make a function that takes in 2 arrays as arguements
function mergeArrays(arr1, arr2) {
        //combine the two arrays
       let arr3 = arr1.concat(arr2);
       //sort them from smallest to largest 
       arr3.sort(function(a,b) {
           return a - b;
       });
       //remove duplicate items
       let filteredArr = [];
       arr3.forEach((value) => {
           if (!filteredArr.includes(value)) {
               filteredArr.push(value);
           }
       });
    //return new array
    return filteredArr;
}

//Write a function that takes in an array of words and smashes them together in a sentence and returns it;

//combine elements in array into a string and seperate with spaces
function smash (words) {
    let sentence = words.join(' ');
    //return the string;
    return sentence;
 };


//Write a function to split a string and convert it into an array of words.

function stringToArray(string){
    return string.split(' ');
}

//For every good kata idea there seem to be quite a few bad ones!

//In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.


//make a function that takes in an array
//count how many elements are called 'good'.
//return what it says depending on the case.
function well(x) {
    let count = x.reduce(function(num,value){
        if (value === 'good') {
            return num++;
        }
        else {
            return num;
        }
    }, 0);
    if (count > 0 && count <= 2) {
        return 'Publish!';
    }
    else if (count > 2) {
        return 'I smell a series!';
    }
    else {
        return 'Fail!';
    }
}

//Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

function solution(nums){
    if (nums === null) {
        return [];
    }
    nums.sort(function sort(a,b) {
        return a - b;
    })
    return nums;
};


//write a function that takes an int and returns a list of it's multiples up to limit.
function findMultiples(integer, limit) {
    let newArr = [];
    for (i = 1; i <= limit; i++) {
        if (i % integer === 0) {
            newArr.push(i);
        }
    }
    return newArr;
}

//write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

function stringy(size) {
    let str = '';
    for (i = 1; i <= size; i++) {
        if(i % 2 !== 0) {
            str = str + 1;
        }
        else {
            str = str + 0};
    }
    return str;   
}

//make a function that takes in a string (s) and clean out the string and removes all numbers leaving the rest. 
//check every character in s and see if it's a number. if it is, remove it. 
function stringClean(s){
    let arr = s.split('');
    for(i = 0; i < arr.length; i++) {
        if(isNaN(arr[i]) === false) {
            arr.splice(i,1);
            i--;
        }
    }
    s = arr.join('');
    return s;
}


//Given a number n, return the number of positive odd numbers below n, EASY!
//create a loop that's going to run from 0 to n and return all of the numbers less than n but > 0;

function oddCount(n){
    let arr = [];
    for(i = 0; i < n; i++) {
        if (i % 2 !== 0) {
            arr.push(i);
        } 
    }
    return arr.length;
}

function oddCount(n){
    let count = 0;
    for(i = 0; i < n; i++) {
        if (i % 2 !== 0) {
            count++;
        } 
    }
    return count;
}


function oddCount(n) {
    if (n % 2 !== 0) {
        n++
    }
    return n/2;
}

//Write a function that returns a string in which firstname is swapped with last name.

function nameShuffler(str){
    let arr = str.split(' ');
    arr.reverse();
    return arr.join(' ')
}

//You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

function solve(n) {
    let numOfBills = 0;
    if (n % 10 !== 0) {
        return -1;
    }
    if (n % 500 === 0) {
        return n / 500;
    }
    else {
        numOfBills += (n - (n % 500)) / 500;
        n = n % 500;
    }
    if (n % 200 === 0) {
        return numOfBills + n / 200;
    }
    else {
        numOfBills += (n - (n % 200)) / 200;
        n = n % 200;
    }
    if (n % 100 === 0) {
        return numOfBills + n / 100;
    }
    else {
        numOfBills += (n - (n % 100)) / 100;
        n = n % 100;
    }
    if (n % 50 === 0) {
        return numOfBills + n / 50;
    }
    else {
        numOfBills += (n - (n % 50)) / 50;
        n = n % 50;
    }
    if (n % 20 === 0) {
        return numOfBills + n / 20;
    }
    else {
        numOfBills += (n - (n % 20)) / 20;
        n = n % 20;
    }
    if (n % 10 === 0) {
        return numOfBills + n / 10;
    }
    else {
        numOfBills += (n - (n % 10)) / 10;
        n = n % 10;
    }
    return numOfBills;

    //How much to withdraw
    //Figure out the breakdown to get n
    //how many times do each denomination go into n
    //return that number or -1 or if it's impossible. 
}


//Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

var capitals = function (word) {
    let arr = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) { 
            arr.push(i);
        }
    }
    return arr;
};


//Given a list of integers, determine whether the sum of its elements is odd or even.
//Give your answer as a string matching "odd" or "even".

function oddOrEven(array) {
    //add the elements
    let total = array.reduce(function(acc, value){
        return acc + value;
    },0);
    //conditional to see what to return
    //check if it's odd or even
    if (total % 2 === 0) {
        return 'even'
    }
    else {
        return 'odd';
    }
}


//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
function reverseWords(str) {
    //reverse every word in the string seperately with a space between. 
    let arr = str.split(' ');
    //map to use split, reverse and join on each word in the array individually
    return arr.map(function(word){
        return word.split('').reverse().join('')
    }).join(' ');
}

//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
        return [];
    }
    let newArr = [];
    let count = 0;
    let sum = 0;
    //return a new array that counts the positive and sums the negative nums in input(array)
    for(let i = 0; i < input.length; i++) {
    //conditional for if it's positive or negative, positive ones get added, negative ones get summed. 
        if (input[i] > 0) {
            count ++;
        }
        else {
            sum += input[i];
        }
    }
    newArr.push(count);
    newArr.push(sum);        
    return newArr;
}


var humanYearsCatYearsDogYears = function(humanYears) {
    //create array to return and push human years as 1st value;
    let arr = [];
    arr.push(humanYears);

    //code for cat years and push to array;
    let catYears
    if (humanYears === 1) {
        catYears = 15;
    }
    else if (humanYears === 2) {
        catYears = 24;
    }
    else if (humanYears > 2) {
        catYears = 24;
        for(let i = 2; i < humanYears; i++) {
            catYears += 4;
        }
    }
    arr.push(catYears);

    //code for dog years and push to array

    let dogYears
    if (humanYears === 1) {
        dogYears = 15;
    }
    else if (humanYears === 2) {
        dogYears = 24;
    }
    else if (humanYears > 2) {
        dogYears = 24;
        for(let i = 2; i < humanYears; i++) {
            dogYears += 5;
        }
    }
    arr.push(dogYears);

    return arr;
}
  