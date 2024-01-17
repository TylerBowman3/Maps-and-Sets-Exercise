// #1

{1,2,3,4}

// #2

'ref'

// #3 

{
   0 [1,2,3] => 'True'
   1 [1,2,3] => 'False'
}

// #4

const hasDuplicate = arr => new Set(arr).size !== arr.length

// #5

function isVowel(char) {
    return 'aeiouAEIOU'.includes(char);
}

function vowelCounter(str) {
    let counter;
    for (let char of str) {
        if (isVowel(char) === true) {
        counter++
        }
    }
    function vowelMap(str) {
        let newStr = '';
        for (let char of str ) {
            if (isVowel(char) === true) {
                newStr += char
            }
        }
        const myMap = new Map()
        myMap.set(newStr, counter);
    }
    return myMap;
}



