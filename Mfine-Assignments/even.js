let arr=[2,9,11,15,8,45,31,23,10];
let evens=findevens(arr);

function findevens(num){
    if((num%2)==0){

        document.writeln(num + "<br />");
        console.log('The even numbers are :', num)
    }
}

arr.push(findevens);

