import React from "react";

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <div>

                <div>{this.props.solution}</div>
            </div>
        );
        
    }
}
export default Content;