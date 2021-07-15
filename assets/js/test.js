// function entry(firsttext="Please enter a number",secondtext="Please enter b number",thirdtext="Please enter c number"){
//     let a=prompt(firsttext);
//     let b=prompt(secondtext);
//     let c=prompt(thirdtext);
//     let sum = Number(a)+Number(b)+Number(c);
//     return sum;
// }

// alert(entry("Zahmet olmazsa a ni dahil edin","Zahmet olmazsa b ni dahil edin","Zahmet olmazsa c ni dahil edin"));

// let findMax =function(...numbers){
//     let max=numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i]>max) {
//             max=numbers[i]
            
//         }
//     }
//     console.log(Array.from(arguments));
//     return max;
// }

// alert(findMax(1,10,852,496512,74,12,56,15));

function greeting(name){
    document.write("Hello " + name);
}

function processUserInput(callback){
    let name =prompt("please enter name");
    callback(name);
}

processUserInput(greeting);