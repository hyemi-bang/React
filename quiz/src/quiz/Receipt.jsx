import React from "react";

class Receipt extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <div>
                <li>{this.props.receipt}</li>
            </div>
        );       
    }
}
export default Receipt;