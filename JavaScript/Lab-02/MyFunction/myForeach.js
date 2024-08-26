Array.prototype.myCustomFunction = function(callback, initValue = 0) {
    const length = this.length;
    const copyArray = this.concat();

    for (let i = 0; i < length; i++) {
        callback(copyArray[i], i, copyArray);
    }
}

function callbackTest(value, index, array) {
    console.log("value " + value + " - index " + index);
}

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(testArray.myCustomFunction(callbackTest));
console.log(testArray.forEach(callbackTest))