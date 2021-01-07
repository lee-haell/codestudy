//a링크 색상 변경 함수
// function aLinkSetColor(color){
//     let aLink = document.querySelectorAll('a');
//         let i = 0; //첫번째 a링크부터
//         while(i < aLink.length){
//             aLink[i].style.color = color;
//             i = i + 1;
//         }
// }

//body 텍스트 색상 함수
// function bodySetColor(color){
//     BODY.style.color = color;
// }

//배경 색상 함수
// function bgSetColor(color){
//     BODY.style.backgroundColor = color;
// }

/* 위의 함수들을 Object의 메소드로 변경하여 리팩토링 */
let BODY = {
    setColor : function(color){
        document.querySelector('body').style.color = color;
    },
    bgSetColor : function(color){
        document.querySelector('body').style.backgroundColor = color;
    }
}

let aLink = {
    setColor : function(color){
        let linkList = document.querySelectorAll('a');

        let i = 0; //첫번째 a링크부터
        while(i < linkList.length){
            linkList[i].style.color = color;
            i = i + 1;
        }
    }
}
//두 오브젝트에 같은 메소드값(setColor)이 있지만, 다른 오브젝트이기 때문에 충돌이 일어나지 않는다!!!

//다크모드 함수
function dayNightHandler(self){ //self=매개변수 
    if(self.value === 'Day'){
        self.value = 'Night'
        BODY.setColor('#fff');
        BODY.bgSetColor('#000');
        aLink.setColor('pink');
    } else {
        self.value = 'Day'
        BODY.setColor('#000');
        BODY.bgSetColor('#fff')
        aLink.setColor('purple');
    }
}