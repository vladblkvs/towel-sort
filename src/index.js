
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];
    if (matrix) {
        matrix.forEach((arr, i) => {
            i % 2 !== 0 ? arr.sort((a, b) => b - a) : arr.sort((a, b) => a - b);
            arr.forEach(el => {
                result.push(el);
            });
        });
    }
    return result;
}
