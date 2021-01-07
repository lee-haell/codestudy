/* 반복문 while, 조건문 */
document.write('<p>1</p>');

let i = 0;

while(i < 3) { 
    //i값이 처음 0이면 true, 아래 코드 실행 후 +1되어 1 >> 총 3번 반복됨
    document.write('<p>2</p>');
    document.write('<p>3</p>');
    i = i + 1;
}

document.write('<p>4</p>');
//2까지 반복출력되고 다음 코드 실행


/* 반복문에 배열 활용 */
let color = [ "red", "orange", "yellow", "green" ];

let i = 0;

while(i < color.length){ //배열에 데이터가 추가 또는 삭제되어도 변수의 길이만큼 반복되기 때문에 상관x
    document.write('<li>' + color[i] + '</li>');
    //color[i] ->> 변수의 배열 출력
    i = i + 1;
}


//js 제어문 Quiz2
var coworkers = ['a', 'b', 'c', 'd'];
var i = coworkers.length - 1;
while(i >= 0) {
    document.write(coworkers[i]);
    i = i - 1;
}
//dcba 출력



/* 함수 - 매개변수 & 인수 */ 
//함수 : 입력 + 출력
//매개변수 : Parameter
//인수 : Argument

function onePlusOne(){
    document.write(1+1);
    //항상 1+1만 출력됨
}

function leftRight(left, right){
    document.write(left + right);
    //left, right는 매개변수
}
leftRight(2, 3);
leftRight(5, 7);
//2, 3 그리고 5, 7은 인자 / 인자는 함수로 전달된다.


/* 리턴 return */ 
//적절한 값을 돌려주는 것
function something(left, right){
    return left + right;
}

document.write(something(2, 3));
document.write('<div style="color:red">' +something(5, 7)+ '</div>');


/* 객체 */
//폴더, 디렉토리, 순서가 없는 배열
//객체에 속한 함수는 메소드(객체:document, 함수:querySelector)
//함수 기반 위에 존재하는 개념(서로 연관된 함수와 변수가 많아지면 정리)
let countries = { //국가라는 오브젝트 생성
    "asia" : "korea"
};
//오브젝트 출력 (둘 다 같은 의미)
document.write("asia : " +countries.asia);
document.write("asia : " +countries["asia"]);
//오브젝트 추가 (둘 다 같은 의미)
countries.europe = "england";
countries["europe"] = "england";

/* 오브젝트 순회 */
for(let key in countries){
    document.write(key+'<br>');
}
//for ~ in: 국가 오브젝트의 요소에 모두 접근하여 '순회'하는 것
//for ~ key in: 국가 오브젝트의 모든 key값(변수)에 접근
for(let key in countries){
    document.write(countries[key]+'<br>');
}
//국가 오브젝트의 key값(변수)의 모든 데이터에 접근
for(let key in countries){
    document.write(key+': '+countries[key]+'<br>');
}

/* 오브젝트(프로퍼티와 메소드) */
countries.showAll = function() { //오브젝트에 함수지정
    for(let key in this){
        document.write(key+': '+this[key]+'<br>');
    }//this 사용이유는 추후에 변수가 변경될 수 있기 때문에!!!
}
countries.showAll();
//오브젝트에 소속된 함수(showAll) = 메소드 //오브젝트의 변수(key) = 프로퍼티

/* 예제문제 */
//조건문을 사용한 '메소드' 출력
countries.printProgrammer = function() {
    for(let key in this){
        if(key === 'asia'){
            document.write(key + ':' + this[key]);
        }
    }
}
countries.printProgrammer();