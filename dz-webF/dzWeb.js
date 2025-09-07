let arr = [123, 345, 'assdf', true, '678'];
let res = sumOddDigits(arr);
console.log(res);

function sumOddDigits(arr) {
    let len = arr.length;
    let arr2 = [];

    for (let i = 0; i < len; i++) {
        let num = +(arr[i]);

        if (!isNaN(num) && typeof arr[i] !=='boolean') {
            if (num < 0) num = -num;
            let sum = 0;

            while (num !== 0) {
                let digit = num % 10;
                if (digit % 2 !== 0) {
                    sum += digit;
                }
                num = Math.floor(num / 10);
            }

            arr2.push(sum);
        }
    }
    return arr2;
}


