const h1E1 = document.querySelector("h1");

h1E1.innerText="測試";
h1E1.innerHTML = "<li>測試</li>";

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

    for (let i=0; i<count;i++){
        while (true){
            let number =getRandInt(start,end);
            if(!numbers.includes(number)){
                numbers.push(number);
                break;
            }        
        }
    }

    //特別號
    if (special){
        numbers.push(getRandInt(start,end));
    }
    return numbers;
}
//let count=prompt("請輸入筆數：");
//let ulStr="<h3>樂透號碼</h3><ul>";

//for (let i=0; i<count; i++){
    //let lotto=getLottoNumbers(1,49);
    //console.log(lotto);
    //ulStr+=`<h4><li>${lotto.join(",")}</li></h4>`;
//}
//ulStr+="</ul>";
//document.write(ulStr);

const dateEl = document.querySelectorAll(".date");
const lottoEl = document.querySelector(".lotto-number ul");
const startEl = document.querySelector("#start");

console.log(lottoEl);
dateEl.forEach(date => {
    date.innerText = "2022/6/12";
});

startEl.addEventListener("click",()=>{
    dateEl[0].innerHTML = new Date();
    lottoEl.innerHTML="";
    for (let i =0; i<5; i++){
        let numbers =getLottoNumbers(1,49,6,true);
        console.group(numbers);
        lottoEl.innerHTML+=`<li>${numbers.join(" ")}</li>`;
    }

    const liEl = document.querySelectorAll("li");

    for (let i = 0; i<liEl.length; i++) {
        if (i % 2==0) {
            liEl[i].style.background = "black";
            liEl[i].style.color = "orange";
        }
    }
});