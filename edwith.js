//a링크 색상 변경 함수
function aLinkSetColor(color){
    let aLink = document.querySelectorAll('a');
        let i = 0;
        while(i < aLink.length){
            aLink[i].style.color = color;
            i = i + 1;
        }
}

//body 텍스트 색상 함수
function bodySetColor(color){
    document.querySelector('body').style.color = color;

}

//배경 색상 함수
function bgSetColor(color){
    document.querySelector('body').style.backgroundColor = color;
}

//다크모드 함수
function dayNightHandler(self){
    let target = document.querySelector('body');

    if(self.value === 'Day'){
        self.value = 'Night'
        bgSetColor('#000');
        bodySetColor('#fff');
        aLinkSetColor('pink');
    } else {
        self.value = 'Day'
        bgSetColor('#fff')
        bodySetColor('##000');
        aLinkSetColor('purple');
    }
}
