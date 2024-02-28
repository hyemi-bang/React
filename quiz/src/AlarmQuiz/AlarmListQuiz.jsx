import React from 'react';
import AlarmQuiz from "./AlarmQuiz";

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
let currentAlarmIndex = 0;

const nextAlarm = () => 
        reservedAlarms[currentAlarmIndex++ % reservedAlarms.length];

class AlarmListQuiz extends React.Component{
    constructor(props){
        super(props);
        // 일반 멤버변수로 선언
        this.alarms = []; 

        this.state ={ 
            //alarm: reservedAlarms[currentAlarmIndex],
            alarm : nextAlarm(),
            alarms:[], // null이 아니고 0자리인 배열은 만든 것
        };
    }

    componentDidMount(){
        //const alarms = this.state.alarms;
        timer = setInterval(()=>{
            // 객체를 전달해서 업데이트 하는 setState()
            // this.setState({
            //     alarm : reservedAlarms[++currentAlarmIndex % reservedAlarms.length]
            // });

            // 함수를 전달해서 업데이트하는 setState()
            this.setState(state => ({alarm:nextAlarm()})); 
        },1000);
    }

    /* componentDidMount(){
        timer = setInterval(()=>{
        const alarms = this.state.alarms;
        const index = alarms.length % reservedAlarms.length; 

        this.setState({
            alarms: []
        }, () => {
            // 순환되야하는데 1개 div에 3개의 reservedAlarms이 1초마다 바뀌어야해
            alarms > 0 ? alarms.shift(reservedAlarms[index]) : alarms.push(reservedAlarms[index]);
            this.setState({
                alarms : alarms
            });
         
        });
        },1000);
    }
 */
 /*  componentDidMount(){
        this.updateAlarm(0);
    }
    
    updateAlarm(index) {
        setTimeout(() => {
            this.setState({
                alarms: [reservedAlarms[index]]
            }, () => {
                const nextIndex = (index + 1) % reservedAlarms.length;
                this.updateAlarm(nextIndex); // 다음 알람을 업데이트
            });
        }, 1000);
    }
 */
    componentWillUnmount(){
        if(timer){
            clearInterval(timer);
        }
    }

    render(){
        return(
            <div>
                <AlarmQuiz
                    id={this.state.alarm.id}
                    message={this.state.alarm.message}
                />
                {/* {this.state.alarms.map((alarm)=>{ 배열에 있는거 모두 출력하겠다는 것  

                return(
                        <AlarmQuiz
                            id={alarm.id}
                            message={alarm.message}
                        />
                    );
                })}*/}
            </div>
        );
    }
}

export default AlarmListQuiz;