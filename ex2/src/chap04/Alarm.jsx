import React from 'react';

const styles = {
    alarmWrapper: {
        margin : 10,
        padding: 10,
        border: 'solid 1px black',
    },
    messageText:{
        color: 'navy',
        fontSize: 16,
    },
};

class Alarm extends React.Component{
    constructor(props){
        super(props);
        this.state ={};
    }

    render(){
        return(
            <div style={styles.alarmWrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        );
    }
}

export default Alarm;