
import React from 'react';

const styles = {
    alarmWrapper: {
        margin : 10,
        padding: 10,
        border: 'solid 1px blue',
    },
    messageText:{
        color: 'black',
        fontSize: 16,
    },
};

class AlarmQuiz extends React.Component{
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

    render(){
        return(
            <div style={styles.alarmWrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        );
    }
}

export default AlarmQuiz;