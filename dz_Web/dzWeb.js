//const arr = [11,23,88,11,0,88,45,-254,88];

const arr2 = [];
let inputData = prompt('Enter elements of array,separated by commas');
while (inputData!== null && inputData !== undefined && inputData.trim() !== '') {
    let num = +inputData;
    if(Number.isFinite(num)){
        arr2.push(num);

}

    inputData = prompt('Enter elements of array,separated by commas or press cancel');

}


function findMax(arr2) {

    let max = arr2[0];

    for (let i = 1; i < arr2.length; i++) {
        if (arr2[i] > max) {
            max = arr2[i];
        }
    }
    const maxInd = [];
    const arrMax = []; // dla proverki,esli 1 element max;
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] === max) {
            maxInd.push(i);
            arrMax.push(arr2[i]);
        }
    }
    if (maxInd.length===1) console.log(`Max element = ${max}, index = ${maxInd}`) ;
    else console.log(`[${arr2}], max element = ${max}, index = [${maxInd}]`) ;
    return{max, maxInd, arrMax};
}

const result= findMax(arr2);
console.log(result);
