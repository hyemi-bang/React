import React from 'react';
import Alarm2 from "./Alarm2";

const reservedAlarms = [
    {
        id: 1,
        message: '[알림] 메세지가 도착했습니다',
    },
    {
        id: 2,
        message: '[Warring] 정말 삭제하시겠습니까?',
    },
    {
        id: 3,
        message: '[알림] 배달기사가 픽업 하였습니다.',
    },
];

let timer;

class AlarmList2 extends React.Component{
    constructor(props){
        super(props);
        this.alarms = []; // 일반 멤버변수로 선언
        this.state ={ // state로 변수 선언
            alarms:[], // null이 아니고 0자리인 배열은 만든 것
        };
    }

    

    componentDidMount(){
        timer = setInterval(()=>{
            if(this.alarms.length < reservedAlarms.length){
            const index = this.alarms.length; // 길이는 처음에 0
            this.alarms.push(reservedAlarms[index]); // push 할때 render가 호출이 되지 않고 있다.
            console.log(`${index}번째 알람 추가`);
            } else{
                console.log('모든 알람이 추가되었습니다.',this.alarms); // 콘솔에 추가되었으나 render가 돌아가지 않아서 화면에 출력은 안되고 있다.
                clearInterval(timer);
            }
        },1000);
    }

    componentWillUnmount(){
        if(timer){ // 뭔가 값이 들어있기만 하면 실행이 된다. 0 또는 null 또는 undefine 아니면 다 참임으로
            clearInterval(timer);
        }
    }

    render(){
        return(
            <div>
                {/* {reservedAlarms.map((alarm)=>{ */}
                {this.alarms.map((alarm)=>{ // 현재 timer = setInterval(()=>{},1000); alrams는 비어있는 배열이라 나오지 않는다.
                    return(
                        <Alarm2
                            id={alarm.id}
                            message={alarm.message}
                        />
                    );
                })}
            </div>
        );
    }
}

export default AlarmList2;