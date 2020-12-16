/* 반복문 while, 조건문
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
*/

/* 반복문에 배열 활용 */
let color = [ "red", "orange", "yellow", "green" ];

let i = 0;

while(i < color.length){ //배열에 데이터가 추가 또는 삭제되어도 변수의 길이만큼 반복되기 때문에 상관x
    document.write('<li>' + color[i] + '</li>');
    //color[i] ->> 변수의 배열 출력
    i = i + 1;
}
