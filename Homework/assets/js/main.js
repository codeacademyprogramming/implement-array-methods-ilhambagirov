function reverse(arr) {
    const result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      result.push(arr[i]);
    }
    return result;
  }
//   alert(reverse([2,3,4,56,5,8]));



function concatination(...arrays){
        return arrays;
}
let result =concatination(...[1,2,3],...[1,2,3]);

let result2 =concatination(1,2,3,4,5,...[1,7,98,42]);

let result3 =concatination(1,2,3,4,5);
// console.log(result);
// console.log(result2);
// console.log(result3);




function someCheck (array,cb){
    result= false;
    for (let i = 0; i < array.length; i++) {

        if (cb(array[i])) {
            return true;
        }
    }
    return result;
}
// console.log(someCheck([1, 4, 3, 9, 11],(element) => element % 2 === 0 ? true :false));


function someCheck (array,cb){
    result= true;
    for (let i = 0; i < array.length; i++) {

        if (!cb(array[i])) {
            return false;
        }
    }
    return result;
}
// console.log(someCheck([1, 4, 3, 9, 50],(element) => element <40 ? true :false));


function customMap(array,cb){

    let resultArr=[];
    for (let i = 0; i < array.length; i++) {
        resultArr.push(cb(array[i]));
        
    }
    return resultArr;
}

// console.log(customMap([1, 4, 3, 9, 50], (element) =>element*3))


function customForEach(array,cb){

    let resultArr=[];
    for (let i = 0; i < array.length; i++) {
        resultArr.push(cb(array[i]));
        
    }
    // console.log(resultArr);
}

customForEach([1, 4, 3, 9, 50], (element) =>element*3);



function customFilter(array,cb){

    let result=[];
    for (let i = 0; i < array.length; i++) {
        if (cb(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}
// console.log(customFilter(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'],word => word.length > 6 ? true : false));
