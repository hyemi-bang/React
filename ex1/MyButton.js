// 구버전 
function Mybutton(props){
    const [isClicked, setIsClicked] = React.useState(false);
    // React 객체는 html 문법에서 불러왔기 때문에 사용할 수 있는 부분
    // React : 클래스 / useState : react에 딸린 스태틱 메서드 , 2가지의 배열을 리턴한다 (isClicked, setIsClicked)
    // useState는 배열을 반환하며 첫 번째 요소는 상태값, 두 번째 요소는 해당 상태값을 변경하는 함수.
    console.log(React.useState);
    console.log(React.useState(false));

/*
ƒ useState(initialState) {
    var dispatcher = resolveDispatcher();
    return dispatcher.useState(initialState);
  }
MyButton.js:8 (2) [false, ƒ]0: false1: ƒ ()length: 2[[Prototype]]: Array(0)

*/

    return React.createElement(
        // React.createElement(type, props, child)
        // : 원하는 컴포넌트로 요소(Element)를 생성한다

        // createELement : 메서드, 3가지의 인자값( 요소의 타입, 속성(props), 자식 요소(children))을 가지고 있다.

        'button', // 버튼 엘리먼트를 생성
        { onClick: () => setIsClicked(true)}, // props는 해당 요소의 속성을 채우는 것, // 버튼 클릭 시 setIsClicked 함수를 호출하여 상태값을 변경.
        isClicked ? '잘하셨습니다.' : '여기를 누르세요.'
    );
}
// root를 선택해 가져옴
//const domContainer = document.querySelector('#root');
// ReactDOM.render를 사용하여 MyButton 컴포넌트를 DOM에 렌더링(컴포넌트를 화면에 그리는 작업) 수행
//ReactDOM.render(React.createElement(Mybutton), domContainer);