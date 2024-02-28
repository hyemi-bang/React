import React from 'react';
import Alarm3 from "./Alarm3";

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

class AlarmList3 extends React.Component{
    constructor(props){
        super(props);
        // 일반 멤버변수로 선언
        this.alarms = []; 

        /* state로 변수 선언
         state 내부에 선언되어 있는 변수를 setState() 메서드로 수정할 때마다 
         해당 컴포넌트의 render()가 자동으로 호출되게끔 설계되어있다. */
        this.state ={ 
            alarms:[], // null이 아니고 0자리인 배열은 만든 것
        };
    }

    componentDidMount(){
        const alarms = this.state.alarms;

        timer = setInterval(()=>{
            //if(this.alarms.length < reservedAlarms.length){
                if(alarms.length < reservedAlarms.length){
                const index = alarms.length; 
            //const index = this.alarms.length; // 길이는 처음에 0
           // this.alarms.push(reservedAlarms[index]); // push 할때 render가 호출이 되지 않고 있다.
            alarms.push(reservedAlarms[index]); // push 할때 render가 호출이 되지 않고 있다.
            this.setState({
                alarms : alarms
            }); // setState로 업데이트를 해줘야 render()가 호출된다.
            console.log(`${index}번째 알람 추가`);
            } else{
                clearInterval(timer);
                console.log('모든 알람이 추가되었습니다.',this.alarms); // 콘솔에 추가되었으나 render가 돌아가지 않아서 화면에 출력은 안되고 있다.
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
                {/* {this.alarms.map((alarm)=>{ // 현재 timer = setInterval(()=>{},1000); alrams는 비어있는 배열이라 나오지 않는다. */}
                {this.state.alarms.map((alarm)=>{ 
                return(
                        <Alarm3
                            id={alarm.id}
                            message={alarm.message}
                        />
                    );
                })}
            </div>
        );
    }
}

export default AlarmList3;