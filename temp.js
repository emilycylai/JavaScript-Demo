/*const PI = 3.1415926;
console.log(PI);*/

/*let x = prompt("請輸入半徑：");
    if (x >= 10) {
    let x = "5";
    console.log(x, "面積為", x ** 2 * PI, typeof x);
    //document.write("<h2 style='color:red'>面積為" + x ** 2 * PI + "</h2>");
    }
    document.write("<h2 style='color:red'>面積為" + x ** 2 * PI + "</h2>");
    alert("面積為" + x ** 2 * PI);
    console.log(x, typeof x);*/

/* let email = "lai810717@gmail.com";
console.log(email, typeof email, email.length);
console.log(email[0], email[email.length - 1]);
console.log(email.slice(0, 4));
console.log(email.includes("lai810717"));
email = email.replace("lai810717", "emily");
console.log(email);
console.log("emily" == "Emily");

//i++ ==> i+=1 ==> i=i+1
for (let i = 0; i < email.length; i++) {
    console.log(i, email[i]);
    document.write(email[i] + "<br>");
}*/

/*let x = 10;
let y = 5;

console.log(x + y++); //y=y+1
console.log(x, y);
console.log(x + "5");
console.log(x / "5");
console.log(x + Number("5.5"));*/

/*let x = String(10);
let y = Number("10");
//0==>false

x = 0;
x = 0.0;
x = false;
x = "";
x = null;
x = 1;
if (x) {
    console.log(x);
}
let z = Boolean(x);
console.log(z);
console.log(x === y);*/

/*let z = 30;
x = 10;
y = 20;
//&& ==> and; || ==> or; ! ==>not (true->false, false->true)
if (x < y && !(y > z)) {
    console.log("1");
}

let a = false;
if (!a) {
    console.log(a + 1);
}*/

/* let x = 5.6;
console.log(Math);
console.log(Math.PI);
console.log(x);
console.log(Math.abs(x));
// ceil 大於等於的整數
console.log(Math.ceil(x));
// floor 小於等於整數
console.log(Math.floor(x));
// round 四捨五入
console.log(Math.round(x));

// 亂數(0~1之間浮點數)
x = Math.random();
console.log(x);
console.log(x * 10);
// 0~10之間整數(0~9)==>(1~10)
console.log(Math.floor(x * 10) + 1);
// 1~49
console.log(Math.floor(x * 49) + 1);
// 10~100
Math.floor(Math.random() * (100 - 10 + 1)) + 10;

const START = 1;
const END = 49;
console.log("===================");

for (let i = 0; i < 6; i++) {
    let number = Math.floor(Math.random() * (END - START + 1)) + START;
    console.log("第" + (i + 1) + "個號碼為:" + number);
    // 反引號
    const output = `第${i + 1}個號碼為:${number}`;

    console.log(output);
    ocument.write(output + "<br>");
}

// 反引號
x = 10;
console.log("數字為" + x);
console.log(`數字為${x}`); */

//陣列
let data = [];
data = ["2022", "5", 29];
data1 = ["13", "10"];
console.log(data);

//一維
const START = 1;
const END = 49;
count=5;
let lotto=new Array();
for (let j = 0; j < count; j++) {
    let numbers = [];
    for (let i=0; i<6; i++){
        let number = Math.floor(Math.random()* (END - START + 1)) + START;
        numbers.push(number);
    }
    // console.log(numbers);
    lotto.push(numbers);

}
console.log(lotto);
console.log("--------------------");
let ulStr="<h3>樂透號碼</h3><ul>";
for (i=0; i<lotto.length; i++){
    console.log(lotto[i].join(","));
    ulStr+=`<h4><li>${lotto[i].join(",")}</li></h4>`;
}
ulStr+="</ul>";
document.write(ulStr);


//二維陣列
let students = [
        ["jerry", 78, 67, 89],
        ["mary", 100, 99, 88, 100],
        ["kevin", 77, 99],
];
console.log(students.length);
console.log(students[0].length);

//總分&平均分
for (let i = 0; i < students.length; i++) {
    let name = students[i][0];
    let scores = students[i].slice(1, students[i].length);
    //console.log(name, scores);
    let total = 0;
    for (let j = 0; j < scores.length; j++) {
         //console.log(`i=${i} j=${j} ${students[i][j]}`);
        total += scores[j];
    }
    avg = total / scores.length;
    console.log(name, total, avg);
}
//console.log(name,total);