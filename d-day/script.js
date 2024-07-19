// input(type:date) 태그가져오기
let date = document.getElementById('date');
// h3태그 가져오기(현재날짜 출력)
let curDateElement = document.getElementById("curDate")
// P태그 가져오기(결과 출력)
let resultElement = document.getElementById('result');
// 버튼태그 가져오기(날짜계산 버튼)
let calBtn = document.getElementById('calBtn');
// 현재 날짜
let curDate = new Date();
// 현재 년도
let curYear = curDate.getFullYear();
// 현재 달(0~11)
let curMonth = curDate.getMonth()+1;
// 현재 일
let curDay = curDate.getDate();
// 현재 요일(0~6)
let dayOfWeek = curDate.getDay();

//dd변수를 null로 초기화
let dd = null;
// dayOfWeek : 0~6
switch (dayOfWeek){
    case 0:
        dd = "일";
        break;
      case 1:
        dd = "월";
        break;
      case 2:
        dd = "화";
        break;
      case 3:
        dd = "수";
        break;
      case 4:
        dd = "목";
        break;
      case 5:
        dd = "금";
        break;
      case 6:
        dd = "토";
        break;
      default:
        dd = "";
}
//현재날짜 웹페이지에 출력
curDateElement.innerHTML = `${curYear}년 ${curMonth}월 ${curDay}일 ${dd}요일`;

function getDiffDay(externalDate){
    let diff = externalDate - curDate;
    let diffDay = Math.ceil(diff / (1000 * 60 *60 * 24));
    return diffDay;
}


calBtn.addEventListener("click",()=>{
    // input태그에서 선택된날짜문자열을
    // 날짜 객체로 변환
    //2024-07-02 -> 2024-07-02T00:00:00 ...
    let selectedDate = new Date(date.value);
    // 밀리초
    let diff = selectedDate - curDate;
    //날짜 차이
    let diffDay = Math.ceil(diff / (1000 * 60 *60 * 24));
    resultElement.innerHTML = `D-day까지 ${diffDay}일 남았습니다.`
    //스타일시트 적용하기
    resultElement.style = 'color:green; font-size:20px';
}
)

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click',()=>{
    //input text태그의 값 가져오기
    let title = document.getElementById("title").value;
    // 날짜 값 가져오기
    let date = document.getElementById('date').value;
    //함수를사용해서 날짜차이값 반환
    let diffDay = getDiffDay(new Date(date));
    // ul태그 가져오기
    let ul  = document.getElementById('ddayList');
    //li태그 생성
    let li = document.createElement("li");
    li.innerHTML = `
    <span style='color:red'>${title}</span>
     까지 ${diffDay}일 남았습니다.
    `
    ul.appendChild(li);

})
