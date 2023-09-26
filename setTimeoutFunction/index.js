/*

let num = 0;

addNum();

function addNum(){
    setTimeout(() => {
        num++;
        console.log(num);
        addNum();
    }, 1000);
} 

*/


/*
let num = 0;

let intervalId;

intervalId = setInterval(addNum, 1000);

function addNum(){
        num++;
        console.log(num);
        if(num == 10){
            clearInterval(intervalId);
        }
} 

*/
/*
    let fileLoaded = false;

    const wait = new Promise((resolve, reject) => {


        if(fileLoaded){
            resolve("File loaded");
        }else{
            reject("File NOT loaded");
        }

    });

    wait.then(value => {
        console.log(value);
    }).catch(error => console.log(error));;
*/

