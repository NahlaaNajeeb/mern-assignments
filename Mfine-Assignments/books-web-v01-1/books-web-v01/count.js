let countdown = new Promise((resolve, reject) => {
    console.log("Countdown start")

    let count = 12;
    let inte = setInterval(function () {
        count--;
        console.log(`Count ${count}`);
    }, 1000);


    setTimeout(function () {
        clearInterval(inte);
        resolve('Done');
    }, 6000);

})

countdown.then((result) => {
 
    console.log(result)
});
