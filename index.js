//函式表達式
const getRandInt =(start, end)=>Math.floor(Math.random() *(end - start+1))+start;
console.log(getRandInt(10,100));

//單一亂數function
function getRandomNumber(start, end){
    let number =Math.floor(Math.random() *(end - start+1))+start;
    return number;
}

//取得樂透號碼function
function getLottoNumbers(start,end,count=6,special=true){
    let numbers=[];
    do{
        let number =getRandInt(start,end);
        if(!numbers.includes(number)){
            numbers.push(number);
       }
    }while(numbers.length<count);

    //排序
    console.log(numbers.sort((a,b)=>{
        return a-b;
    }));

    //for (let i=0; i<count;i++){
        //while (true){
            //let number =getRandInt(start,end);
            //if(!numbers.includes(number)){
                //numbers.push(number);
                //break;
            //}        
        //}
    //}

    //特別號
    if (special){
        numbers.push(getRandInt(start,end));
    }
    return numbers;
}
let count=prompt("請輸入筆數：");
let ulStr="<h3>樂透號碼</h3><ul>";

for (let i=0; i<count; i++){
    let lotto=getLottoNumbers(1,49);
    console.log(lotto);
    ulStr+=`<h4><li>${lotto.join(",")}</li></h4>`;
}
ulStr+="</ul>";
document.write(ulStr);