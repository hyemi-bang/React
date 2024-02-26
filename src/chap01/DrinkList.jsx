import React from 'react';
import Drink from './Drink';

function DrinkList(props){ // 상위컴포넌트(DrinkList)는 하위컴포넌트(Drink)에게 props를 전달한다
    return(
        <div>
            <Drink name="콜라" price={2000}/> 
            {/* 문자열을 제외한 타입들은 {} 자바스크립트로 사용해줘야한다  */}
            <Drink name="홍차" price={2800}/>
            <Drink name="커피" price={3000}/>
            <Drink name="환타" price={1800}/>
        </div>
    );
}

export default DrinkList;