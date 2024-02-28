import React from 'react';

const styles = {
    alarmWrapper: {
        margin : 10,
        padding: 10,
        border: 'solid 1px gray',
    },
    messageText:{
        color: 'blueblack',
        fontSize: 16,
    },
};

class Alarm3 extends React.Component{
    constructor(props){
        super(props);
        this.state ={};
    }

    componentDidMount(){
        console.log(`알람 ${this.props.id}의 componentDidMount()호출됨`);
    }

    componentDidUpdate(){
        console.log(`알람 ${this.props.id}의 componentDidUpdate()호출됨`);
    }
    componentWillUnmount(){
        console.log(`알람 ${this.props.id}의 componentWillUnmount()호출됨`);
    }
    // DidMount - WillUnmount - DidMount 호출됨
    // 현재 index.js에서 <React.StrictMode>에 감싸진 상황 이기 때문 이 부분을 다 지우면 DidMount만 호출된다.
    // React.StrictMode 디버깅 과정의 일환으로 프로그램을 실행했다가, 지운 후 괜찮으니 다시 추가해서 보여주는 것이다.

    render(){
        return(
            <div style={styles.alarmWrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        );
    }
}

export default Alarm3;