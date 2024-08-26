Array.prototype.myCustomFunction = function(callback, initValue = 0) {
    const length = this.length;
    const copyArray = this.concat();

    var preVal = initValue;

    for (let i = 0; i < length; i++) {
        preVal = callback(preVal, copyArray[i], i, copyArray);
    }

    return preVal;
}

function callbackTest(preVal, curVal, curIndex, array) {
    return preVal + curVal;
}

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(testArray.myCustomFunction(callbackTest));
console.log(testArray.reduce(callbackTest))