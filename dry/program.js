function uglyAverage() {
    var numbers = [1, 2, 3, 4, 5];

    var sum = 0, i;
    for (i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

exports.uglyAverage = uglyAverage;