let getNum = document.getElementById("Number").value;
getNum = getNum.split(" ");

function result(){
    let sum = 0;
    for (let i = 0; i < getNum.length; i++) {
        sum += Number( getNum[i] ); 
}
alert(sum)
}
