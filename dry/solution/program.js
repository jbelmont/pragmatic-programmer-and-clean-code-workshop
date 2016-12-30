function uglyAverage() {
    var numbers = [1, 2, 3, 4, 5];

    var sum = 0, i;
    for (i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

function average(input) {
    return input.reduce((previous, current) => previous + current, 0) / input.length;
}

function average2(input) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += input[i];
    }
    return sum / input.length;
}

exports.uglyAverage = uglyAverage;
exports.average = average;
exports.average2 = average2;