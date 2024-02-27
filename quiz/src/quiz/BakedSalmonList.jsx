import React from "react";
import Receipt from "./Receipt";
import Content from "./Content";
class BakedSalmonList extends React.Component{
        constructor(props){
            super(props);
            this.state={
                receipt :[], 
            };
        }

        render(){
            return(
                <div>
                    <h2>맛있는 조리법</h2>
                        <h5>Baked Salmon</h5>
                            <Receipt receipt = "연어"/>
                            <Receipt receipt = "잣"/>
                            <Receipt receipt = "버터 상추"/>
                            <Receipt receipt = "옐로 스쿼시(Yello Squash, 호박의 한 종류)"/>
                            <Receipt receipt = "올리브 오일"/>
                            <Receipt receipt = "마늘"/>
                            
                        <h2>조리 절차</h2>
                            <Content solution = "오븐을 350도로 예열한다" />
                            <Content solution = "유리 , 잣을 그릇에 담는다" />
                            <Content solution = "오븐에서 베이킹 그릇에 올리브 오일을 두른다" />
                            <Content solution = "연어, 마늘15분간 익힌다" />
                            <Content solution = "옐로 스쿼시를 추가하고 다시 30분간 오븐에서 익힌다" />
                            <Content solution = "오븐에서 글릇을 꺼내서 15분간 식힌다음에 상추를 곁들여서 내놓는다." />
                </div>
            );
        }
}
export default BakedSalmonList;