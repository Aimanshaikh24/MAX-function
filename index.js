function MaxfromArray(numbers) {
    let max = numbers[1]
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max){
            max = numbers[i];
        }
    }
    return max;
}
let Arr = [23, 44, 66, 33, 18, 99, 77, 43, 65];
console.log(MaxfromArray(Arr));