// HTML에서 버튼과 숨겨진 박스 요소를 가져옵니다.
const toggleBtn = document.getElementById('toggle-btn');
const moreIntro = document.getElementById('more-intro');

// 버튼을 클릭했을 때 작동하는 이벤트 함수
toggleBtn.addEventListener('click', () => {
    // 'show' 클래스를 넣었다 뺐다(toggle) 합니다.
    moreIntro.classList.toggle('show');

    // 열고 닫힘에 따라 버튼 글자를 변경합니다.
    if (moreIntro.classList.contains('show')) {
        toggleBtn.textContent = '접기';
    } else {
        toggleBtn.textContent = '더 알아보기';
    }
});
