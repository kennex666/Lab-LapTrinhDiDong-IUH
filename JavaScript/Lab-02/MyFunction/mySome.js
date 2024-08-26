Array.prototype.myCustomFunction = function(callback) {
    const length = this.length;
    const copyArray = this.concat();

    for (let i = 0; i < length; i++) {
        if (callback(copyArray[i], i, copyArray)) {
            return true;
        }
    }

    return false;
}

function callbackTest(value, index, array) {
    return value < 0;
}

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(testArray.myCustomFunction(callbackTest));
console.log(testArray.some(callbackTest))