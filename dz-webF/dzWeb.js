let arr = [123, 345, 'assdf', true, '678'];
let res = sumOddDigits(arr);
console.log(res);

res = sumOddDigits2(arr);
console.log(res);


function sumOddDigits2(arr) {
    let arr3 = [];
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let n = arr[i];

        if(typeof n === 'boolean') continue;

        let n2=Number(n);

        if(Number.isFinite(n2)){
            if(n2<0) n2=-n2;
            let sum = 0;
            while(n2!==0){
                let dg = n2%10;
                if(dg%2!==0) sum +=dg;
                n2=Math.floor(n2/10);
            }
            arr3.push(sum);
        }
    }

    return arr3;
}

 
function sumOddDigits(arr) {
    let len = arr.length;
    let arr2 = [];

    for (let i = 0; i < len; i++) {
        let num = +(arr[i]);

        if (!isNaN(num) && typeof arr[i] !=='boolean' && num != Infinity && num != -Infinity) {
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



