//import는 다른 파일에 있는 원하는 문법을 가져와 사용할 수 있다
import{ useState } from 'react';

//JSX : 좀 더 세런된 방식의 리액트(JS + XML/HTML)
function Mybutton(props){
    const [isClicked, setIsClicked] = useState(false);
   
    return (
       <button onClick={()=>setIsClicked(true)}>
        {isClicked ? '잘하셨습니다.' : '여기를 누르세요.'}
       </button>
    );
}

export default Mybutton; // 이 파일의 Mybutton을 다른 파일에서 import 할 수 있게 만들어준다.