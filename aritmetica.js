function soma(arr1, arr2) {
    //.map do a iterate w/ arr1 , index = position in array
    return arr1.map((num, index) => num + arr2[index]);
}

function sub(arr1, arr2) {
    return arr1.map((num, index) => num - arr2[index]);
}

export default { soma, sub };
