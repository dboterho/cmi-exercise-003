
function main() {
    
    // max
    function max(param1, param2) {
        if (param1 < param2) {
            return param2;
        } else {
            return param1;
        }
    }
    
    var highest1 = max(2, 4);
    console.log(highest1);
    outputLine(highest1);
    
    var highest2 = max(7, 6);
    console.log(highest2);
    outputLine(highest2);
    
    // maxOfThree
    function maxOfThree(param1, param2, param3) {
        if (param1 > param2 && param1 > param3) {
            return param1;
        } else if (param2 > param1 && param2 > param3) {
            return param2;
        } else {
            return param3;
        }
    }
    
    var highest3 = maxOfThree(73, 33, 91);
    console.log(highest3);
    outputLine(highest3);
    
    var highest4 = maxOfThree(1, 3, 2);
    console.log(highest4);
    outputLine(highest4);
    
    // isVowel
    function isVowel(character) {        
        var vowels = ['a', 'e', 'i', 'o', 'u'];
        
        for (i = 0; i < vowels.length; i++) { 

            var currentVowel = vowels[i];
            
            if (character == currentVowel) {
                return true;
            }
        }
        
        return false;
    }
    
    var isItAVowel = isVowel('a');
    console.log(isItAVowel);
    outputLine(isItAVowel);
    
    var isItAVowel = isVowel('c');
    console.log(isItAVowel);
    outputLine(isItAVowel);
    
    var isItAVowel = isVowel('n');
    console.log(isItAVowel);
    outputLine(isItAVowel);
    
    
    // Homework #1 - sumNumbers
    // this function should sum all the values contained in the parameter 'numbers'
    // note that the 'numbers' parameter is a variable of type Array
    function sumNumbers(numbers) {
        
        // - first create a varialbe 'runningTotal'
        var runningTotal = 0;

        // - note that the param 'numbers' is an Array so create a for loop similar to line 44 in the isVowel example
        // - (open loop)
        for (i = 0; i < numbers.length; i++) {
            
            runningTotal = runningTotal + numbers[i];
            // - we're now iterative over each value in the 'numbers' array so get a reference to the value in this loop cycle
            // - we did this previously at line 46

            // - now increment the 'runningTotal' variable defined at line 73 with the value we just referenced
            // - so using the test below this number will in the first iteration be '1', then '2', then '3', then '4'
            // - or in the second test it will be '3', '3', '4', then '5'

        // - (close loop)
        }

        // - at this point the 'runningTotal' variable will be the sum of all values which were contained in the array 'numbers'
        
        // - we now return the 'runningTotal' variable like this...
        // return runningTotal
        return runningTotal;
    }
    
    var sum1 = sumNumbers([1, 2, 3, 4]);
    console.log(sum1); // should equal 10
    outputLine(sum1);
    
    var sum2 = sumNumbers([3, 3, 4, 5]);
    console.log(sum2); // should equal 15
    outputLine(sum2);
    
    
    // Homework #2 - reverse
    // this function should reverse the characters which are contained in the parameter 'phrase'
    // note that the 'phrase' parameter is of type String
    function reverse(phrase) {
        
        var returnString = '';
        
        // HINT: this converts a String such as 'hello' into the Array 
        // ['h', 'e', 'l', 'l', 'o'];
        var characters = phrase.split('');

        for (i = characters.length - 1; i >= 0; i--) {
            //var character = characters[i];
            returnString = returnString + characters[i];
        }
        
        return returnString;
    }
    
    var reversedCharacters = reverse('abcdef');
    console.log(reversedCharacters); // should equal 'fedcba'
    outputLine(reversedCharacters);
    
    var reversedNumbers = reverse('javascript');
    console.log(reversedNumbers);  // should equal 'tpircsavaj'
    outputLine(reversedNumbers);
    
    
    // Homework #3 - everySecondLetter
    // this function should return an Array containing every second letter contained in the 'phrase' parameter
    function everySecondLetter(phrase) {
        
        var returnArray = [];
        
        var characters = phrase.split('');
        
        for (i = 1; i < characters.length; i = i + 2) {
            
            var character = characters[i];
            
            returnArray.push(character);
            
        }
        
        return returnArray;
                
    }
    
    var secondLetters = everySecondLetter('letterbox');
    console.log(secondLetters);  // should equal ['e', 't', 'r', 'o']
    outputLine(secondLetters);
    
    var secondLetters = everySecondLetter('yoyo');
    console.log(secondLetters);  // should equal ['o', 'o']
    outputLine(secondLetters);
        
        
}

function outputLine(line) {
    
    var output = document.getElementById('output');
        
    var currentHtml = output.innerHTML;
    
    var newHtml = currentHtml + line + '<br />';
    
    output.innerHTML = newHtml;
    
}