// Start Basic Big O(n) --> Linear TIme
/* const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo',
    'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']
const large = new Array(100000).fill('nemo');

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
        }
    }
}

findNemo(large); // O(n) --> Linear TIme */

// End Basic Big O(n)
/***********************/

/***********************/
// Start Basic Big O(1) -- > Constant Time
const boxes = [0,1,2,3,4,5];

function logFirstTwoBox(boxes) {
    console.log(boxes[0]); // O(1)
    console.log(boxes[1]); // O(1)
}

logFirstTwoBox(boxes); // O(2) --> O(1) - Constant Time
// End Basic Big O(1)
/***********************/

/***********************/
//Start Exercise 1 
/* What is the Big O of the below function? 
* (Hint, you may want to go line by line)
*/
function funChallenge(input) {
    let a = 10; // O(1)
    a = 50 + 3; // O(1)
  
    for (let i = 0; i < input.length; i++) { // O(n)
      anotherFunction(); // O(n)
      let stranger = true; // O(n)
      a++; // O(n)
    }
    return a; // O(1)
  }
  //Will be BIG O(3 + 4n)

  //End Exercise 1 