import React from 'react';
import Alarm from "./Alarm";


class AlarmList extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            alarms:[], // null이 아니고 0자리인 배열은 만든 것
        };
    }

    render(){
        return(
            <div>
                <Alarm  message="[알림] 메세지가 도착했습니다"/>
                <Alarm  message="[Warring] 정말 삭제하시겠습니까?"/>
                <Alarm  message="[알림] 배달기사가 픽업 하였습니다."/>
            </div>
        );
    }
}

export default AlarmList;