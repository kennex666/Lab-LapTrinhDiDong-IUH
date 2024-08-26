Array.prototype.myCustomFunction = function(callback) {
    const length = this.length;
    const copyArray = this.concat();

    const newArray = [];
    for (let i = 0; i < length; i++) {
        if (callback(copyArray[i], i, copyArray)) {
            newArray[newArray.length] = copyArray[i];
        }
    }

    return newArray;
}

function callbackTest(value, index, array) {
    return value < 5;
}

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(testArray.myCustomFunction(callbackTest));